import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';

import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  site: 'https://nightly.dragonforgenexus.xyz',
  integrations: [
  // ...
  sitemap({
    filter: page => page !== 'https://dragonforgenexus.xyz/DragonForgeGaming' && page !== 'https://dragonforgenexus.xyz/DRAGONFORGENETWORK'
  }), tailwind(), webmanifest({
    name: 'Nightly DragonForgeNEXUS',
    icon: '/imgs/Logos/Square/Solid/SVG/DRAGONFORGENEXUS.svg',
    short_name: 'NDFN',
    description: 'Nightly DragonForgeNEXUS',
    start_url: '/',
    theme_color: '#3f6212',
    background_color: '#3f6212',
    display: 'standalone',
  }),]
});