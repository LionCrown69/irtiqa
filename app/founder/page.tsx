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
        url: "https://www.irtiqaaiagency.com/irtiqa-logo-solid.png",
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
    "jobTitle": "Founder & Revenue Architect",
    "email": "alok@irtiqaaiagency.com",
    "description": "Alok Mishra is the Founder & Revenue Architect at Irtiqa AI. He designs custom revenue operations infrastructure and agentic AI systems to stop silent revenue leakage.",
    "worksFor": {
      "@type": "Organization",
      "name": "Irtiqa AI",
      "url": "https://www.irtiqaaiagency.com/",
      "logo": "https://www.irtiqaaiagency.com/irtiqa-logo-solid.png"
    },
    "url": "https://www.irtiqaaiagency.com/founder",
    "sameAs": [
      "https://www.linkedin.com/in/alokmishra-",
      "https://www.instagram.com/irtiqaai/",
      "https://www.linkedin.com/company/irtiqaai/"
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
