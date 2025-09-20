import { Geist, Geist_Mono } from "next/font/google";
import config from '@/content/site.config'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: {
    default: config.seo.title,
    template: `%s | ${config.company.shortName}`
  },
  description: config.seo.description,
  keywords: [
    'UltraTech cement dealer',
    'construction chemicals supplier',
    'AAC blocks supplier',
    'shuttering plywood',
    'pinewood supplier',
    'epoxy flooring',
    'industrial flooring',
    'construction materials',
    'building products',
    'Bhiwadi construction',
    'Alwar construction',
    'Rajasthan construction',
    'wholesale construction materials',
    'steel fiber supplier',
    'construction chemicals dealer'
  ],
  authors: [{ name: config.company.name }],
  creator: config.company.name,
  publisher: config.company.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(config.siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: config.siteUrl,
    title: config.seo.title,
    description: config.seo.description,
    siteName: config.company.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: config.company.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.seo.title,
    description: config.seo.description,
    images: ['/og-image.jpg'],
    creator: '@sgpcc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'construction',
  classification: 'Business',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': config.company.shortName,
    'application-name': config.company.shortName,
    'msapplication-TileColor': '#f6c100',
    'theme-color': '#f6c100',
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": config.company.name,
    "alternateName": config.company.shortName,
    "url": config.siteUrl,
    "logo": `${config.siteUrl}/logo.png`,
    "description": config.company.tagline,
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Khasra no. 328, Near Ashok Leyland Workshop, Alwar Bypass Road",
      "addressLocality": "Bhiwadi",
      "addressRegion": "Rajasthan",
      "postalCode": "301019",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9610961111",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9610962222",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "email": config.contacts.email,
    "sameAs": [
      "https://www.facebook.com/sgpcc",
      "https://www.linkedin.com/company/sgpcc",
      "https://www.instagram.com/sgpcc"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Materials",
      "itemListElement": config.services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description || service.title
        },
        "position": index + 1
      }))
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "knowsAbout": [
      "Construction Materials",
      "Cement Supply",
      "Steel Products",
      "Construction Chemicals",
      "AAC Blocks",
      "Plywood",
      "Industrial Flooring"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f6c100" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={config.company.shortName} />
        <meta name="application-name" content={config.company.shortName} />
        <meta name="msapplication-TileColor" content="#f6c100" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}> */}
      <body>
        <Header />
        <main className="min-h-[calc(100vh-var(--header-h))]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
