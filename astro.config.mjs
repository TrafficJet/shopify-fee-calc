import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// ИЗМЕНИТЬ на реальный домен после покупки
const SITE_URL = process.env.SITE_URL || 'https://shopify-fee-calc.com';

export default defineConfig({
    site: SITE_URL,
    integrations: [
          sitemap({
                  // Exclude pages that _redirects 301s to shopify-shipping-calc.com — listing them
                        // in the sitemap made Google log them as "pages with redirect" (crawl-budget waste).
                        filter: (page) =>
                                  !page.includes('/shopify-fees/') &&
                                  !page.includes('/shipping/') &&
                                  !page.includes('/china-shipping/') &&
                                  !page.includes('/shipping-calculator/') &&
                                  !page.includes('/free-shipping-threshold/'),
                  customPages: [],
                  serialize(item) {
                            // Boost priority for main calc pages, lower for programmatic city pages
                    const isMainPage = !item.url.includes('/shipping/') && !item.url.includes('/china-shipping/');
                            return {
                                        ...item,
                                        priority: isMainPage ? 0.8 : 0.4,
                                        changefreq: isMainPage ? 'monthly' : 'yearly',
                            };
                  },
          }),
          tailwind(),
        ],
    output: 'static',
});
