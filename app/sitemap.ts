import { MetadataRoute } from 'next';
import { getBlogSlugs } from '../lib/mdx';
import { getAllCombinations, getCitiesByCountry, getCountries } from '../src/data/programmatic-seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.irtiqaaiagency.com';
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/audit`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/directory`, lastModified, changeFrequency: 'weekly', priority: 0.9 },

    // Static SEO landing pages (served from /public)
    { url: `${baseUrl}/ai-automation-services.html`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/lead-follow-up-automation.html`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/revenue-operations-ai.html`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/irtiqa-ai.html`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const slugs = getBlogSlugs();
  const blogRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug.replace(/\.mdx$/, '')}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const countries = getCountries();
  const directoryRoutes: MetadataRoute.Sitemap = [
    ...countries.map((country) => ({
      url: `${baseUrl}/directory/${country.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...countries.flatMap((country) =>
      getCitiesByCountry(country.slug).map((city) => ({
        url: `${baseUrl}/directory/${country.slug}/${city.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      }))
    ),
  ];

  const combinations = getAllCombinations();
  const programmaticRoutes: MetadataRoute.Sitemap = combinations.map((combo) => ({
    url: `${baseUrl}/use-cases/${combo.industry}/${combo.city}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes, ...directoryRoutes, ...programmaticRoutes];
}
