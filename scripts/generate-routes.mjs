#!/usr/bin/env node

/**
 * Post-build script: copies index.html into every route directory
 * so static hosts (GitHub Pages) return HTTP 200 for every sitemap URL.
 *
 * GitHub Pages serves files from the repo root. For a clean URL like
 * /about, it looks for about/index.html or about.html. Without these
 * files it returns 404 — even though the 404.html SPA fallback renders
 * the page correctly, the HTTP status code remains 404, which Ahrefs
 * and Google flag as errors.
 *
 * This script reads the sitemap, extracts every path, and copies the
 * built dist/index.html into <dist>/<path>/index.html for each route.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const sitemapPath = join(distDir, 'sitemap.xml');

const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');

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

console.log(`Generated ${count} static route HTML files for GitHub Pages.`);
