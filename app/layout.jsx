import "./globals.css";
import { site } from "@/content/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Handyman Services in Pacific Beach, San Diego`,
    template: `%s | ${site.name}`,
  },
  description:
    "Trusted local handyman in Pacific Beach, San Diego. Repairs, drywall, painting, plumbing, electrical, mounting, and coastal home maintenance. No job too small. Call or text for a free estimate.",
  keywords: [
    "handyman Pacific Beach",
    "San Diego handyman",
    "handyman 92109",
    "drywall repair San Diego",
    "home repair Pacific Beach",
    "PB Handyman",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Handyman Services in Pacific Beach, San Diego`,
    description:
      "Trusted local handyman in Pacific Beach, San Diego. No job too small or too large. Call or text for a free estimate.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Pacific Beach, San Diego`,
    description:
      "Trusted local handyman in Pacific Beach, San Diego. No job too small or too large.",
  },
  alternates: { canonical: site.url },
};

export const viewport = {
  themeColor: "#0a2e45",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  legalName: site.legalName,
  description:
    "Local handyman services in Pacific Beach, San Diego and surrounding areas.",
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/logo-mark.svg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: "CA",
    postalCode: site.postalCode,
    addressCountry: "US",
  },
  areaServed: [
    "Pacific Beach",
    "Mission Beach",
    "La Jolla",
    "Ocean Beach",
    "Point Loma",
    "Bay Park",
    "Clairemont",
    "San Diego",
  ].map((n) => ({ "@type": "Place", name: n })),
  openingHours: "Mo-Sa 07:00-18:00",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
