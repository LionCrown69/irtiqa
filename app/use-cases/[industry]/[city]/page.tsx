import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getIndustryBySlug, getLocationBySlug } from '../../../../src/data/programmatic-seo';
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

  const title = `Revenue Operations Infrastructure for ${industry.title} in ${location.name} | Irtiqa AI`;
  const description = `Stop losing ${industry.painPoint}. Irtiqa AI builds revenue operations infrastructure and agentic AI systems for ${industry.name.toLowerCase()} teams in ${location.name}, ${location.state} — capture leads, automate follow-up, and book qualified calls.`;

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

  const canonicalUrl = `https://www.irtiqaaiagency.com/use-cases/${params.industry}/${params.city}`;
  const title = `Revenue Operations Infrastructure for ${industry.title} in ${location.name} | Irtiqa AI`;
  const description = `Irtiqa AI builds revenue operations infrastructure and agentic AI systems for ${industry.name.toLowerCase()} teams in ${location.name}, ${location.state} — capture leads, automate follow-up, and book qualified calls without chaos.`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: { '@id': 'https://www.irtiqaaiagency.com/#website' },
        about: { '@id': 'https://www.irtiqaaiagency.com/#organization' },
        inLanguage: 'en',
      },
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: `Revenue Operations Infrastructure for ${industry.name}`,
        serviceType: [
          'Revenue operations infrastructure',
          'Agentic AI systems for business',
          'Intelligent follow-up and booking automation',
        ],
        provider: { '@id': 'https://www.irtiqaaiagency.com/#organization' },
        areaServed: {
          '@type': 'City',
          name: location.name,
          containedInPlace: {
            '@type': 'State',
            name: location.state,
            containedInPlace: { '@type': 'Country', name: location.country },
          },
        },
        description: `A done-for-you infrastructure build for ${industry.title.toLowerCase()} teams: lead capture, qualification, follow-up, booking, and reporting — designed to stop silent revenue leakage.`,
        url: canonicalUrl,
      },
    ],
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
