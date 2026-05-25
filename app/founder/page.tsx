import type { Metadata } from 'next';
import FounderClient from '../../src/components/FounderClient';

export const metadata: Metadata = {
  title: "Alok Mishra | Founder & Revenue Architect | Irtiqa AI",
  description: "Alok Mishra is the founder and principal Revenue Systems Architect at Irtiqa AI. He designs multi-agent AI systems and custom revenue operations infrastructure to stop silent leakage.",
  keywords: "Alok Mishra, Alok Mishra Irtiqa, Alok Mishra founder, revenue operations architect, agentic AI expert, Irtiqa AI founder",
  alternates: {
    canonical: "https://www.irtiqaaiagency.com/founder",
  },
  openGraph: {
    title: "Alok Mishra | Founder & Revenue Architect | Irtiqa AI",
    description: "Alok Mishra is the founder and principal Revenue Systems Architect at Irtiqa AI. He designs multi-agent AI systems and custom revenue operations infrastructure to stop silent leakage.",
    url: "https://www.irtiqaaiagency.com/founder",
    type: "profile",
    images: [
      {
        url: "https://www.irtiqaaiagency.com/irtiqa-logo.jpeg",
        alt: "Alok Mishra | Irtiqa AI",
      }
    ]
  }
};

export default function FounderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alok Mishra",
    "jobTitle": "Founder & Revenue Systems Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "Irtiqa AI",
      "url": "https://www.irtiqaaiagency.com/"
    },
    "url": "https://www.linkedin.com/in/alokmishra-",
    "sameAs": [
      "https://www.linkedin.com/in/alokmishra-"
    ],
    "knowsAbout": [
      "Revenue operations infrastructure",
      "Agentic AI systems for business",
      "Multi-agent AI business systems",
      "CRM and pipeline automation",
      "Silent revenue leakage"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FounderClient />
    </>
  );
}
