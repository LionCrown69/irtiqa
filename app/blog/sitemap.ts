import type { MetadataRoute } from 'next';
import { getBlogSlugs } from '../../lib/mdx';

const BASE_URL = 'https://www.irtiqaaiagency.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const slugs = getBlogSlugs();

  return slugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug.replace(/\.mdx$/, '')}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
}
