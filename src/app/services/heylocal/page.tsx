import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { PricingCard } from '@/components/ui/PricingCard';
import { heyLocalTiers } from '@/lib/pricing';
import { site } from '@/lib/site';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'HeyLocal — Local Authority for the AI Era',
  description:
    'A focused authority system for place-based businesses. Built to dominate maps, AI summaries, and local discovery.',
  openGraph: { images: ['/images/og-heylocal.jpg'] },
  twitter: { images: ['/images/og-heylocal.jpg'] },
};

const pillars = [
  {
    title: 'Local Authority Architecture',
    body: 'Profiles, schema, and entity signals tuned for the geography you actually serve.',
  },
  {
    title: 'Reputation as Infrastructure',
    body: 'Reviews, citations, and trust signals managed as a system, monitored continuously.',
  },
  {
    title: 'Localized Editorial Cadence',
    body: 'Content built around local intent, neighborhood context, and the questions AI is asked first.',
  },
  {
    title: 'AI Summary Targeting',
    body: 'Optimized for how AI now answers local questions before customers ever scroll a map.',
  },
];

export default function HeyLocalPage() {
  return (
    <>
      <PageHero
        eyebrow="HeyLocal"
        title={
          <>
            Local authority,{' '}
            <span className="italic font-light text-magenta">
              built for the AI era.
            </span>
          </>
        }
        description="A focused authority system for place-based businesses. Designed to dominate maps, search, and the AI summaries that now decide who customers visit first."
        image="/images/heylocal-hero.jpg"
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
          <LinkButton href="/pricing" variant="secondary" size="lg">
            See HeyLocal pricing
          </LinkButton>
        </div>
      </PageHero>

      {/* Map abstract band */}
      <section className="pt-20">
        <Container size="xl">
          <Reveal>
            <div className="relative aspect-[16/7] rounded-[2rem] overflow-hidden border border-plum/5 shadow-soft">
              <Image
                src="/images/heylocal-map-abstract.jpg"
                alt="Local authority map abstract"
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-plum/35 via-transparent to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="text-[0.65rem] tracking-micro uppercase text-cream">
                  Local authority graph
                </div>
                <div className="text-[0.65rem] tracking-micro uppercase text-cream/85">
                  Citations · Reviews · Schema
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Pillars */}
      <section id="reputation" className="py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="Local Authority System"
              title="Built around how AI now answers local questions."
              description="Place-based businesses are being filtered by AI before they ever appear on a map. HeyLocal is the system that puts your business back at the top of the answer."
            />
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="rounded-3xl bg-white border border-plum/5 shadow-soft p-8 sm:p-10 h-full">
                  <div className="text-[0.65rem] tracking-micro uppercase text-magenta">
                    Pillar 0{i + 1}
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-plum">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-slate leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Who it is for */}
      <section className="py-24 bg-lavender">
        <Container size="xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Who HeyLocal Serves</Eyebrow>
              <h2 className="mt-4 font-display text-display-md text-plum">
                Operators who need to be the trusted local name.
              </h2>
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-slate">
                {[
                  'Real estate brokerages and teams',
                  'Multi-location service brands',
                  'Boutique retail and hospitality',
                  'Healthcare and wellness practices',
                  'Premium home services',
                  'Local professional firms',
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 border-b border-plum/10 pb-3"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-magenta shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] overflow-hidden border border-plum/5 shadow-lift">
                <Image
                  src="/images/heylocal-lifestyle.jpg"
                  alt="Local boutique interior"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-plum/30 via-transparent to-transparent"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="HeyLocal Pricing"
              title="Three tiers, one continuous authority system."
              description="Start where you are. Move up as your local category demands it."
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

      <FinalCTA />
    </>
  );
}
