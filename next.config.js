/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
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
        ],
      },
    ];
  },
  async redirects() {
    return [
      // /services → /solutions (301 — preserves SEO equity)
      { source: '/services',                    destination: '/solutions',                     permanent: true },
      { source: '/services/geo',                destination: '/solutions/geo',                 permanent: true },
      { source: '/services/heylocal',           destination: '/solutions/service-businesses',  permanent: true },
      // authority-websites → platform/authority-pages (the actual page that exists)
      { source: '/services/authority-websites', destination: '/platform/authority-pages',      permanent: true },
      { source: '/solutions/authority-websites', destination: '/platform/authority-pages',     permanent: true },
      // /pricing → /get-started (strategic redirect)
      { source: '/pricing', destination: '/get-started', permanent: false },
    ];
  },
};

module.exports = nextConfig;
