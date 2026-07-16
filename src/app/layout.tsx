import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { site } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'optional',
  preload: true,
  fallback: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — AI Authority Platform`,
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://heypearl.io/#organization',
  name: 'Hey Pearl Agency LLC',
  alternateName: 'Hey Pearl',
  url: 'https://heypearl.io',
  logo: {
    '@type': 'ImageObject',
    url: 'https://heypearl.io/images/og-default.jpg',
    width: 1200,
    height: 630,
  },
  description:
    'Authority infrastructure for the AI search era. Hey Pearl Agency LLC operationalizes the P.E.A.R.L. framework — Process, Efficiency, Automation, Revenue, Leverage — for modern businesses.',
  foundingDate: '2023',
  founder: {
    '@type': 'Person',
    name: 'Misti Bruton',
    url: 'https://www.mistibruton.com/',
    sameAs: [
      'https://www.instagram.com/themistibruton',
      'https://www.facebook.com/mistibrutonceo',
      'https://www.youtube.com/@themistibruton',
    ],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1606 Headway Cir',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78754',
    addressCountry: 'US',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+18304024045',
      contactType: 'customer service',
      email: 'support@heypearl.io',
      availableLanguage: 'English',
    },
  ],
  sameAs: [
    'https://www.facebook.com/heypearlagency',
    'https://www.instagram.com/heypearl.io',
    'https://www.youtube.com/@HeyPearl.Agency',
  ],
  knowsAbout: [
    'Generative Engine Optimization',
    'AI search visibility',
    'Authority infrastructure',
    'GEO',
    'AI Overviews',
    'ChatGPT visibility',
    'Perplexity SEO',
    'Local SEO',
    'Content infrastructure',
    'Reputation management',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Hey Pearl Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'GEO — Generative Engine Optimization',
          description:
            'AI-driven authority signals, structured data, and content systems that make your business the answer AI search engines recommend.',
          url: 'https://heypearl.io/services/geo',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Authority Websites',
          description:
            'Fast, AI-ready websites built on structured data, semantic markup, and authority architecture.',
          url: 'https://heypearl.io/services/authority-websites',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'HeyLocal — Local Authority',
          description:
            'Profiles, schema, and entity signals tuned for the geography you actually serve.',
          url: 'https://heypearl.io/services/heylocal',
        },
      },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://heypearl.io/#website',
  url: 'https://heypearl.io',
  name: 'Hey Pearl Agency LLC',
  description:
    'Authority infrastructure for the AI search era.',
  publisher: { '@id': 'https://heypearl.io/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://heypearl.io/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `var script=document.createElement("script");script.setAttribute("nowprocket","");script.setAttribute("nitro-exclude","");script.src="https://reports.heypearl.io/scripts/dynamic_optimization.js";script.dataset.uuid="2d02d0c8-91ea-4b98-befd-20d028eecbd8";script.id="sa-dynamic-optimization";document.head.appendChild(script);`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
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
      </body>
    </html>
  );
}
