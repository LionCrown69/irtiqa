import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getIndustryBySlug, getLocationBySlug } from '../../../../src/data/programmatic-seo';
import ProgrammaticClientView from '../../../../src/components/ProgrammaticClientView';
import { unstable_setRequestLocale } from 'next-intl/server';

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}

// Pre-render the core 27 paths at build time, SSR/ISR the rest on-demand
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
          slug: `${industry}-in-${location}`,
        });
      }
    }
  }
  
  return params;
}

function parseSlug(slug: string) {
  // e.g., healthcare-automation-in-london
  const parts = slug.split('-in-');
  if (parts.length < 2) return null;
  return {
    industrySlug: parts[0],
    locationSlug: parts[1]
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  unstable_setRequestLocale(params.locale);
  const parsed = parseSlug(params.slug);
  if (!parsed) return { title: 'Not Found' };

  const industry = getIndustryBySlug(parsed.industrySlug);
  const location = getLocationBySlug(parsed.locationSlug);

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
      url: `https://www.irtiqaaiagency.com/${params.locale}/solutions/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    }
  };
}

export default function PseoSolutionPage({ params }: PageProps) {
  unstable_setRequestLocale(params.locale);
  const parsed = parseSlug(params.slug);
  if (!parsed) {
    notFound();
    return null;
  }

  const industry = getIndustryBySlug(parsed.industrySlug);
  const location = getLocationBySlug(parsed.locationSlug);

  if (!industry || !location) {
    notFound();
    return null;
  }

  const canonicalUrl = `https://www.irtiqaaiagency.com/${params.locale}/solutions/${params.slug}`;
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
        inLanguage: params.locale.split('-')[0],
      },
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: `Revenue Operations Infrastructure for ${industry.name} in ${location.name}`,
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
        description: `A done-for-you infrastructure build for ${industry.title.toLowerCase()} teams in ${location.name}: lead capture, qualification, follow-up, booking, and reporting — designed to stop silent revenue leakage.`,
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
