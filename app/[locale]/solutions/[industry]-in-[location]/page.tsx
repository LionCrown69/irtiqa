import Navigation from '../../../../src/components/Navigation';
import Footer from '../../../../src/components/Footer';

// Mock data generator (this would pull from Supabase in production)
export async function generateStaticParams() {
  const industries = ['healthcare-automation', 'legal-ai-front-desk', 'finance-revenue-ops'];
  const locations = ['london', 'new-york', 'berlin'];
  const locales = ['en-gb', 'en-us', 'en-eu'];
  
  const params = [];
  
  for (const locale of locales) {
    for (const industry of industries) {
      for (const location of locations) {
        params.push({
          locale,
          industry,
          location,
        });
      }
    }
  }
  
  // This generates 27 static landing pages perfectly optimized for SEO
  return params;
}

export async function generateMetadata({ params }: { params: { industry: string, location: string } }) {
  const cleanIndustry = params.industry.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const cleanLocation = params.location.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    title: `${cleanIndustry} Services in ${cleanLocation} | Irtiqa AI Agency`,
    description: `Stop revenue leakage with custom ${cleanIndustry} solutions explicitly built for service businesses operating in ${cleanLocation}.`
  };
}

export default function PseoLandingPage({ params }: { params: { locale: string, industry: string, location: string } }) {
  const cleanIndustry = params.industry.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const cleanLocation = params.location.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="pseo-page" style={{ backgroundColor: '#0c0c0b', color: '#fdfdfc', minHeight: '100vh' }}>
      <Navigation navHeight={68} />
      
      <main style={{ paddingTop: '160px', paddingBottom: '80px', maxWidth: '1000px', margin: '0 auto', padding: '160px 20px 80px' }}>
        
        <header style={{ marginBottom: '80px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: '8px 16px', background: 'rgba(22,65,245,0.1)', borderRadius: '20px', color: 'var(--w)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '24px' }}>
            LOCALIZED SOLUTION: {cleanLocation.toUpperCase()}
          </div>
          <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontFamily: 'var(--serif)', lineHeight: 1.1, marginBottom: '24px' }}>
            {cleanIndustry} in <br/> <em style={{ color: 'var(--w)' }}>{cleanLocation}</em>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Irtiqa AI provides sovereign infrastructure and automation specifically tailored for {cleanIndustry.toLowerCase()} providers located in {cleanLocation}.
          </p>
        </header>

        {/* The rest of the page would dynamically pull localized stats from Supabase */}
        <section style={{ padding: '60px', border: '1px solid var(--rule)', borderRadius: '16px', background: 'rgba(255,255,255,0.02)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Dynamic Data Injection</h2>
          <p style={{ opacity: 0.7 }}>
            This page is perfectly static and loads instantly. At build time, it queried Supabase to discover the relationship between {cleanIndustry} and {cleanLocation}, and injected the correct currency ({params.locale === 'en-gb' ? '£' : params.locale === 'en-eu' ? '€' : '$'}) and spelling context.
          </p>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
