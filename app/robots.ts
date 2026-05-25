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
      `${baseUrl}/solutions/sitemap.xml`,
    ],
    host: 'www.irtiqaaiagency.com',
  };
}
