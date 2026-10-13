import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IRTIQA | Strategic Growth & Transformation",
  description: "Irtiqa helps businesses transform Strategy, Operations, Revenue and Technology into scalable growth. A multidisciplinary strategic institution working across corporate advisory, capital structuring, market access and the R/30 Revenue Partner network.",
  keywords: "Strategic Growth, Corporate Transformation, Operating Model Design, Revenue Architecture, AI Strategy, Capital Formation, R/30 Revenue Partner Program",
  applicationName: "IRTIQA",
  authors: [{ name: "IRTIQA Executive Leadership" }],
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
    title: "IRTIQA | Strategic Growth & Transformation",
    description: "Irtiqa helps businesses transform Strategy, Operations, Revenue and Technology into scalable growth. At the intersection of strategy, execution, capital, markets, revenue and technology.",
    type: "website",
    siteName: "IRTIQA",
    locale: "en_US",
    alternateLocale: "en_GB",
    url: "https://www.irtiqaaiagency.com/",
    images: [
      {
        url: "https://www.irtiqaaiagency.com/irtiqa-logo-solid.png",
        alt: "IRTIQA Corporate Mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRTIQA | Strategic Growth & Transformation",
    description: "Irtiqa helps businesses transform Strategy, Operations, Revenue and Technology into scalable growth.",
    images: ["https://www.irtiqaaiagency.com/irtiqa-logo-solid.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0C2340",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.irtiqaaiagency.com/#organization",
                  "name": "IRTIQA",
                  "founder": {
                    "@id": "https://www.irtiqaaiagency.com/founder/#person"
                  },
                  "alternateName": ["Irtiqa Group", "IRTIQA Strategic Growth & Transformation"],
                  "url": "https://www.irtiqaaiagency.com/",
                  "logo": "https://www.irtiqaaiagency.com/irtiqa-logo-solid.png",
                  "email": "hello@irtiqaaiagency.com",
                  "description": "Irtiqa is a multidisciplinary strategic growth and transformation institution working across strategy, operations, revenue, technology, capital formation, and market expansion.",
                  "knowsAbout": [
                    "Corporate Strategy & Growth",
                    "Operating Model Transformation",
                    "Revenue Architecture",
                    "Technology Strategy & AI Advisory",
                    "Market Access & Trade",
                    "Capital Formation Support",
                    "Strategic Joint Ventures",
                    "R/30 Revenue Partner Program"
                  ],
                  "areaServed": [
                    { "@type": "City", "name": "London" },
                    { "@type": "City", "name": "Dubai" },
                    { "@type": "City", "name": "New York" },
                    { "@type": "City", "name": "Singapore" },
                    { "@type": "Country", "name": "United Kingdom" },
                    { "@type": "Country", "name": "United Arab Emirates" },
                    { "@type": "Country", "name": "United States" }
                  ],
                  "sameAs": [
                    "https://www.wikidata.org/wiki/Q140042854",
                    "https://www.linkedin.com/company/irtiqaai/",
                    "https://www.instagram.com/irtiqaai/"
                  ],
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "contactType": "advisory",
                      "email": "hello@irtiqaaiagency.com",
                      "availableLanguage": ["English"]
                    }
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Irtiqa Strategic Capabilities & Practices",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Strategy & Economic Advisory",
                          "url": "https://www.irtiqaaiagency.com/capabilities"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Operations & Transformation",
                          "url": "https://www.irtiqaaiagency.com/capabilities"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Revenue & Commercial Development",
                          "url": "https://www.irtiqaaiagency.com/capabilities"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Technology, AI & Intelligence",
                          "url": "https://www.irtiqaaiagency.com/capabilities"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Market Access, Trade & Expansion",
                          "url": "https://www.irtiqaaiagency.com/markets"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "R/30 Strategic Revenue Partner Program",
                          "url": "https://www.irtiqaaiagency.com/partners"
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
                  "description": "Alok Mishra is the Founder & Executive Director of Irtiqa, advising enterprises on strategic growth, operating model transformation, and commercial execution systems."
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.irtiqaaiagency.com/#website",
                  "url": "https://www.irtiqaaiagency.com/",
                  "name": "IRTIQA",
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
                  "name": "IRTIQA | Strategic Growth & Transformation",
                  "description": "Irtiqa helps enterprises transform Strategy, Operations, Revenue and Technology into scalable growth.",
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
