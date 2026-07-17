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

export const metadata: Metadata = {
  title: 'About Hey Pearl — Authority Infrastructure Company for the AI Search Era',
  description:
    'Hey Pearl Agency LLC is the authority infrastructure company for the AI search era. Founded by Misti Bruton, Hey Pearl builds the systems that get businesses cited, recommended, and trusted by AI engines.',
  openGraph: {
    title: 'About Hey Pearl — Authority Infrastructure Company for the AI Search Era',
    description: 'Hey Pearl Agency LLC. Founded by Misti Bruton. We build the authority infrastructure — schema, entity SEO, editorial content, reputation signals — that makes your business the answer AI gives.',
    images: ['/images/og/og-about.webp'],
  },
  twitter: { images: ['/images/og/og-about.webp'] },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who founded Hey Pearl?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hey Pearl was founded by Misti Bruton, an operator with deep experience scaling brokerages, building brand engines, and leading businesses through major market shifts. Misti is also the founder of PearlOS, the operational layer beneath Hey Pearl.' },
    },
    {
      '@type': 'Question',
      name: 'What does Hey Pearl Agency LLC actually do?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hey Pearl builds authority infrastructure for the AI search era. That includes structured data and schema implementation, entity SEO, citation-worthy editorial content, reputation signal systems, and the PearlOS operational layer — all engineered to make your business the one AI engines cite and recommend.' },
    },
    {
      '@type': 'Question',
      name: 'What is the P.E.A.R.L. framework?',
      acceptedAnswer: { '@type': 'Answer', text: 'P.E.A.R.L. stands for Process, Efficiency, Automation, Revenue, and Leverage. It is the operating framework that underpins every Hey Pearl engagement — connecting AI visibility work to the business operations that convert discovery into closed business.' },
    },
    {
      '@type': 'Question',
      name: 'Where is Hey Pearl based?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hey Pearl Agency LLC is based in Austin, Texas. The company works with businesses across the United States.' },
    },
    {
      '@type': 'Question',
      name: 'What is PearlOS?',
      acceptedAnswer: { '@type': 'Answer', text: 'PearlOS is the operational layer beneath Hey Pearl. It includes CRM workflows, lead nurture sequences, AI inbox systems, booking and scheduling automation, and operational dashboards that convert AI-driven visibility into closed business.' },
    },
  ],
};

const values = [
  {
    title: 'Outcomes over optics',
    body: 'Every system we ship is measured against one standard: does it earn the business more authority, more visibility, more recommendations from AI.',
  },
  {
    title: 'Infrastructure over campaigns',
    body: 'We do not chase tactics. We design ecosystems. Operational leverage that grows for years, not weeks.',
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

const aboutFaqs = [
  {
    q: 'Who founded Hey Pearl?',
    a: 'Hey Pearl was founded by Misti Bruton, an operator with deep experience scaling brokerages, building brand engines, and leading businesses through major market shifts. Misti is also the founder of PearlOS, the operational layer beneath Hey Pearl.',
  },
  {
    q: 'What does Hey Pearl Agency LLC actually do?',
    a: 'Hey Pearl builds authority infrastructure for the AI search era — structured data, entity SEO, citation-worthy content, reputation signal systems, and the PearlOS operational layer — all engineered to make your business the one AI engines cite and recommend.',
  },
  {
    q: 'What is the P.E.A.R.L. framework?',
    a: 'P.E.A.R.L. stands for Process, Efficiency, Automation, Revenue, and Leverage. It is the operating framework that underpins every Hey Pearl engagement, connecting AI visibility to the business operations that convert discovery into closed business.',
  },
  {
    q: 'Where is Hey Pearl based?',
    a: 'Hey Pearl Agency LLC is based in Austin, Texas and works with businesses across the United States.',
  },
  {
    q: 'What is PearlOS?',
    a: 'PearlOS is the operational layer beneath Hey Pearl. It includes CRM workflows, lead nurture sequences, AI inbox systems, booking and scheduling automation, and operational dashboards that convert AI-driven visibility into closed business.',
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="About HeyPearl"
        title={
          <>
            Building the future{' '}
            <span className="italic font-light text-magenta">
              of AI Authority.
            </span>
          </>
        }
        description="HeyPearl is the AI Authority Platform. We help businesses earn trust, visibility, and recommendations across AI search — through structured infrastructure, not tactics."
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
      <PearlFramework />

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
                  src="/images/backgrounds/bg-glow.webp"
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
                src="/images/about/about-office.webp"
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

      {/* FAQ */}
      <section className="py-24 bg-cream">
        <Container size="lg">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions about Hey Pearl."
            />
          </Reveal>
          <div className="mt-12 flex flex-col gap-5">
            {aboutFaqs.map((item, i) => (
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
