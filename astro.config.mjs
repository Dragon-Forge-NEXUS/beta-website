import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://nightly.dragonforgenexus.xyz',
  integrations: [
    // ...
    sitemap({
      filter: (page) =>
        page !== 'https://nightly.dragonforgenexus.xyz/DragonForgeGaming' &&
        page !== 'https://nightly.dragonforgenexus.xyz/DRAGONFORGENETWORK',
    }), tailwind(), mdx()]
});