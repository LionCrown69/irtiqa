import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revenue Operations Infrastructure & Agentic AI | Irtiqa AI",
  description: "Irtiqa AI builds and operates revenue operations infrastructure and agentic AI systems to capture leads, automate follow-up, and stop revenue leakage.",
  keywords: "revenue operations infrastructure, AI revenue infrastructure, agentic AI systems for business, multi-agent AI business systems, revenue leakage detection, silent revenue leakage, AI receptionist, autonomous outreach system, AI powered CRM automation",
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
    title: "Revenue Operations Infrastructure & Agentic AI | Irtiqa AI",
    description: "Revenue operations infrastructure and agentic AI systems that find and fix silent revenue leakage across lead capture, follow-up, booking, onboarding, and retention.",
    type: "website",
    siteName: "Irtiqa AI",
    locale: "en_US",
    alternateLocale: "en_GB",
    url: "https://www.irtiqaaiagency.com/",
    images: [
      {
        url: "https://www.irtiqaaiagency.com/irtiqa-logo.jpeg",
        alt: "Irtiqa AI logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Operations Infrastructure & Agentic AI | Irtiqa AI",
    description: "Irtiqa AI builds and operates revenue operations infrastructure and agentic AI systems to stop silent revenue leakage.",
    images: ["https://www.irtiqaaiagency.com/irtiqa-logo.jpeg"],
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
        <link rel="icon" type="image/jpeg" href="/irtiqa-logo.jpeg" />
        <link rel="apple-touch-icon" href="/irtiqa-logo.jpeg" />
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
                    "@type": "Person",
                    "name": "Alok Mishra",
                    "url": "https://www.linkedin.com/in/alokmishra-",
                    "sameAs": [
                      "https://www.linkedin.com/in/alokmishra-"
                    ]
                  },
                  "alternateName": ["Irtiqa"],
                  "url": "https://www.irtiqaaiagency.com/",
                  "logo": "https://www.irtiqaaiagency.com/irtiqa-logo.jpeg",
                  "email": "hello@irtiqaaiagency.com",
                  "description": "Irtiqa AI is the infrastructure layer serious businesses build on when they want to scale without chaos. We design, build, and operate revenue operations infrastructure and agentic AI systems that stop silent revenue leakage.",
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
                  "name": "Revenue Operations Infrastructure & Agentic AI | Irtiqa AI",
                  "description": "Irtiqa AI builds and operates revenue operations infrastructure and agentic AI systems that stop silent revenue leakage across lead capture, follow-up, booking, onboarding, and retention.",
                  "isPartOf": {
                    "@id": "https://www.irtiqaaiagency.com/#website"
                  },
                  "about": {
                    "@id": "https://www.irtiqaaiagency.com/#organization"
                  },
                  "primaryImageOfPage": "https://www.irtiqaaiagency.com/irtiqa-logo.jpeg",
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
