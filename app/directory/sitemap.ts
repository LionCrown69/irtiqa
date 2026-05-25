import type { MetadataRoute } from 'next';
import { getCitiesByCountry, getCountries } from '../../src/data/programmatic-seo';

const BASE_URL = 'https://www.irtiqaaiagency.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const countries = getCountries();

  const countryRoutes: MetadataRoute.Sitemap = countries.map((country) => ({
    url: `${BASE_URL}/directory/${country.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const cityRoutes: MetadataRoute.Sitemap = countries.flatMap((country) =>
    getCitiesByCountry(country.slug).map((city) => ({
      url: `${BASE_URL}/directory/${country.slug}/${city.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))
  );

  return [...countryRoutes, ...cityRoutes];
}
