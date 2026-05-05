/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tracked redirect paths used in cold email CTAs.
  // Pre-open verifiers will follow these 302s to the real site (texasflange.com),
  // which is established and trusted, so reputation stays clean.
  // Add or rename paths as your campaigns evolve.
  async redirects() {
    return [
      {
        source: '/quote',
        destination: 'https://www.texasflange.com/contact-us/',
        permanent: false,
      },
      {
        source: '/contact',
        destination: 'https://www.texasflange.com/contact-us/',
        permanent: false,
      },
      {
        source: '/cad',
        destination: 'https://www.texasflange.com/cad-3d-flange-drawings/',
        permanent: false,
      },
      {
        source: '/catalog',
        destination:
          'https://www.texasflange.com/wp-content/uploads/2019/06/catalog-c-v5.pdf',
        permanent: false,
      },
      {
        source: '/dimensions',
        destination: 'https://www.texasflange.com/flange-dims-weights/',
        permanent: false,
      },
      {
        source: '/types',
        destination: 'https://www.texasflange.com/flange-types-basics/',
        permanent: false,
      },
      {
        source: '/about',
        destination: 'https://www.texasflange.com/about/',
        permanent: false,
      },
      // Catch-all tracked redirect for campaign-specific links.
      // Example email link: texasflangesupply.com/r/spring2026 -> texasflange.com/contact-us/
      {
        source: '/r/:slug*',
        destination: 'https://www.texasflange.com/contact-us/',
        permanent: false,
      },
    ];
  },

  // Allow remote images from texasflange.com so we can hot-link the logo and
  // hero assets without copying them. Swap to local /public files anytime.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.texasflange.com',
      },
      {
        protocol: 'https',
        hostname: 'texasflange.com',
      },
      {
        protocol: 'https',
        hostname: 'seal-houston.bbb.org',
      },
    ],
  },
};

module.exports = nextConfig;
