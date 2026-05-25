import type { MetadataRoute } from 'next';
import { getBlogSlugs } from '../lib/mdx';

const BASE_URL = 'https://www.irtiqaaiagency.com';
const LOCALES = ['en-us', 'en-gb', 'en-eu'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const coreRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/audit`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/founder`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/directory`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/ai-automation-services.html`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/lead-follow-up-automation.html`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/revenue-operations-ai.html`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/irtiqa-ai.html`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const blogSlugs = getBlogSlugs();
  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((filename) => ({
    url: `${BASE_URL}/blog/${filename.replace(/\.mdx$/, '')}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const localeRoutes: MetadataRoute.Sitemap = LOCALES.flatMap((locale) => [
    {
      url: `${BASE_URL}/${locale}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/${locale}/data-hub`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]);

  return [...coreRoutes, ...blogRoutes, ...localeRoutes];
}
