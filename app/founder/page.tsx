import type { Metadata } from 'next';
import FounderClient from '../../src/components/FounderClient';

export const metadata: Metadata = {
  title: "Alok Mishra | Founder & Executive Director, Irtiqa AI",
  description: "Alok Mishra is the Founder & Executive Director of Irtiqa AI. He manages business operations and client process SOPs to stop operational leakage.",
  keywords: "Alok Mishra, Alok Mishra Irtiqa, Alok Mishra founder, executive director, Irtiqa AI founder, Alok Mishra Delhi, Irtiqa management",
  alternates: {
    canonical: "https://www.irtiqaaiagency.com/founder",
  },
  openGraph: {
    title: "Alok Mishra | Founder & Executive Director, Irtiqa AI",
    description: "Alok Mishra is the Founder & Executive Director of Irtiqa AI. He manages business operations and client process SOPs to stop operational leakage.",
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
        "description": "Alok Mishra is the Founder & Executive Director of Irtiqa AI. He oversees executive management, business operations, and client process SOPs.",
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
          "Executive business management",
          "Operational process design",
          "Client onboarding SOPs",
          "Scaling startup workflows",
          "Team coordination and management"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.irtiqaaiagency.com/founder/#georgy",
        "name": "Georgy Steponav",
        "jobTitle": "Co-founder & Strategic Director",
        "description": "Georgy Steponav is the Co-founder & Strategic Director of Irtiqa AI. He leads strategic research, business consultations, and discovery audits.",
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
          "addressCountry": "Poland"
        },
        "sameAs": [
          "https://www.linkedin.com/company/irtiqaai/"
        ],
        "knowsAbout": [
          "Strategic business research",
          "Operations consulting",
          "Workflow diagnostics",
          "Client audit and diagnostics",
          "Custom growth blueprints"
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

