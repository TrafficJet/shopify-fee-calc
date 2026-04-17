import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// ИЗМЕНИТЬ на реальный домен после покупки
const SITE_URL = process.env.SITE_URL || 'https://shopify-shipping-calc.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap(),
    tailwind(),
  ],
  output: 'static',
});
