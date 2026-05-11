import { MetadataRoute } from 'next';
import { getBlogSlugs } from '../lib/mdx';
import { getSitemapChunks } from '../src/data/programmatic-seo';

// Next.js will use this to generate multiple sitemaps: sitemap/0.xml, sitemap/1.xml...
export async function generateSitemaps() {
  const chunks = getSitemapChunks(10000); // Max 50k per sitemap, we use 10k to be safe
  return chunks.map((_, index) => ({ id: index }));
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.irtiqaaiagency.com';
  const isFirstSitemap = id === 0;

  // Only include base routes and blogs in the first sitemap chunk
  let baseAndBlogRoutes: MetadataRoute.Sitemap = [];
  
  if (isFirstSitemap) {
    const routes = [
      { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
      { url: `${baseUrl}/audit`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
      { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
      { url: `${baseUrl}/directory`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 }
    ];

    const slugs = getBlogSlugs();
    const blogRoutes = slugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug.replace(/\.mdx$/, '')}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
    
    baseAndBlogRoutes = [...routes, ...blogRoutes];
  }

  // Get the specific chunk of programmatic routes for this sitemap ID
  const chunks = getSitemapChunks(10000);
  const currentChunk = chunks[id] || [];

  const programmaticRoutes = currentChunk.map((combo) => ({
    url: `${baseUrl}/use-cases/${combo.industry}/${combo.city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...baseAndBlogRoutes, ...programmaticRoutes];
}
