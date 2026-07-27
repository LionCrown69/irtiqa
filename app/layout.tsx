import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Irtiqa AI | Elite Growth Partner & Revenue Infrastructure",
  description: "Irtiqa AI is the growth partner that 5 to 8-figure service businesses build on. We deploy autonomous revenue infrastructure to scale operations without expanding headcount.",
  keywords: "Growth Partner, AI Infrastructure, Scale to 8 Figures, Autonomous Revenue Systems, Elite Operations Partner, Business Valuation Scaling",
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
    title: "Irtiqa AI | Elite Growth Partner & Revenue Infrastructure",
    description: "Irtiqa AI is the growth partner that 5 to 8-figure service businesses build on. We deploy autonomous revenue infrastructure to scale operations without expanding headcount.",
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
    title: "Irtiqa AI | Elite Growth Partner & Revenue Infrastructure",
    description: "Irtiqa AI is the growth partner that 5 to 8-figure service businesses build on. We deploy autonomous revenue infrastructure to scale operations without expanding headcount.",
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
                  "description": "Irtiqa AI is the growth partner that 5 to 8-figure service businesses build on. We deploy autonomous revenue infrastructure to scale operations without expanding headcount.",
                  "knowsAbout": [
                    "Revenue Infrastructure",
                    "Scaling Operations",
                    "Business Valuation Scaling",
                    "Autonomous Systems",
                    "Growth Partnerships",
                    "AI Architectures",
                    "Revenue Leakage Elimination"
                  ],
                  "areaServed": [
                    { "@type": "City", "name": "New York" },
                    { "@type": "City", "name": "London" },
                    { "@type": "City", "name": "Dubai" },
                    { "@type": "City", "name": "Singapore" },
                    { "@type": "Place", "name": "Silicon Valley" },
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "United Kingdom" }
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
                    "name": "Irtiqa AI Infrastructure Catalog",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Autonomous Growth Infrastructure",
                          "url": "https://www.irtiqaaiagency.com/growth-infrastructure"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Scale from 7 to 8 Figures",
                          "url": "https://www.irtiqaaiagency.com/scale"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Revenue Operations Architectures",
                          "url": "https://www.irtiqaaiagency.com/revenue-operations-ai"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://www.irtiqaaiagency.com/founder/#person",
                  "name": "Alok Mishra",
                  "jobTitle": "Founder & Executive Director",
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
                  "description": "Alok Mishra is the Founder & Executive Director of Irtiqa AI. A recognized AI innovator, he designs custom autonomous revenue infrastructures to scale 5, 6, and 7-figure organizations to their maximum valuation."
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
                  "name": "Irtiqa AI | Elite Growth Partner & Revenue Infrastructure",
                  "description": "Irtiqa AI is the growth partner that 5 to 8-figure service businesses build on. We deploy autonomous revenue infrastructure to scale operations without expanding headcount.",
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
