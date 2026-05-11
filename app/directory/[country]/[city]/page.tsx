import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCountries, getCitiesByCountry, industries } from '../../../../src/data/programmatic-seo';

interface PageProps {
  params: {
    country: string;
    city: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const cities = getCitiesByCountry(params.country);
  const city = cities.find(c => c.slug === params.city);

  if (!city) return { title: 'Not Found' };

  return {
    title: `Revenue Infrastructure Use-Cases in ${city.name} | Irtiqa AI`,
    description: `Browse Irtiqa AI revenue operations infrastructure and agentic AI use-cases for industries in ${city.name}, ${city.state}.`,
  };
}

export default function DirectoryLevel3({ params }: PageProps) {
  const countries = getCountries();
  const country = countries.find(c => c.slug === params.country);
  
  if (!country) notFound();

  const cities = getCitiesByCountry(params.country);
  const city = cities.find(c => c.slug === params.city);

  if (!city) notFound();

  return (
    <main className="lux-main" style={{ minHeight: '100vh', background: 'var(--ink, #0c0c0b)' }}>
      <div style={{ padding: '120px 20px', maxWidth: '1200px', margin: '0 auto', color: 'var(--w1, #ffffff)' }}>
        <div style={{ marginBottom: '20px' }}>
          <Link href={`/directory/${params.country}`} style={{ color: 'var(--blue, #1641f5)', textDecoration: 'none' }}>
            &larr; Back to {country.name} Cities
          </Link>
        </div>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Industries in {city.name}</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--w5)' }}>
        Select your industry below to see how Irtiqa AI eliminates revenue leakage for businesses in {city.name}.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '16px' }}>
        {industries.map(industry => (
          <Link 
            key={industry.slug} 
            href={`/use-cases/${industry.slug}/${city.slug}`}
            style={{
              padding: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'white',
              fontSize: '1.1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              transition: 'all 0.2s ease',
              backgroundColor: 'rgba(255,255,255,0.02)'
            }}
          >
            <span style={{ fontWeight: 600 }}>{industry.title}</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--w5)' }}>Revenue operations infrastructure for {industry.name}</span>
          </Link>
        ))}
      </div>
    </div>
    </main>
  );
}
