import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.irtiqaaiagency.com';

  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/llms.txt', '/llms-full.txt'],
      disallow: ['/api/', '/*?*utm_', '/*?*gclid=', '/*?*fbclid='],
    },
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/blog/sitemap.xml`,
      `${baseUrl}/directory/sitemap.xml`,
      `${baseUrl}/use-cases/sitemap.xml`,
      `${baseUrl}/use-cases/sitemap/0.xml`,
      `${baseUrl}/use-cases/sitemap/1.xml`,
      `${baseUrl}/use-cases/sitemap/2.xml`,
      `${baseUrl}/use-cases/sitemap/3.xml`,
      `${baseUrl}/use-cases/sitemap/4.xml`,
      `${baseUrl}/solutions/sitemap.xml`,
      `${baseUrl}/solutions/sitemap/0.xml`,
      `${baseUrl}/solutions/sitemap/1.xml`,
      `${baseUrl}/solutions/sitemap/2.xml`,
      `${baseUrl}/solutions/sitemap/3.xml`,
      `${baseUrl}/solutions/sitemap/4.xml`,
    ],
    host: 'www.irtiqaaiagency.com',
  };
}
