import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getIndustryBySlug, getLocationBySlug, industries, locations } from '../../../../src/data/programmatic-seo';
import ProgrammaticClientView from '../../../../src/components/ProgrammaticClientView';

interface PageProps {
  params: {
    industry: string;
    city: string;
  };
}

// Optional: Pre-render some paths at build time, and SSR the rest
// export function generateStaticParams() {
//   return getAllCombinations().slice(0, 100); // Only pre-build the first 100
// }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const industry = getIndustryBySlug(params.industry);
  const location = getLocationBySlug(params.city);

  if (!industry || !location) {
    return {
      title: 'Not Found',
    };
  }

  const title = `AI Booking System for ${industry.title} in ${location.name} | Irtiqa`;
  const description = `Stop losing ${industry.painPoint}. Irtiqa provides the leading AI appointment booking system for ${industry.name.toLowerCase()} in ${location.name}, ${location.state}. Capture leads 24/7.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://www.irtiqaaiagency.com/use-cases/${params.industry}/${params.city}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    }
  };
}

export default function ProgrammaticPage({ params }: PageProps) {
  const industry = getIndustryBySlug(params.industry);
  const location = getLocationBySlug(params.city);

  if (!industry || !location) {
    notFound();
    return null;
  }

  // Generate LocalBusiness and SoftwareApplication JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'Product'],
    name: `Irtiqa AI Booking for ${industry.name}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description: `AI-powered booking and lead capture system for ${industry.title.toLowerCase()} in ${location.name}.`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    audience: {
      '@type': 'Audience',
      audienceType: industry.name,
      geographicArea: {
        '@type': 'City',
        name: location.name,
        containedInPlace: {
          '@type': 'State',
          name: location.state
        }
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProgrammaticClientView industry={industry} location={location} />
    </>
  );
}
