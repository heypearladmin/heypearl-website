import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { PricingCard } from '@/components/ui/PricingCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { LinkButton } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { geoTiers, heyLocalTiers } from '@/lib/pricing';
import { site } from '@/lib/site';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Pricing — Authority Infrastructure Plans by Hey Pearl',
  description:
    'Hey Pearl pricing. Two product families — GEO and HeyLocal — with transparent plans for every stage of AI authority building. From foundational visibility to category-leading AI recommendation.',
  openGraph: {
    title: 'Pricing — Authority Infrastructure Plans by Hey Pearl',
    description: 'Transparent pricing for GEO and HeyLocal authority infrastructure. Every plan is a complete system, not a marketing retainer.',
    images: ['/images/og/og-pricing.webp'],
  },
  twitter: { images: ['/images/og/og-pricing.webp'] },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between Hey Pearl GEO and HeyLocal?',
      acceptedAnswer: { '@type': 'Answer', text: 'GEO is built for brands and businesses seeking category-level authority across AI engines at a national or industry level. HeyLocal is built for place-based businesses — local operators, restaurants, service providers — who need to dominate their local area across maps, search, and AI local summaries.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a contract or long-term commitment?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hey Pearl engagements are structured as monthly retainers. Authority infrastructure builds over time, so most clients commit to a minimum of three to six months to see meaningful results. Specific terms are discussed during your strategy call.' },
    },
    {
      '@type': 'Question',
      name: 'What is included at every pricing tier?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every Hey Pearl tier includes an authority strategy, structured data and schema implementation, editorial content cadence, reputation signal monitoring, PearlOS operational workflows, and visibility reporting. Higher tiers add depth, automation, and category-level architecture.' },
    },
    {
      '@type': 'Question',
      name: 'How do I know which plan is right for my business?',
      acceptedAnswer: { '@type': 'Answer', text: 'The best way to identify the right entry point is a strategy call with Misti Bruton. She will audit your current AI visibility, identify the biggest gaps, and recommend the tier that matches your competitive category and growth goals.' },
    },
    {
      '@type': 'Question',
      name: 'Does Hey Pearl work with local businesses?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. HeyLocal is specifically designed for place-based businesses that need to be the trusted name across Google Maps, local search, and AI local summaries. It includes local entity architecture, Google Business Profile management, and local reputation signal systems.' },
    },
  ],
};

const pricingFaqs = [
  {
    q: 'What is the difference between Hey Pearl GEO and HeyLocal?',
    a: 'GEO is built for brands and businesses seeking category-level authority at a national or industry level. HeyLocal is built for place-based businesses — local operators, service providers — who need to dominate their local area across maps, search, and AI local summaries.',
  },
  {
    q: 'Is there a contract or long-term commitment?',
    a: 'Hey Pearl engagements are structured as monthly retainers. Authority infrastructure builds over time, so most clients commit to a minimum of three to six months to see meaningful results. Specific terms are discussed during your strategy call.',
  },
  {
    q: 'What is included at every pricing tier?',
    a: 'Every tier includes an authority strategy, structured data and schema implementation, editorial content cadence, reputation signal monitoring, PearlOS operational workflows, and visibility reporting. Higher tiers add depth, automation, and category-level architecture.',
  },
  {
    q: 'How do I know which plan is right for my business?',
    a: 'The best way to identify the right entry point is a strategy call with Misti Bruton. She will audit your current AI visibility, identify the biggest gaps, and recommend the tier that matches your competitive category and growth goals.',
  },
  {
    q: 'Does Hey Pearl work with local businesses?',
    a: 'Yes. HeyLocal is specifically designed for place-based businesses that need to be the trusted name across Google Maps, local search, and AI local summaries — including local entity architecture, Google Business Profile management, and local reputation signal systems.',
  },
];

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Authority infrastructure,{' '}
            <span className="italic font-light text-magenta">priced clearly.</span>
          </>
        }
        description="Two product families. Six tiers. Each one a complete authority system, not a marketing retainer."
        image=""
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <LinkButton
            href={site.strategyCallUrl}
            external
            variant="primary"
            size="lg"
            withArrow
          >
            Compare Plans
          </LinkButton>
          <LinkButton href="/contact" variant="secondary" size="lg">
            Talk to HeyPearl
          </LinkButton>
        </div>
      </PageHero>

      {/* HeyPearl GEO */}
      <section className="py-20 sm:py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="HeyPearl GEO"
              title="For brands building category authority."
              description="Generative Engine Optimization for businesses that want to be the answer AI gives in their space."
            />
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {geoTiers.map((tier, i) => (
              <Reveal key={tier.id} delay={i * 0.05}>
                <PricingCard tier={tier} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* HeyLocal */}
      <section className="py-20 sm:py-24 bg-lavender">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="HeyLocal"
              title="For place-based businesses building local authority."
              description="A focused authority system for local operators who need to be the trusted name across maps, search, and AI summaries."
            />
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {heyLocalTiers.map((tier, i) => (
              <Reveal key={tier.id} delay={i * 0.05}>
                <PricingCard tier={tier} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison band */}
      <section className="py-24 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src="/images/textures/paper.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/55 via-cream/35 to-cream/55" />
        </div>
        <Container size="lg" className="relative">
          <Reveal>
            <div className="rounded-3xl bg-white border border-plum/5 shadow-soft p-10 sm:p-14">
              <Eyebrow>What is included at every tier</Eyebrow>
              <h3 className="mt-3 font-display text-display-sm text-plum">
                Every plan is a system, not a retainer.
              </h3>
              <p className="mt-4 text-slate leading-relaxed max-w-2xl">
                Every HeyPearl tier ships with a strategic foundation, structured authority signals, editorial cadence, and an operating layer. Higher tiers add depth, automation, and category-level architecture.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
                {[
                  ['Authority strategy', 'A real plan, not a checklist.'],
                  ['Structured data layer', 'Schema and entity architecture.'],
                  ['Editorial cadence', 'Content built for AI and humans.'],
                  ['Reputation signals', 'Trust monitored and improved.'],
                  ['PearlOS workflows', 'Operations beneath the visibility.'],
                  ['Visibility reporting', 'Clarity, not vanity dashboards.'],
                ].map(([title, body]) => (
                  <div key={title}>
                    <div className="text-sm font-medium text-plum">{title}</div>
                    <div className="mt-1 text-sm text-slate leading-relaxed">
                      {body}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-10 text-center text-sm text-slate">
              Not sure where to start?{' '}
              <Link
                href={site.strategyCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-plum link-underline"
              >
                A strategy call with Misti
              </Link>{' '}
              maps the right entry point.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream">
        <Container size="lg">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions about Hey Pearl pricing."
            />
          </Reveal>
          <div className="mt-12 flex flex-col gap-5">
            {pricingFaqs.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-2xl border border-plum/10 bg-white p-6 sm:p-8">
                  <h3 className="font-display text-lg text-plum">{item.q}</h3>
                  <p className="mt-3 text-slate leading-relaxed">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
