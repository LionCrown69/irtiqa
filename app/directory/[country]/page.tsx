import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCountries, getCitiesByCountry } from '../../../src/data/programmatic-seo';

interface PageProps {
  params: {
    country: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const countries = getCountries();
  const country = countries.find(c => c.slug === params.country);

  if (!country) return { title: 'Not Found' };

  return {
    title: `Revenue Infrastructure Solutions in ${country.name} | Irtiqa AI`,
    description: `Browse Irtiqa AI revenue operations infrastructure use-cases across cities in ${country.name}.`,
  };
}

export default function DirectoryLevel2({ params }: PageProps) {
  const countries = getCountries();
  const country = countries.find(c => c.slug === params.country);

  if (!country) notFound();

  const cities = getCitiesByCountry(params.country);

  return (
    <main className="lux-main" style={{ minHeight: '100vh', background: 'var(--ink, #0c0c0b)' }}>
      <div style={{ padding: '120px 20px', maxWidth: '1200px', margin: '0 auto', color: 'var(--w1, #ffffff)' }}>
        <Link href="/directory" style={{ color: 'var(--blue, #1641f5)', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
          &larr; Back to Global Directory
        </Link>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{country.name} Locations</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--w5)' }}>
        Select a city in {country.name} to view industry-specific revenue operations infrastructure use-cases.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
        {cities.map(city => (
          <Link 
            key={city.slug} 
            href={`/directory/${params.country}/${city.slug}`}
            style={{
              padding: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'white',
              fontSize: '1.2rem',
            }}
          >
            {city.name}, {city.state}
          </Link>
        ))}
      </div>
    </div>
    </main>
  );
}
