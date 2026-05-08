import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { site } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Authority Infrastructure for the AI Search Era`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'GEO',
    'Generative Engine Optimization',
    'AI search',
    'AI visibility',
    'authority infrastructure',
    'AI Overviews',
    'ChatGPT visibility',
    'Perplexity SEO',
    'local authority',
    'PearlOS',
    'HeyPearl',
    'P.E.A.R.L. framework',
  ],
  authors: [{ name: 'HeyPearl' }],
  creator: 'HeyPearl',
  publisher: 'HeyPearl',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Authority Infrastructure for the AI Search Era`,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} — Software with a soul`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Authority Infrastructure for the AI Search Era`,
    description: site.description,
    images: [
      site.ogImage,
      '/images/social-square-default.jpg',
      '/images/social-square-pearl.jpg',
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
};

export const viewport: Viewport = {
  themeColor: '#FFF9ED',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-cream text-navy antialiased relative">
        {/* Subtle paper grain overlay across the whole site */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.05] mix-blend-multiply"
          style={{
            backgroundImage: 'url(/images/texture-grain.png)',
            backgroundSize: '300px 300px',
          }}
        />
        <div className="relative z-10">
          <Navigation />
          <main className="pt-24 sm:pt-28">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
