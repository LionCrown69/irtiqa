import Link from 'next/link';
import { getCountries } from '../../src/data/programmatic-seo';

export const metadata = {
  title: 'Global AI Booking Directory | Irtiqa AI',
  description: 'Browse Irtiqa AI booking and automation solutions by country and city.',
};

export default function DirectoryLevel1() {
  const countries = getCountries();

  return (
    <main className="lux-main" style={{ minHeight: '100vh', background: 'var(--ink, #0c0c0b)' }}>
      <div style={{ padding: '120px 20px', maxWidth: '1200px', margin: '0 auto', color: 'var(--w1, #ffffff)' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Global Directory</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--w5)' }}>
          Select a country to view our AI automation and booking deployment zones.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {countries.map(country => (
            <Link
              key={country.slug}
              href={`/directory/${country.slug}`}
              style={{
                padding: '24px',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                textDecoration: 'none',
                color: 'white',
                fontSize: '1.5rem',
                transition: 'background 0.2s'
              }}
            >
              {country.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
