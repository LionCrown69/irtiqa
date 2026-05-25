import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.irtiqaaiagency.com';
const LOCALES = ['en-gb', 'en-us', 'en-eu'] as const;
const INDUSTRIES = ['healthcare-automation', 'legal-ai-front-desk', 'finance-revenue-ops'] as const;
const LOCATIONS = ['london', 'new-york', 'berlin'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const industry of INDUSTRIES) {
      for (const location of LOCATIONS) {
        routes.push({
          url: `${BASE_URL}/${locale}/solutions/${industry}-in-${location}`,
          lastModified,
          changeFrequency: 'monthly',
          priority: 0.55,
        });
      }
    }
  }

  return routes;
}
