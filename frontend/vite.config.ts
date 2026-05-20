import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import prerender from '@prerenderer/rollup-plugin'
import sitemap from 'vite-sitemap'

const prerenderRoutes = ['/', '/experience', '/project']
const sitemapRoutes = ['experience', 'project']

export default defineConfig({

  plugins: [
    react(),
    tailwindcss(),
    prerender({
      routes: prerenderRoutes,
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        headless: true,
      }
    }),
    sitemap({

      base: 'https://yourwebsite.com',
      urls: sitemapRoutes,
      changefreq: 'weekly',
      robotsTxt: 'User-agent: *\nAllow: /'
    })
  ],
})