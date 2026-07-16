import type { Metadata } from 'next';
import { HeroDeclaration } from '@/components/sections/HeroDeclaration';
import { TheGap } from '@/components/sections/TheGap';
import { CategoryIntro } from '@/components/sections/CategoryIntro';
import { PlatformModules } from '@/components/sections/PlatformModules';
import { PearlOSFeature } from '@/components/sections/PearlOSFeature';
import { PearlFramework } from '@/components/sections/PearlFramework';
import { ResultsPreview } from '@/components/sections/ResultsPreview';
import { Founder } from '@/components/sections/Founder';
import { PricingPreview } from '@/components/sections/PricingPreview';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'HeyPearl — The AI Authority Platform',
  description:
    'HeyPearl builds the systems that help businesses become the authority AI recommends. The AI Authority Platform — powered by PearlOS and the P.E.A.R.L. framework.',
  openGraph: {
    title: 'HeyPearl — The AI Authority Platform',
    description:
      'We build the infrastructure that makes AI trust, cite, and recommend your business. Not content. Not ads. AI Authority Infrastructure — engineered to compound.',
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
      name: 'What is AI Authority Infrastructure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Authority Infrastructure is the category HeyPearl created to describe the systematic engineering of why AI engines trust, cite, and recommend a business. It encompasses entity architecture, authority pages, knowledge graph signals, reputation infrastructure, and GEO — built as an integrated system, not a collection of tactics.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Generative Engine Optimization (GEO)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GEO is the practice of structuring your business authority — through schema markup, entity SEO, reputation signals, and citable content — so that AI engines like ChatGPT, Perplexity, and Google AI Overviews cite and recommend your business in their responses.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is PearlOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PearlOS is HeyPearl\'s operating layer — the unified system that orchestrates entity signals, monitors AI recommendation patterns, and executes the full P.E.A.R.L. framework for every client engagement. It is the engine beneath every HeyPearl service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the P.E.A.R.L. framework?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'P.E.A.R.L. stands for Process, Entity, Authority, Reputation, and Leverage. It is the operating framework HeyPearl uses to build AI authority infrastructure that compounds — connecting entity architecture to reputation signals to AI visibility in a systematic 90-day sequence.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results from AI Authority Infrastructure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients see measurable movement in AI visibility within 60 to 90 days of implementing a structured authority foundation. Full category authority compounds over 6 to 12 months as entity signals, content, and reputation systems accumulate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of businesses does HeyPearl work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HeyPearl works with service businesses, local operators, real estate agents, brokerages, and enterprise teams who want to be the business AI recommends in their category. The platform scales from solo operators to brokerage networks.',
      },
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
      <HeroDeclaration />
      <TheGap />
      <CategoryIntro />
      <PlatformModules />
      <PearlOSFeature />
      <PearlFramework />
      <ResultsPreview />
      <Founder />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
