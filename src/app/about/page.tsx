import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { PearlFramework } from '@/components/sections/PearlFramework';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema, personSchema, breadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'About — Software with a soul',
  description:
    'HeyPearl is the operational authority infrastructure company for the AI search era. The P.E.A.R.L. framework: Process, Efficiency, Automation, Revenue, Leverage.',
  openGraph: { images: ['/images/og-about.jpg'] },
  twitter: { images: ['/images/og-about.jpg'] },
};

const values = [
  {
    title: 'Software with a soul',
    body: 'Every system we ship is sharpened until it feels human. Powerful, but warm. Sophisticated, but clear.',
  },
  {
    title: 'Infrastructure over campaigns',
    body: 'We do not chase tactics. We design ecosystems. Operational leverage that compounds for years, not weeks.',
  },
  {
    title: 'Operator-led standards',
    body: 'Our work is built to the standard of operators who actually run businesses, scale brands, and answer the phone.',
  },
  {
    title: 'Modern, not loud',
    body: 'Editorial. Quiet confidence. Premium without theatrics. The work speaks before we do.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          personSchema(),
          breadcrumbSchema([
            { name: 'Home', url: site.url },
            { name: 'About', url: `${site.url}/about` },
          ]),
        ]}
      />
      <PageHero
        eyebrow="About HeyPearl"
        title={
          <>
            Operational authority,{' '}
            <span className="italic font-light text-magenta">
              built with a soul.
            </span>
          </>
        }
        description="HeyPearl was founded to give modern operators what the AI search era actually demands. Not another agency. Not another tool. A category-defining authority infrastructure company built on a clear operating framework."
        image="/images/about-hero.jpg"
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
          <LinkButton href="/services" variant="secondary" size="lg">
            What we build
          </LinkButton>
        </div>
      </PageHero>

      {/* Founder story */}
      <section className="py-20 sm:py-28 bg-cream">
        <Container size="xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-magenta-gradient opacity-15 blur-2xl" />
                <div className="relative aspect-[4/5] w-full max-w-md rounded-[2rem] overflow-hidden border border-plum/5 shadow-lift bg-blush/30">
                  <Image
                    src={site.founder.photo}
                    alt={`${site.founder.name}, Founder of HeyPearl`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
                {/* Secondary speaking portrait */}
                <div className="hidden lg:block absolute -bottom-8 -right-12 w-2/5 aspect-[3/2] rounded-2xl overflow-hidden border border-cream shadow-lift z-10">
                  <Image
                    src="/images/misti-speaking.jpg"
                    alt="Misti Bruton speaking"
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <Eyebrow>Founder</Eyebrow>
              <h2 className="mt-4 font-display text-display-md text-plum">
                A founder who has run the playbook.
              </h2>
              <div className="mt-6 flex flex-col gap-5 text-lg text-slate leading-relaxed">
                <p>
                  Misti Bruton has spent her career operating at the intersection of growth, brand, and systems. She has scaled brokerages, built brand engines, and led teams through the kind of market shifts that make most operators flinch.
                </p>
                <p>
                  HeyPearl is the company she always wanted as a client. Sophisticated, warm, and serious about long term operational leverage. Built by an operator for operators, never by marketers for marketers.
                </p>
                <p>
                  Misti is also the founder of PearlOS, the operating layer beneath HeyPearl. Together they form a complete authority infrastructure that businesses can build on for decades.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <LinkButton
                  href={site.strategyCallUrl}
                  external
                  variant="primary"
                  size="md"
                  withArrow
                >
                  Schedule a Strategy Call with Misti
                </LinkButton>
                <LinkButton
                  href={site.founder.site}
                  external
                  variant="secondary"
                  size="md"
                >
                  Visit mistibruton.com
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* P.E.A.R.L. Framework — inverted on plum to feel foundational */}
      <PearlFramework variant="full" invert />

      {/* Operating principles */}
      <section className="py-24 bg-lavender">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="Operating Principles"
              title="The standards we build everything to."
              description="A handful of decisions made early that shape every page, system, and conversation."
            />
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="rounded-3xl bg-white border border-plum/5 shadow-soft p-8 sm:p-10 h-full">
                  <div className="text-[0.65rem] tracking-micro uppercase text-magenta">
                    Principle 0{i + 1}
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-plum">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-slate leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PearlOS positioning */}
      <section className="py-24">
        <Container size="lg">
          <Reveal>
            <div className="rounded-3xl bg-plum text-cream shadow-glow relative overflow-hidden">
              {/* Photographic backdrop */}
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <Image
                  src="/images/about-pearlos-ambient.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-plum/90 via-plum/65 to-plum/35" />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  background:
                    'radial-gradient(50% 50% at 100% 0%, rgba(255,145,77,0.18) 0%, transparent 60%), radial-gradient(40% 60% at 0% 100%, rgba(211,70,129,0.18) 0%, transparent 60%)',
                }}
              />
              <div className="relative p-10 sm:p-14">
                <Eyebrow tone="cream">PearlOS</Eyebrow>
                <h3 className="mt-4 font-display text-display-sm">
                  HeyPearl.io, maker of PearlOS.
                </h3>
                <p className="mt-5 text-cream/85 text-lg leading-relaxed max-w-2xl">
                  PearlOS is the operational layer beneath HeyPearl. CRM workflows, lead nurture, AI inboxes, booking systems, and the operating dashboards that turn visibility into closed business.
                </p>
                <p className="mt-3 text-cream/70 text-base leading-relaxed max-w-2xl">
                  HeyPearl gets you found. PearlOS makes the system run. Together, they are the operating leverage modern businesses need.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Editorial environmental band */}
          <Reveal delay={0.1}>
            <div className="mt-12 relative aspect-[16/9] w-full rounded-[2rem] overflow-hidden border border-plum/5 shadow-soft">
              <Image
                src="/images/about-misti-environmental.jpg"
                alt="Misti Bruton, founder of HeyPearl"
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-plum/40 via-transparent to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="text-[0.65rem] tracking-micro uppercase text-cream">
                  Founder · in the work
                </div>
                <div className="text-[0.65rem] tracking-micro uppercase text-cream/85">
                  Austin, Texas
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
