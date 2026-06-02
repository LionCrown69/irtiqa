import { getBlogSlugs } from '../../lib/mdx';

const BASE_URL = 'https://www.irtiqaaiagency.com';
const LOCALES = ['en-us', 'en-gb', 'en-eu', 'en-ca', 'en-au'] as const;

export async function GET() {
  const lastModified = new Date().toISOString();

  const coreRoutes = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/audit`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/founder`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/directory`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/ai-automation-services.html`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/lead-follow-up-automation.html`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/revenue-operations-ai.html`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/irtiqa-ai.html`, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const blogSlugs = getBlogSlugs();
  const blogRoutes = blogSlugs.map((filename) => ({
    url: `${BASE_URL}/blog/${filename.replace(/\.mdx$/, '')}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const localeRoutes = LOCALES.flatMap((locale) => [
    {
      url: `${BASE_URL}/${locale}`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/${locale}/data-hub`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]);

  const allRoutes = [...coreRoutes, ...blogRoutes, ...localeRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
