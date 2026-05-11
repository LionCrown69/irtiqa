import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Automation for Service Businesses | Irtiqa AI",
  description: "Irtiqa AI builds AI front desk, follow-up, and revenue systems for service businesses. Book a free automation consultation.",
  keywords: "Irtiqa, Irtiqa AI, AI automation services, lead follow-up automation, revenue operations AI, service business automation",
  applicationName: "Irtiqa AI",
  authors: [{ name: "Irtiqa AI" }],
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
    title: "AI Automation for Service Businesses | Irtiqa AI",
    description: "AI front desk, follow-up, and revenue systems for service businesses in US, UK, and Europe.",
    type: "website",
    siteName: "Irtiqa AI",
    locale: "en_US",
    alternateLocale: "en_GB",
    url: "https://www.irtiqaaiagency.com/",
    images: [
      {
        url: "https://www.irtiqaaiagency.com/irtiqa-logo.jpeg",
        alt: "Irtiqa AI Agency logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Service Businesses | Irtiqa AI",
    description: "Irtiqa AI builds AI systems for faster response, follow-up, and revenue operations.",
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
                  "alternateName": ["Irtiqa"],
                  "url": "https://www.irtiqaaiagency.com/",
                  "logo": "https://www.irtiqaaiagency.com/irtiqa-logo.jpeg",
                  "email": "hello@irtiqaaiagency.com",
                  "description": "Irtiqa AI is a premium consulting and infrastructure deployment firm. We specialize in identifying revenue leakage for MNCs and mid-to-large service businesses, and sealing it with bespoke Sovereign AI operations.",
                  "knowsAbout": [
                    "Enterprise Revenue Operations",
                    "Sovereign AI Infrastructure",
                    "Revenue Leakage Audits",
                    "Sales Pipeline Automation",
                    "Bespoke AI Consulting"
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
                  "name": "AI Automation for Service Businesses | Irtiqa AI",
                  "description": "Irtiqa AI delivers AI automation for service businesses, including lead response systems, follow-up workflows, and revenue operations infrastructure.",
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
