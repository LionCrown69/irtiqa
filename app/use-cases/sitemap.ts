import type { MetadataRoute } from 'next';
import { getAllCombinations } from '../../src/data/programmatic-seo';

const BASE_URL = 'https://www.irtiqaaiagency.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const combinations = getAllCombinations();

  return combinations.map((combo) => ({
    url: `${BASE_URL}/use-cases/${combo.industry}/${combo.city}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));
}
