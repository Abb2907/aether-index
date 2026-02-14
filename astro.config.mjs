// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ADDED: This is required for sitemap generation
  site: 'https://aether-index.vercel.app', 
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});