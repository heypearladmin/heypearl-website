/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async redirects() {
    return [
      // /services → /solutions (301 — preserves SEO equity)
      { source: '/services',                    destination: '/solutions',                     permanent: true },
      { source: '/services/geo',                destination: '/solutions/geo',                 permanent: true },
      { source: '/services/heylocal',           destination: '/solutions/service-businesses',  permanent: true },
      { source: '/services/authority-websites', destination: '/solutions/authority-websites',  permanent: true },
      // /pricing → /get-started (strategic redirect)
      { source: '/pricing', destination: '/get-started', permanent: false },
    ];
  },
};

module.exports = nextConfig;
