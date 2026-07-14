import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Vite plugin: after the build, copies dist/index.html into every
 * route directory listed in the sitemap so static hosts (GitHub Pages)
 * return HTTP 200 instead of 404 for clean URLs like /about, /blog/post, etc.
 */
function generateStaticRoutes(): Plugin {
  return {
    name: 'generate-static-routes',
    apply: 'build',
    closeBundle() {
      const distDir = join(__dirname, 'dist');
      const sitemapPath = join(distDir, 'sitemap.xml');
      const indexPath = join(distDir, 'index.html');

      if (!existsSync(sitemapPath) || !existsSync(indexPath)) {
        console.warn('generate-static-routes: sitemap.xml or index.html not found, skipping.');
        return;
      }

      const indexHtml = readFileSync(indexPath, 'utf-8');
      const sitemap = readFileSync(sitemapPath, 'utf-8');
      const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

      let count = 0;
      for (const url of locs) {
        const path = url.replace('https://rankflowagency.online', '');
        if (!path || path === '/') continue;

        const dir = join(distDir, path);
        mkdirSync(dir, { recursive: true });
        writeFileSync(join(dir, 'index.html'), indexHtml);
        count++;
      }

      console.log(`generate-static-routes: created ${count} static route HTML files.`);
    },
  };
}

export default defineConfig({
  plugins: [react(), generateStaticRoutes()],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
