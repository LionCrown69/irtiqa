import type { Metadata } from 'next';
import FounderClient from '../../src/components/FounderClient';

export const metadata: Metadata = {
  title: "Alok Mishra | Founder, Irtiqa AI",
  description: "Alok Mishra is the founder of Irtiqa AI. He designs custom revenue operations infrastructure and agentic AI systems for global service businesses.",
  keywords: "Alok Mishra, Alok Mishra Irtiqa, Alok Mishra founder, revenue operations architect, agentic AI, Irtiqa AI founder, Alok Mishra Delhi",
  alternates: {
    canonical: "https://www.irtiqaaiagency.com/founder",
  },
  openGraph: {
    title: "Alok Mishra | Founder, Irtiqa AI",
    description: "Alok Mishra is the founder of Irtiqa AI. He designs custom revenue operations infrastructure and agentic AI systems for global service businesses.",
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
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.irtiqaaiagency.com/founder/#alok",
        "name": "Alok Mishra",
        "jobTitle": "Founder & Executive Director",
        "email": "alok@irtiqaaiagency.com",
        "description": "Alok Mishra is the Founder & Executive Director of Irtiqa AI. He designs custom revenue operations infrastructure and automated pipelines.",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://www.irtiqaaiagency.com/#organization",
          "name": "Irtiqa AI",
          "url": "https://www.irtiqaaiagency.com/",
          "logo": "https://www.irtiqaaiagency.com/irtiqa-logo-solid.png",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q140042854",
            "https://www.linkedin.com/company/irtiqaai/"
          ]
        },
        "url": "https://www.irtiqaaiagency.com/founder",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New Delhi",
          "addressCountry": "India"
        },
        "sameAs": [
          "https://www.linkedin.com/in/alokmishra-",
          "https://www.wikidata.org/wiki/Q140042745",
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
      },
      {
        "@type": "Person",
        "@id": "https://www.irtiqaaiagency.com/founder/#georgy",
        "name": "Georgy Steponav",
        "jobTitle": "Co-Founder & Strategic Director",
        "description": "Georgy Steponav is the Co-Founder & Strategic Director of Irtiqa AI. He manages client consultations and operations audits.",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://www.irtiqaaiagency.com/#organization",
          "name": "Irtiqa AI",
          "url": "https://www.irtiqaaiagency.com/",
          "logo": "https://www.irtiqaaiagency.com/irtiqa-logo-solid.png",
          "sameAs": [
            "https://www.wikidata.org/wiki/Q140042854",
            "https://www.linkedin.com/company/irtiqaai/"
          ]
        },
        "url": "https://www.irtiqaaiagency.com/founder",
        "sameAs": [
          "https://www.linkedin.com/company/irtiqaai/"
        ],
        "knowsAbout": [
          "Business operations consulting",
          "Workflow diagnostics",
          "Revenue leakage mapping",
          "Client acquisition design"
        ]
      }
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

