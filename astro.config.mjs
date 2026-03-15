// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // 1. Sitemap'i içe aktarıyoruz

// https://astro.build/config
export default defineConfig({
  // 2. Kendi alan adını buraya ekliyoruz (Sitemap linkleri için şart)
  site: 'https://www.dentalimplanttrakya.com', 
  
  integrations: [
    sitemap(), // 3. Entegrasyonu çalıştırıyoruz
  ],
  
  vite: {
    plugins: [tailwindcss()]
  }
});