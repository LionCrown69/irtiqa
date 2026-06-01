import type { MetadataRoute } from 'next';
import { getAllCombinations } from '../../src/data/programmatic-seo';

const BASE_URL = 'https://www.irtiqaaiagency.com';
const LOCALES = ['en-us', 'en-gb', 'en-eu', 'en-ca', 'en-au'] as const;

export async function generateSitemaps() {
  // Generate 5 sitemaps (one for each locale)
  return LOCALES.map((locale, index) => ({ id: index }));
}

export default function sitemap({ id }: { id?: string | number } = {}): MetadataRoute.Sitemap {
  if (id === undefined) {
    return [];
  }
  const index = Number(id);
  const locale = LOCALES[index];

  if (!locale) {
    return [];
  }

  const lastModified = new Date();
  const combinations = getAllCombinations();

  return combinations.map((combo) => ({
    url: `${BASE_URL}/${locale}/solutions/${combo.industry}-in-${combo.city}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.55,
  }));
}
