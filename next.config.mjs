import createNextIntlPlugin from 'next-intl/plugin';
import fs from 'fs';
import path from 'path';

// Clean up deprecated folder to prevent Next.js routing collisions
const deprecatedDir = path.resolve('app/[locale]/solutions/[industry]-in-[location]');
if (fs.existsSync(deprecatedDir)) {
  fs.rmSync(deprecatedDir, { recursive: true, force: true });
}

const deprecatedUseCasesDir = path.resolve('app/use-cases/[industry]');
if (fs.existsSync(deprecatedUseCasesDir)) {
  fs.rmSync(deprecatedUseCasesDir, { recursive: true, force: true });
}

const deprecatedSitemapFile = path.resolve('app/sitemap.ts');
if (fs.existsSync(deprecatedSitemapFile)) {
  fs.rmSync(deprecatedSitemapFile, { force: true });
}
 
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Config options
};
 
export default withNextIntl(nextConfig);
