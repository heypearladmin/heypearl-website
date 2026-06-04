import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
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
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','4177109375937895');fbq('track','PageView');`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SV0FB1NW6K"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SV0FB1NW6K');`,
          }}
        />
        <Script
          id="search-atlas-otto"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var script=document.createElement("script");script.setAttribute("nowprocket","");script.setAttribute("nitro-exclude","");script.src="https://reports.heypearl.io/scripts/dynamic_optimization.js";script.dataset.uuid="2d02d0c8-91ea-4b98-befd-20d028eecbd8";script.id="sa-dynamic-optimization";document.head.appendChild(script);`,
          }}
        />
      </body>
    </html>
  );
}
