import type { Metadata } from 'next';
import { HeroDeclaration } from '@/components/sections/HeroDeclaration';
import { TheGap } from '@/components/sections/TheGap';
import { BusinessPain } from '@/components/sections/BusinessPain';
import { CategoryIntro } from '@/components/sections/CategoryIntro';
import { PearlOSFeature } from '@/components/sections/PearlOSFeature';
import { PlatformModules } from '@/components/sections/PlatformModules';
import { PearlFramework } from '@/components/sections/PearlFramework';
import { ResultsPreview } from '@/components/sections/ResultsPreview';
import { Founder } from '@/components/sections/Founder';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'HeyPearl — The AI Authority Platform',
  description:
    'HeyPearl builds the infrastructure that makes AI engines trust, cite, and recommend your business. The AI Authority Platform — powered by PearlOS and the P.E.A.R.L. framework.',
  openGraph: {
    title: 'HeyPearl — The AI Authority Platform',
    description:
      'Become the authority AI recommends. HeyPearl builds the infrastructure — entity architecture, authority pages, and reputation systems — that makes AI trust and recommend your business.',
    images: ['/images/og/og-home.webp'],
  },
  twitter: { images: ['/images/og/og-home.webp'] },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is HeyPearl?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HeyPearl is The AI Authority Platform — we build the infrastructure that makes AI engines trust, cite, and recommend your business. This includes entity architecture, authority pages, knowledge graph signals, reputation systems, and Generative Engine Optimization (GEO), all orchestrated through our proprietary operating system, PearlOS.',
      },
    },
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
        text: 'PearlOS is the operating layer that runs every HeyPearl engagement — a unified system that orchestrates entity signals, monitors AI recommendation patterns across 6 major AI engines, and executes the full P.E.A.R.L. framework. It is the engine beneath every HeyPearl service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the P.E.A.R.L. framework?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "P.E.A.R.L. stands for Process, Entity, Authority, Reputation, and Leverage. It is HeyPearl's proprietary operating framework for building AI authority that compounds — connecting entity architecture to reputation signals to AI visibility in a systematic 90-day sequence.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients see measurable movement in AI visibility within 60 to 90 days of implementing authority infrastructure. Full category authority compounds over 6 to 12 months as entity signals, content, and reputation systems accumulate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of businesses does HeyPearl work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HeyPearl works with real estate agents, brokerages, service businesses, and enterprise teams who want to be the business AI recommends in their category. The platform scales from individual operators to multi-agent teams and brokerage networks.',
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
      {/* 1. Brand declaration — Become the Authority AI Recommends */}
      <HeroDeclaration />
      {/* 2. The world changed — what AI search actually means */}
      <TheGap />
      {/* 3. The stakes — you're already losing visibility without knowing it */}
      <BusinessPain />
      {/* 4. The category — what AI Authority Infrastructure is */}
      <CategoryIntro />
      {/* 5. The operating system — PearlOS */}
      <PearlOSFeature />
      {/* 6. The modules — what PearlOS powers */}
      <PlatformModules />
      {/* 7. The framework — P.E.A.R.L. as proprietary IP */}
      <PearlFramework />
      {/* 8. The evidence — real client results */}
      <ResultsPreview />
      {/* 9. The trust anchor — the founder */}
      <Founder />
      {/* 10. The close — conviction CTA */}
      <FinalCTA />
    </>
  );
}
