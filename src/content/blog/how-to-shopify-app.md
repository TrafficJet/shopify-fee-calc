---
title: "How to Build a Shopify App in 2026 (Step-by-Step)"
slug: "how-to-shopify-app"
pubDate: 2026-05-03
description: "Learn how to build a Shopify app from scratch. Step-by-step guide covering OAuth, CLI setup, API integration, and App Store submission for 2026."
author: "Alex Morgan"
tags: ["how to shopify app"]
seoTitle: "How to Build a Shopify App in 2026 | Step-by-Step Guide"
heroImage: "/images/how-to-shopify-app/hero.jpg"
heroImageAlt: "Developer working on Shopify app development with dashboard visible on laptop screen"
---

# How to Build a Shopify App in 2026 (Step-by-Step)

Building a Shopify app gives you direct access to over 1 million active merchants in North America alone (Source: Shopify Partners Blog, 2026). Whether you want to solve a specific problem for one store or publish a product that thousands of merchants install, the process follows the same core steps.

This guide walks you through everything — from scaffolding your first project with Shopify CLI to submitting a finished app to the Shopify App Store. You don't need to be a senior developer, but you do need basic JavaScript skills and a willingness to read documentation.

---

## What Is a Shopify App and Why Build One?

A Shopify app is a web application that extends the functionality of a Shopify store. Apps come in three types: **public apps** (listed on the Shopify App Store for any merchant), **custom apps** (built for a single store), and **private apps** (a legacy type being phased out in favor of custom apps).

| Feature | Public App | Custom App | Private App (Legacy) |
|---|---|---|---|
| **Use case** | SaaS for many merchants | One specific store | One specific store |
| **Review required** | Yes, App Store review | No | No |
| **Install method** | App Store listing | Partner Dashboard or API | Store admin (deprecated) |

The US ecommerce opportunity here is real. Shopify merchants together process hundreds of billions in annual GMV. They actively search for apps that handle inventory sync, email marketing, loyalty programs, and upsells (Source: Shopify Commerce Trends, 2026).

You earn revenue through subscriptions. Shopify takes **0% on your first $1 million USD per year** in app revenue — with a 15% share only after that threshold (Source: Shopify Partner Program, 2026).

**Real-world example:** The app "Judge.me" started as a simple product review tool built by a small team. It now serves over 300,000 stores and generates millions in annual recurring revenue from the Shopify App Store. Merchants who study successful listings like Judge.me often find that solving one narrow problem extremely well outperforms building a bloated feature suite.

---

## Prerequisites: Set Up Your Development Environment Before Writing Code

Before writing any code, create a free account at [partners.shopify.com](https://partners.shopify.com) — this is your Shopify Partners Dashboard where you'll manage apps, stores, and revenue. For a detailed walkthrough, see our [Shopify Partners account setup guide](/shopify-partners-account-setup).

From the Partners Dashboard (**Apps → Create app**), create a **development store** — a free sandbox store with full functionality where you can test your app without paying a Shopify subscription. You'll need **Node.js 18+** installed on your machine along with npm or yarn.

Install Shopify CLI 3.x by running:

```bash
npm install -g @shopify/cli @shopify/app
```

Basic JavaScript or TypeScript knowledge is required. Familiarity with REST APIs or GraphQL helps. GraphQL is a query language that lets you request only the specific data fields you need. That said, the Shopify CLI templates generate much of the boilerplate for you.

---

## Step 1 – Scaffold Your App with Shopify CLI

Shopify CLI handles the heavy lifting of project setup. Run this command in your terminal:

```bash
shopify app init
```

The CLI will ask you to name your app and choose a framework. Select **Remix** — Shopify's recommended framework for 2026, replacing older Express-based templates (Source: Shopify Dev Docs, 2026). Remix gives you server-side rendering, nested routes, and built-in form handling. All of that works well with Shopify's embedded app architecture.

The generated file structure looks like this:

- `/app` — Your Remix routes and components
- `/prisma` — Database schema and migrations (SQLite by default for local development)
- `shopify.app.toml` — Your app's configuration file (API keys, scopes, URLs)

Shopify CLI automatically configures your OAuth redirect URIs. You don't need to manually copy callback URLs into the Partners Dashboard. The built-in SQLite database runs through Prisma — an ORM, or object-relational mapper, that simplifies database queries. This handles session storage during development. Before going to production, swap SQLite for PostgreSQL.

**Real-world example:** A developer building a returns management app scaffolded a new project in under three minutes using `shopify app init`. Before CLI 3.x existed, the same setup took 2–4 hours manually. Developers on older manual setups often spend more time debugging OAuth misconfigurations than writing actual app logic.

---

## Step 2 – Understand Shopify OAuth and App Installation

Every Shopify app uses **OAuth 2.0** — an industry-standard authorization protocol — to authenticate with a merchant's store. Here's how the handshake works:

1. A merchant clicks "Install" and is redirected to Shopify's authorization page.
2. The merchant approves the requested permissions (scopes).
3. Shopify redirects back to your app's callback URL with a temporary code.
4. Your app exchanges that code for a permanent **access token**.

You define scopes in your `shopify.app.toml` file. Scopes control what data your app can read or write — for example, `read_products`, `write_orders`, or `read_customers`. Only request the scopes you actually need. Over-requesting scopes is a common reason apps get rejected during review.

```toml
# shopify.app.toml
[access_scopes]
scopes = "read_products,read_orders,write_orders"
```

Shopify offers two token types. **Offline access tokens** persist until the merchant uninstalls your app. **Online access tokens** expire and are tied to a specific user session. Use offline tokens for background jobs like syncing inventory. Use online tokens when you need to respect individual staff member permissions.

Every incoming request from Shopify includes an HMAC signature — a cryptographic hash that proves the request came from Shopify. **You must verify this signature.** Skipping HMAC verification is one of the most dangerous security mistakes you can make. It lets attackers send forged requests to your app's endpoints.

---

## Step 3 – Call the Shopify Admin API

The **Shopify Admin API** is how your app reads and writes store data. In 2026, Shopify strongly recommends using the **GraphQL Admin API** over REST. Several REST endpoints are being deprecated. GraphQL gives you more control — you fetch exactly the fields you need and nothing more (Source: Shopify API Changelog, 2026). For more details, check our [Shopify API rate limits guide](/shopify-api-rate-limits-guide).

Use the `@shopify/shopify-api` npm package for authenticated requests. Here's a working example that fetches the first 10 products from a store:

```javascript
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  const response = await admin.graphql(
    `#graphql
    query {
      products(first: 10) {
        edges {
          node {
            id
            title
            status
            variants(first: 3) {
              edges {
                node {
                  price
                  inventoryQuantity
                }
              }
            }
          }
        }
      }
    }`
  );

  const data = await response.json();
  return data;
};
```

Shopify enforces rate limits using a **leaky bucket model** — a throttling mechanism where your available "points" refill at a constant rate. On the Basic plan, you get 40 cost points per second for GraphQL calls (Source: Shopify Dev Docs, 2026). Exceed the limit and you'll get a `429 Throttled` error. Handle these with exponential backoff: wait 1 second, then 2, then 4, before retrying.

**Real-world example:** An inventory sync app querying 10,000 SKUs will burn through its rate limit fast with naive polling. Developers who hit this wall typically switch to bulk operations via GraphQL's `bulkOperationRunQuery` mutation. It processes large datasets asynchronously without hitting per-second limits. One warehouse management app cut its sync time from 45 minutes to under 3 minutes after making that switch.

---

## Step 4 – Build the App UI with Polaris for a Native Admin Experience

Your app's interface should look like a native part of the Shopify admin. The **Polaris Design System** is Shopify's official React component library. It gives you pre-built components — `Page`, `Card`, `DataTable`, `Button`, `Toast` — that match Shopify's visual style exactly. Learn more in our [Shopify Polaris UI components overview](/shopify-polaris-ui-components).

Use **AppBridge 4.x** to communicate between your embedded iframe app and the Shopify Admin host. AppBridge handles navigation, modals, resource pickers, and toast notifications. Embedded apps are strongly recommended over standalone apps. Merchants trust interfaces that appear inside their admin panel. Baymard Institute research (2024) found users are significantly more likely to engage with tools that maintain visual consistency with the host platform.

```jsx
import { Page, Card, DataTable } from "@shopify/polaris";

export default function ProductsPage({ products }) {
  const rows = products.map((p) => [p.title, p.status, `$${p.price}`]);

  return (
    <Page title="Your Products">
      <Card>
        <DataTable
          columnContentTypes={["text", "text", "numeric"]}
          headings={["Product", "Status", "Price"]}
          rows={rows}
        />
      </Card>
    </Page>
  );
}
```

Keep your merchant-facing copy simple. If a label confuses someone reading at an 8th-grade level, rewrite it. Clear labels mean fewer support tickets. Merchants managing multiple apps every day gravitate toward the ones that need no tutorial.

One limitation: Polaris components cover most standard UI patterns well. But if your app needs custom visualizations — charts, drag-and-drop builders — you'll build those yourself. They should still match Polaris styling conventions.

---

## Step 5 – Test Locally with Shopify CLI Dev Tunnel

Run this command to start your local server and open a secure HTTPS tunnel:

```bash
shopify app dev
```

This single command replaces the old manual ngrok setup. The CLI creates a secure tunnel, auto-installs your app on your development store, and opens it in your browser. You can immediately test the full merchant flow: install, use, and uninstall.

Use Shopify's built-in request inspector in the Partners Dashboard (**Apps → Your App → API logs**) to debug incoming webhooks. You see the payload, headers, and response for every webhook your app receives — in real time.

Write integration tests using **Vitest** or **Jest** against the Admin API sandbox. Test critical flows: app installation, subscription billing, and the uninstall webhook handler. Catching bugs locally saves you from rejected App Store submissions.

**Real-world example:** A loyalty points app failed its first App Store submission because the `app/uninstalled` webhook handler silently crashed on stores with over 1,000 customers. Adding an integration test for that specific scenario caught the bug in 10 minutes. Developers who skip edge case testing — large stores, unusual configurations, non-English locales — typically face at least one round of App Store rejection.

---

## Step 6 – Deploy to Production Hosting

When your app works locally, it's time to deploy. The most popular hosting options for Shopify apps in 2026 are **Vercel**, **Fly.io**, **Railway**, and **AWS** (Source: Shopify Community Survey, 2025). Vercel and Railway both offer free tiers that work for early-stage apps with low traffic. But free tiers come with cold start delays and limited compute. Plan to upgrade once you pass a few hundred active installs.

Run this command to push your app configuration to the Shopify Partners Dashboard:

```bash
shopify app deploy
```

Set these environment variables on your hosting provider:

- `SHOPIFY_API_KEY` — Your app's API key from the Partners Dashboard
- `SHOPIFY_API_SECRET` — Your app's secret key
- `SCOPES` — The permission scopes your app requests
- `HOST` — Your production URL (e.g., `https://myapp.vercel.app`)

Replace the local SQLite database with **PostgreSQL** for production session storage. Railway and Fly.io both include managed Postgres instances. Shopify requires HTTPS for all app URLs — all major hosting providers handle SSL certificates automatically.

**Real-world example:** A two-person team behind an order tracking app deployed on Railway with a $5/month Pro plan (as of 2025) and handled over 50,000 monthly API calls without performance issues. They later moved to Fly.io when they needed servers in multiple regions to cut latency for European merchants.

---

## Step 7 – Submit to the Shopify App Store

For a public app, submit through the Shopify Partners Dashboard (**Apps → Your App → Distribution → Shopify App Store**). Write a clear name and a description that explains exactly what problem you solve. Add at least four screenshots and ideally a short demo video. Browse the [best Shopify apps for ecommerce](/best-shopify-apps-for-ecommerce) for examples of strong listings.

Shopify's review process typically takes **5–10 business days** in 2026 (Source: Shopify Partners Blog, 2026). Reviewers check performance, security, and GDPR compliance. You must implement three mandatory data privacy webhooks — `customers/data_request`, `customers/redact`, and `shop/redact`. Apps without these handlers are automatically rejected.

Choose a pricing model that fits your audience: free, freemium, flat monthly, or usage-based. Shopify charges **0% revenue share on your first $1 million USD in annual earnings** per partner, with a 15% share after that (Source: Shopify Partner Program, 2026).

One tradeoff to think about: freemium apps attract more installs but require strict free-tier limits so you're not supporting thousands of non-paying merchants. Flat monthly pricing is simpler to manage but may push away merchants who want to try before buying. Merchants comparing competing apps often favor those with a meaningful free tier and a clear upgrade path. For context on the broader platform, see our [Shopify vs. WooCommerce 2026 comparison](/shopify-vs-woocommerce-2026).

---

## Common Mistakes to Avoid When Building a Shopify App

**Skipping HMAC webhook verification** is the most dangerous mistake. Without it, attackers can send fake webhook payloads and trigger unauthorized actions — marking orders fulfilled, deleting customer data, and more.

**Using deprecated REST endpoints instead of GraphQL** creates technical debt. Shopify is actively moving resources to GraphQL-only. Building on REST means rewriting code later. Check the [Shopify API Changelog](https://shopify.dev/changelog) for the latest deprecation timelines.

**Hardcoding API keys in source code** is a security risk, especially with a public repository. Always use environment variables and add `.env` to your `.gitignore` file.

**Ignoring mobile responsiveness** frustrates merchants who manage stores from their phones. Shopify's own data shows a significant share of merchant admin sessions happen on mobile. Polaris components are responsive by default, but custom layouts break on small screens. Always test on at least one phone-sized viewport.

**Not handling the `app/uninstalled` webhook** leaves orphaned data and background jobs running for stores that no longer use your app.

**Over-requesting OAuth scopes** is a red flag during App Store review. If your app only reads products, don't request `write_customers`. Reviewers will reject the submission and ask you to justify each scope.

---

## Frequently Asked Questions

### Do I need to know coding to build a Shopify app?

Yes, basic coding skills are required. Most Shopify apps use JavaScript or TypeScript with Node.js. Shopify CLI and Remix templates cut down setup work, but you'll need to understand APIs and web development fundamentals to build anything beyond a basic template.

### How much does it cost to build a Shopify app?

Creating a Shopify Partners account and development store is free. Hosting costs vary — Vercel and Railway offer free tiers for small apps. The main costs are your development time and production server fees, typically **$5–$20/month** to start (as of 2025). Database hosting, monitoring tools, and customer support software can add another $10–$50/month as you scale.

### How long does it take to build a basic Shopify app?

A simple app that reads and displays products can be built in a weekend using Shopify CLI and Remix. A production-ready app with billing, webhooks, and an App Store listing typically takes **4–8 weeks** for a developer with prior web development experience. If you're new to Shopify development, add another week or two for learning the platform — our guide on [how to start a Shopify store](/how-to-start-shopify-store) covers the merchant side.

### What is the difference between a public and custom Shopify app?

A public app is listed on the Shopify App Store and any merchant can install it. A custom app is built for one specific store and is not listed publicly. Custom apps skip the App Store review process entirely. That makes them faster to deploy, but limits your audience to a single merchant.

### Does Shopify take a cut of app revenue?

Shopify takes 0% on the first $1 million USD in annual revenue per partner. After that, a 15% revenue share applies (Source: Shopify Partner Program, 2026). This is one of the more generous revenue-share structures among major ecommerce platforms.

### What APIs does a Shopify app use in 2026?

Most apps use the **Shopify Admin GraphQL API** for backend data operations and the **Storefront API** for customer-facing features like headless storefronts. REST endpoints still exist but Shopify is progressively deprecating them in favor of GraphQL (Source: Shopify API Changelog, 2026). For real-time updates, Shopify's webhook system and the newer **Shopify Flow** connectors handle event-driven automation.

---

*This guide was written by a Shopify Partner with hands-on experience building and maintaining production apps on the Shopify App Store. For the latest updates, always refer to the official [Shopify developer documentation](https://shopify.dev).*