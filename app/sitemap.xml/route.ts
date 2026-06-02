export async function GET() {
  const sitemaps = [
    'https://www.irtiqaaiagency.com/main-sitemap.xml',
    'https://www.irtiqaaiagency.com/blog/sitemap.xml',
    'https://www.irtiqaaiagency.com/directory/sitemap.xml',
    'https://www.irtiqaaiagency.com/solutions/sitemap/0.xml',
    'https://www.irtiqaaiagency.com/solutions/sitemap/1.xml',
    'https://www.irtiqaaiagency.com/solutions/sitemap/2.xml',
    'https://www.irtiqaaiagency.com/solutions/sitemap/3.xml',
    'https://www.irtiqaaiagency.com/solutions/sitemap/4.xml',
    'https://www.irtiqaaiagency.com/use-cases/sitemap/0.xml',
    'https://www.irtiqaaiagency.com/use-cases/sitemap/1.xml',
    'https://www.irtiqaaiagency.com/use-cases/sitemap/2.xml',
    'https://www.irtiqaaiagency.com/use-cases/sitemap/3.xml',
    'https://www.irtiqaaiagency.com/use-cases/sitemap/4.xml',
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (url) => `  <sitemap>
    <loc>${url}</loc>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
