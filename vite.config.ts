import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Relative base so the build works on GitHub Pages project sites
// (https://<user>.github.io/<repo>/) regardless of the repo name,
// as well as on a custom domain or user/organization root site.
export default defineConfig({
  plugins: [react()],
  base: './',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
