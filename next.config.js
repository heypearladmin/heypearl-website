/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Vercel's built-in image optimization has a monthly source-image
    // transformation quota. This site's image volume exceeded it in
    // production (confirmed via 402 Payment Required on /_next/image
    // requests for several blog hero images), which broke images live.
    // Disabling optimization serves the original files directly — no
    // resizing/format conversion, but no quota-driven outages either.
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/pdfs/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Next.js hydration + inline GA/Pixel scripts require unsafe-inline
              "script-src 'self' 'unsafe-inline' reports.heypearl.io connect.facebook.net www.googletagmanager.com www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              // /_next/image srcsets, pixel img beacons, GA measurement beacons
              "img-src 'self' data: blob: *.facebook.com www.google-analytics.com www.googletagmanager.com",
              // Next.js inlines Google Fonts at build time — no external font CDN needed
              "font-src 'self' data:",
              "connect-src 'self' *.facebook.com *.google-analytics.com *.analytics.google.com www.googletagmanager.com reports.heypearl.io",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // /services → /solutions (301 — preserves SEO equity)
      { source: '/services',                    destination: '/solutions',                     permanent: true },
      { source: '/services/geo',                destination: '/solutions/service-businesses',  permanent: true },
      { source: '/services/heylocal',           destination: '/solutions/service-businesses',  permanent: true },
      // authority-websites → platform/authority-pages (the actual page that exists)
      { source: '/services/authority-websites', destination: '/platform/authority-pages',      permanent: true },
      { source: '/solutions/authority-websites', destination: '/platform/authority-pages',     permanent: true },
      // /pricing → /get-started (permanent — stable since this codebase's tracked history)
      { source: '/pricing', destination: '/get-started', permanent: true },
      // /privacy-policy and /terms — moved here from Server-Component redirect()
      // calls, which only issue a client/RSC-level redirect with no standard
      // Location header a non-JS crawler can follow. This produces a true
      // edge-level 308 with a proper Location header for every client.
      { source: '/privacy-policy', destination: '/policies',        permanent: true },
      { source: '/terms',          destination: '/terms-of-service', permanent: true },
    ];
  },
};

module.exports = nextConfig;
