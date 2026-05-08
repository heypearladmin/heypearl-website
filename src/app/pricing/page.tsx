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
  title: 'Pricing — Authority Systems for the AI Era',
  description:
    'HeyPearl pricing. Authority infrastructure for the AI search era, from foundational visibility to category leading AI authority.',
  openGraph: { images: ['/images/og-pricing.jpg'] },
  twitter: { images: ['/images/og-pricing.jpg'] },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Authority infrastructure,{' '}
            <span className="italic font-light text-magenta">priced clearly.</span>
          </>
        }
        description="Two product families. Six tiers. Each one a complete authority system, not a marketing retainer."
        image="/images/pricing-ambient.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <LinkButton
            href={site.strategyCallUrl}
            external
            variant="primary"
            size="lg"
            withArrow
          >
            Schedule a Strategy Call
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
            src="/images/pricing-texture.jpg"
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

      <FinalCTA />
    </>
  );
}
