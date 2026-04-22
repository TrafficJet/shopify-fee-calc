// Cloudflare Pages Function — POST /api/subscribe
// Env vars (set in Cloudflare Pages Dashboard → Settings → Environment Variables):
//   RESEND_API_KEY, AIRTABLE_API_KEY, AIRTABLE_BASE_ID,
//   BEEHIIV_PUB_ID, BEEHIIV_API_KEY, SITE_URL

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS });
}

export async function onRequestPost({ request, env }) {
  try {
    const { email, source, newsletter } = await request.json();

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return json({ error: 'Invalid email' }, 400);
    }

    const results = await Promise.allSettled([
      saveToAirtable(email, source, newsletter, env),
      newsletter ? addToBeehiiv(email, source, env) : Promise.resolve(),
      sendConfirmationEmail(email, source, newsletter, env),
    ]);

    const failed = results.filter(r => r.status === 'rejected');
    if (failed.length === results.length) {
      console.error('All operations failed:', failed.map(f => f.reason));
      return json({ error: 'Internal error' }, 500);
    }

    return json({ success: true }, 200);
  } catch (err) {
    console.error('subscribe error:', err);
    return json({ error: 'Bad request' }, 400);
  }
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

async function saveToAirtable(email, source, newsletter, env) {
  if (!env.AIRTABLE_API_KEY || !env.AIRTABLE_BASE_ID) return;
  const res = await fetch(
    `https://api.airtable.com/v0/${env.AIRTABLE_BASE_ID}/Subscribers`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Email: email,
          Source: source || 'unknown',
          'Newsletter Opt-in': !!newsletter,
          'Signed Up': new Date().toISOString(),
          Status: 'active',
        },
      }),
    }
  );
  if (!res.ok) throw new Error(`Airtable ${res.status}: ${await res.text()}`);
}

async function addToBeehiiv(email, source, env) {
  if (!env.BEEHIIV_API_KEY || !env.BEEHIIV_PUB_ID) return;
  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${env.BEEHIIV_PUB_ID}/subscriptions`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.BEEHIIV_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        custom_fields: [{ name: 'source', value: source || 'shopify-fee-calc' }],
      }),
    }
  );
  if (!res.ok) throw new Error(`Beehiiv ${res.status}: ${await res.text()}`);
}

async function sendConfirmationEmail(email, source, newsletter, env) {
  if (!env.RESEND_API_KEY) return;

  const toolNames = {
    'profit-calculator': 'Shopify Profit Calculator',
    'hidden-fees-audit': 'Shopify Hidden Fees Audit',
  };
  const toolName = toolNames[source] || 'Shopify Fee Calculator';
  const siteUrl = env.SITE_URL || 'https://shopify-fee-calc.com';

  const html = newsletter
    ? `<!DOCTYPE html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111">
<h2 style="margin:0 0 8px;font-size:20px">You're on the list 🎉</h2>
<p style="color:#555;margin:0 0 16px">Thanks for signing up for <strong>Shopify Profit Weekly</strong>. You'll get one actionable tip per week — no fluff.</p>
<p style="color:#555;margin:0 0 16px">While you wait for your first issue, try our other free calculators:</p>
<ul style="color:#555;padding-left:20px;margin:0 0 24px">
  <li style="margin-bottom:8px"><a href="${siteUrl}/shopify-profit-calculator/" style="color:#2563eb">Shopify Profit Calculator</a> — full P&amp;L with margin analysis</li>
  <li style="margin-bottom:8px"><a href="${siteUrl}/shopify-hidden-fees-audit/" style="color:#2563eb">Hidden Fees Audit</a> — find what Shopify doesn't advertise</li>
  <li style="margin-bottom:8px"><a href="${siteUrl}/break-even/" style="color:#2563eb">Break-Even Calculator</a> — price products to survive on paid ads</li>
</ul>
<p style="color:#999;font-size:12px;border-top:1px solid #eee;padding-top:16px;margin:0">
  You subscribed via ${toolName} at shopify-fee-calc.com.<br>
  Unsubscribe any time by replying "unsubscribe" to this email.
</p>
</body></html>`
    : `<!DOCTYPE html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111">
<h2 style="margin:0 0 8px;font-size:20px">Your results are saved ✓</h2>
<p style="color:#555;margin:0 0 16px">We've noted your ${toolName} session. Bookmark <a href="${siteUrl}" style="color:#2563eb">shopify-fee-calc.com</a> to return any time.</p>
<p style="color:#555;margin:0 0 16px">Want weekly tips on improving your Shopify margins? <a href="${siteUrl}/shopify-profit-calculator/" style="color:#2563eb">Run the calculator again</a> and check the newsletter box.</p>
<p style="color:#999;font-size:12px;border-top:1px solid #eee;padding-top:16px;margin:0">
  You submitted your email via ${toolName} at shopify-fee-calc.com.
</p>
</body></html>`;

  const subject = newsletter
    ? 'Welcome to Shopify Profit Weekly 🎉'
    : `Your ${toolName} results — shopify-fee-calc.com`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Shopify Fee Calc <hello@shopify-fee-calc.com>',
      to: email,
      subject,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}
