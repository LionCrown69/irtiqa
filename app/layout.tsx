import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stop Revenue Leakage | Irtiqa AI — Growth Partner for Service Businesses",
  description: "Irtiqa AI finds where your business is losing revenue and builds the infrastructure that stops it. Free audit call — personalised report in 24 hours.",
  keywords: "revenue operations infrastructure, AI revenue infrastructure, CRM automation, AI CRM automation, agentic AI systems for business, multi-agent AI business systems, revenue leakage detection, silent revenue leakage, AI receptionist, autonomous outreach system, AI powered CRM automation",
  applicationName: "Irtiqa AI",
  authors: [{ name: "Alok Mishra", url: "https://www.linkedin.com/in/alokmishra-" }],
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://www.irtiqaaiagency.com/",
    languages: {
      "en": "https://www.irtiqaaiagency.com/",
      "en-US": "https://www.irtiqaaiagency.com/",
      "en-GB": "https://www.irtiqaaiagency.com/",
      "x-default": "https://www.irtiqaaiagency.com/",
    },
  },
  openGraph: {
    title: "Stop Revenue Leakage | Irtiqa AI — Growth Partner for Service Businesses",
    description: "Irtiqa AI finds where your business is losing revenue and builds the infrastructure that stops it. Free audit call — personalised report in 24 hours.",
    type: "website",
    siteName: "Irtiqa AI",
    locale: "en_US",
    alternateLocale: "en_GB",
    url: "https://www.irtiqaaiagency.com/",
    images: [
      {
        url: "https://www.irtiqaaiagency.com/irtiqa-logo-solid.png",
        alt: "Irtiqa AI logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Revenue Leakage | Irtiqa AI — Growth Partner for Service Businesses",
    description: "Irtiqa AI finds where your business is losing revenue and builds the infrastructure that stops it. Free audit call — personalised report in 24 hours.",
    images: ["https://www.irtiqaaiagency.com/irtiqa-logo-solid.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/irtiqa-logo-solid.png" />
        <link rel="apple-touch-icon" href="/irtiqa-logo-solid.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.irtiqaaiagency.com/#organization",
                  "name": "Irtiqa AI",
                  "founder": {
                    "@id": "https://www.irtiqaaiagency.com/founder/#person"
                  },
                  "alternateName": ["Irtiqa"],
                  "url": "https://www.irtiqaaiagency.com/",
                  "logo": "https://www.irtiqaaiagency.com/irtiqa-logo-solid.png",
                  "email": "hello@irtiqaaiagency.com",
                  "description": "Irtiqa AI is the growth partner service businesses build on to stop revenue leakage. We find where your business is quietly losing revenue — and we build the infrastructure that stops it.",
                  "knowsAbout": [
                    "Revenue operations infrastructure",
                    "Agentic AI systems for business",
                    "Multi-agent AI business systems",
                    "Multi-model AI infrastructure",
                    "Revenue leakage detection",
                    "AI receptionist and front desk systems",
                    "Autonomous outreach and appointment setting",
                    "CRM and pipeline automation"
                  ],
                  "areaServed": [
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "United Kingdom" },
                    { "@type": "Place", "name": "Europe" }
                  ],
                  "sameAs": [
                    "https://www.wikidata.org/wiki/Q140042854",
                    "https://www.linkedin.com/company/irtiqaai/",
                    "https://www.instagram.com/irtiqaai/"
                  ],
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "contactType": "sales",
                      "email": "hello@irtiqaaiagency.com",
                      "availableLanguage": ["English"]
                    }
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Irtiqa AI Service Catalog",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Automation Services",
                          "url": "https://www.irtiqaaiagency.com/ai-automation-services.html"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Lead Follow-Up Automation",
                          "url": "https://www.irtiqaaiagency.com/lead-follow-up-automation.html"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Revenue Operations Systems",
                          "url": "https://www.irtiqaaiagency.com/revenue-operations-ai.html"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://www.irtiqaaiagency.com/founder/#person",
                  "name": "Alok Mishra",
                  "jobTitle": "Founder & Company Owner",
                  "email": "alok@irtiqaaiagency.com",
                  "url": "https://www.irtiqaaiagency.com/founder",
                  "sameAs": [
                    "https://www.wikidata.org/wiki/Q140042745",
                    "https://www.linkedin.com/in/alokmishra-",
                    "https://www.instagram.com/irtiqaai/",
                    "https://www.linkedin.com/company/irtiqaai/"
                  ],
                  "worksFor": {
                    "@id": "https://www.irtiqaaiagency.com/#organization"
                  },
                  "description": "Alok Mishra is the Founder and Company Owner at Irtiqa AI. He designs custom revenue operations infrastructure and agentic AI systems to stop silent revenue leakage."
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.irtiqaaiagency.com/#website",
                  "url": "https://www.irtiqaaiagency.com/",
                  "name": "Irtiqa AI",
                  "publisher": {
                    "@id": "https://www.irtiqaaiagency.com/#organization"
                  },
                  "about": {
                    "@id": "https://www.irtiqaaiagency.com/#organization"
                  },
                  "inLanguage": "en"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.irtiqaaiagency.com/#webpage",
                  "url": "https://www.irtiqaaiagency.com/",
                  "name": "Stop Revenue Leakage | Irtiqa AI — Growth Partner for Service Businesses",
                  "description": "Irtiqa AI finds where your business is losing revenue and builds the infrastructure that stops it. Free audit call — personalised report in 24 hours.",
                  "isPartOf": {
                    "@id": "https://www.irtiqaaiagency.com/#website"
                  },
                  "about": {
                    "@id": "https://www.irtiqaaiagency.com/#organization"
                  },
                  "primaryImageOfPage": "https://www.irtiqaaiagency.com/irtiqa-logo-solid.png",
                  "inLanguage": "en"
                }
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
