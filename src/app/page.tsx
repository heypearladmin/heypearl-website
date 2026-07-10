import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { MarketShift } from '@/components/sections/MarketShift';
import { PearlFramework } from '@/components/sections/PearlFramework';
import { Services } from '@/components/sections/Services';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { WhyHeyPearl } from '@/components/sections/WhyHeyPearl';
import { Showcase } from '@/components/sections/Showcase';
import { Founder } from '@/components/sections/Founder';
import { PricingPreview } from '@/components/sections/PricingPreview';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Hey Pearl — Authority Infrastructure for the AI Search Era',
  description:
    'Hey Pearl builds the authority infrastructure that gets your business cited, recommended, and trusted by AI engines like ChatGPT, Perplexity, and Google AI Overviews. GEO, AEO, and SEO built for the AI era.',
  openGraph: {
    title: 'Hey Pearl — Authority Infrastructure for the AI Search Era',
    description:
      'The structured authority system that makes your business the answer AI gives. Schema, entity SEO, reputation signals, and editorial content — engineered to compound.',
    images: ['/images/og-home.jpg'],
  },
  twitter: { images: ['/images/og-home.jpg'] },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Generative Engine Optimization (GEO)?',
      acceptedAnswer: { '@type': 'Answer', text: 'GEO is the practice of structuring your business authority — through schema markup, entity SEO, reputation signals, and citable content — so that AI engines like ChatGPT, Perplexity, and Google AI Overviews cite and recommend your business in their responses.' },
    },
    {
      '@type': 'Question',
      name: 'How is Hey Pearl different from a traditional SEO or marketing agency?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hey Pearl builds authority infrastructure — the structured signals, schema, entity architecture, and editorial content that AI engines use to decide who to recommend. Traditional agencies optimize for clicks; Hey Pearl optimizes for AI citation and recommendation.' },
    },
    {
      '@type': 'Question',
      name: 'What is the P.E.A.R.L. framework?',
      acceptedAnswer: { '@type': 'Answer', text: 'P.E.A.R.L. stands for Process, Efficiency, Automation, Revenue, and Leverage. It is the operating framework Hey Pearl uses to build authority infrastructure that compounds — connecting AI visibility to real business operations so that discovery converts to closed business.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results from GEO?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most clients see measurable movement in AI visibility within 60 to 90 days of implementing a structured authority foundation. Full category authority compounds over 6 to 12 months as content, schema, and reputation signals accumulate.' },
    },
    {
      '@type': 'Question',
      name: 'What types of businesses does Hey Pearl work with?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hey Pearl works with service businesses, local operators, agencies, real estate companies, and professionals who want to be the business AI recommends in their category. Both national brands and local businesses benefit from authority infrastructure.' },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <MarketShift />
      <PearlFramework />
      <Services />
      <HowItWorks />
      <WhyHeyPearl />
      <Showcase />
      <Founder />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
