import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://nightly.dragonforgenexus.xyz',
  integrations: [sitemap(), tailwind(), mdx()]
});