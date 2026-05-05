import './globals.css';

export const metadata = {
  metadataBase: new URL('https://texasflangesupply.com'),
  title: 'Texas Flange Supply | Pipe Flange Manufacturer & Distributor',
  description:
    'Texas Flange has manufactured and supplied precision pipe flanges since 1986. Forged, custom, and stocked flanges for oil and gas, waterworks, chemical, food, and industrial operations.',
  keywords: [
    'pipe flanges',
    'forged flanges',
    'weld neck flanges',
    'blind flanges',
    'flange manufacturer',
    'flange supplier',
    'oil and gas flanges',
    'Texas flange',
  ],
  authors: [{ name: 'Texas Flange & Fitting Supply' }],
  creator: 'Texas Flange & Fitting Supply',
  publisher: 'Texas Flange & Fitting Supply',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://texasflangesupply.com',
  },
  openGraph: {
    title: 'Texas Flange Supply | Pipe Flange Manufacturer & Distributor',
    description:
      'Precision pipe flanges since 1986. Forged, custom, and stocked inventory for oil and gas, waterworks, chemical, food, and industrial operations.',
    url: 'https://texasflangesupply.com',
    siteName: 'Texas Flange Supply',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.texasflange.com/wp-content/uploads/2026/01/Group-33.png',
        width: 946,
        height: 250,
        alt: 'Texas Flange Supply',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas Flange Supply',
    description:
      'Precision pipe flanges since 1986. Forged, custom, and stocked inventory for industrial operations.',
    site: '@TexasFlange',
    creator: '@TexasFlange',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD organization schema for trust signals */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Texas Flange & Fitting Supply',
              alternateName: 'Texas Flange Supply',
              url: 'https://texasflangesupply.com',
              sameAs: ['https://www.texasflange.com'],
              logo: 'https://www.texasflange.com/wp-content/uploads/2025/11/tf_logo_black@4x.webp',
              telephone: '+1-281-484-8325',
              email: 'sales@texasflange.com',
              address: {
                '@type': 'PostalAddress',
                postOfficeBoxNumber: 'P.O. Box 2889',
                addressLocality: 'Pearland',
                addressRegion: 'TX',
                postalCode: '77588',
                addressCountry: 'US',
              },
              foundingDate: '1986',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
