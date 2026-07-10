import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { PricingCard } from '@/components/ui/PricingCard';
import { geoTiers } from '@/lib/pricing';
import { site } from '@/lib/site';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'GEO Authority System — Generative Engine Optimization by Hey Pearl',
  description:
    'Generative Engine Optimization (GEO) for the AI search era. Hey Pearl builds the structured authority infrastructure — schema, entity SEO, editorial content, and reputation signals — that AI cites, recommends, and trusts.',
  openGraph: {
    title: 'GEO Authority System — Generative Engine Optimization by Hey Pearl',
    description: 'The authority infrastructure built to make your business citable and recommended by ChatGPT, Perplexity, Google AI Overviews, and Gemini.',
    images: ['/images/og-geo.jpg'],
  },
  twitter: { images: ['/images/og-geo.jpg'] },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Generative Engine Optimization (GEO)?',
      acceptedAnswer: { '@type': 'Answer', text: 'Generative Engine Optimization (GEO) is the practice of building the structured authority signals — schema markup, entity consistency, citable content, and reputation depth — that cause AI engines like ChatGPT, Perplexity, and Google AI Overviews to cite and recommend your business in their responses.' },
    },
    {
      '@type': 'Question',
      name: 'How is GEO different from traditional SEO?',
      acceptedAnswer: { '@type': 'Answer', text: 'Traditional SEO optimizes for clicks on a search results page. GEO optimizes for citation and recommendation inside AI-generated answers. AI engines do not rank links — they synthesize answers. GEO ensures your business is the entity those engines trust and reference when your audience asks relevant questions.' },
    },
    {
      '@type': 'Question',
      name: 'Which AI platforms does Hey Pearl GEO target?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hey Pearl GEO is built to improve visibility across Google AI Overviews, ChatGPT, Gemini, Perplexity, local AI summaries, and classic Google Search. The underlying authority infrastructure — schema, entity signals, citable content — works across all major AI surfaces.' },
    },
    {
      '@type': 'Question',
      name: 'How long does GEO take to show results?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most clients see measurable movement in AI citation and visibility within 60 to 90 days of completing their authority foundation. Category-level authority compounds over 6 to 12 months as content cadence, schema depth, and reputation signals accumulate.' },
    },
    {
      '@type': 'Question',
      name: 'What is included in a Hey Pearl GEO engagement?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every Hey Pearl GEO engagement includes authority architecture, schema and structured data implementation, an editorial content engine, reputation and trust signal management, and the PearlOS operations layer — a complete system, not a collection of tactics.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need GEO if I already invest in traditional SEO?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Traditional SEO and GEO are complementary but distinct. SEO drives ranking on links pages; GEO drives citation inside AI answers. As more of your customers begin their search with AI rather than a search results page, GEO determines whether your business is part of the conversation at all.' },
    },
  ],
};

const geoFaqs = [
  {
    q: 'What is Generative Engine Optimization (GEO)?',
    a: 'GEO is the practice of building structured authority signals — schema markup, entity consistency, citable content, and reputation depth — that cause AI engines like ChatGPT, Perplexity, and Google AI Overviews to cite and recommend your business in their responses.',
  },
  {
    q: 'How is GEO different from traditional SEO?',
    a: 'Traditional SEO optimizes for clicks on a search results page. GEO optimizes for citation and recommendation inside AI-generated answers. AI engines synthesize answers, not rank links — GEO ensures your business is the entity those engines trust and reference.',
  },
  {
    q: 'Which AI platforms does Hey Pearl GEO target?',
    a: 'Hey Pearl GEO is built to improve visibility across Google AI Overviews, ChatGPT, Gemini, Perplexity, local AI summaries, and classic Google Search.',
  },
  {
    q: 'How long does GEO take to show results?',
    a: 'Most clients see measurable movement in AI citation within 60 to 90 days of completing their authority foundation. Category-level authority compounds over 6 to 12 months as content cadence, schema, and reputation signals accumulate.',
  },
  {
    q: 'What is included in a Hey Pearl GEO engagement?',
    a: 'Every GEO engagement includes authority architecture, schema and structured data implementation, an editorial content engine, reputation signal management, and the PearlOS operations layer — a complete system, not a collection of tactics.',
  },
  {
    q: 'Do I need GEO if I already invest in traditional SEO?',
    a: 'Yes. Traditional SEO and GEO are complementary but distinct. As more customers begin their search with AI rather than a results page, GEO determines whether your business is part of the conversation at all.',
  },
];

const layers = [
  {
    number: '01',
    title: 'Authority Architecture',
    body: 'Topic clusters, entity maps, and structured pages designed around the questions AI is already asking on behalf of your audience.',
  },
  {
    number: '02',
    title: 'Schema & Structured Data',
    body: 'Machine-readable signals that tell AI exactly who you are, what you do, and why you should be cited.',
  },
  {
    number: '03',
    title: 'Editorial Content Engine',
    body: 'A monthly cadence of authority articles, lifestyle content, and insights that compound your visibility over time.',
  },
  {
    number: '04',
    title: 'Reputation & Trust Signals',
    body: 'Reviews, citations, and trust graph signals managed as a system, not a side project.',
  },
  {
    number: '05',
    title: 'PearlOS Operations Layer',
    body: 'CRM, lead nurture, AI inboxes, and booking workflows that turn AI visibility into closed business.',
  },
];

const targets = [
  'Google AI Overviews',
  'ChatGPT recommendations',
  'Gemini answers',
  'Perplexity citations',
  'Local AI summaries',
  'Classic Google Search',
];

export default function GEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="GEO Authority System"
        title={
          <>
            Generative Engine{' '}
            <span className="italic font-light text-magenta">Optimization.</span>
          </>
        }
        description="The authority infrastructure built specifically for the AI search era. Designed to make your business citable, trusted, and recommended by the systems your customers now ask first."
        image="/images/geo-concept.jpg"
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
            See GEO pricing
          </LinkButton>
        </div>
      </PageHero>

      {/* Targeting strip */}
      <section className="py-12 border-y border-plum/10 bg-lavender">
        <Container size="xl">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <Eyebrow>Built to be surfaced by</Eyebrow>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate">
              {targets.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-magenta" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Architecture editorial band */}
      <section className="pt-20">
        <Container size="xl">
          <Reveal>
            <div className="relative aspect-[16/7] rounded-[2rem] overflow-hidden border border-plum/5 shadow-soft">
              <Image
                src="/images/geo-architecture.jpg"
                alt="GEO entity architecture diagram"
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-plum/40 via-transparent to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="text-[0.65rem] tracking-micro uppercase text-cream">
                  GEO architecture
                </div>
                <div className="text-[0.65rem] tracking-micro uppercase text-cream/85">
                  Built for AI citation
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Layers */}
      <section id="content" className="py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="The System"
              title="Five layers, engineered to compound."
              description="Each layer is designed to feed the next. Together they form the authority infrastructure AI uses to decide who to cite."
            />
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {layers.map((l, i) => (
              <Reveal key={l.number} delay={i * 0.05}>
                <div className="rounded-3xl bg-white border border-plum/5 shadow-soft p-8 sm:p-10 h-full">
                  <div className="text-[0.65rem] tracking-micro uppercase text-magenta">
                    Layer {l.number}
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-plum">
                    {l.title}
                  </h3>
                  <p className="mt-3 text-slate leading-relaxed">{l.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PearlOS automation with dashboard mockup */}
      <section id="automation" className="py-24 bg-navy text-cream relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(50% 50% at 0% 100%, rgba(255,145,77,0.18) 0%, transparent 60%), radial-gradient(40% 40% at 100% 0%, rgba(211,70,129,0.18) 0%, transparent 60%)',
          }}
        />
        <Container size="xl" className="relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  eyebrow="PearlOS"
                  title="The operations layer beneath the visibility."
                  description="HeyPearl gets you found. PearlOS makes the system run. Together they convert AI driven discovery into closed business."
                  invert
                />
              </Reveal>
            </div>
            <Reveal delay={0.05} className="lg:col-span-3">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-cream/10 shadow-glow">
                <Image
                  src="/images/pearlos-layers-abstract.jpg"
                  alt="PearlOS operational layers"
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent"
                />
                <div className="absolute bottom-5 left-5 right-5 text-[0.65rem] tracking-micro uppercase text-cream">
                  Layers of operation
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  'CRM and pipeline architecture',
                  'Lead nurture and follow-up sequences',
                  'AI response and inbox systems',
                  'Booking and scheduling workflows',
                  'Operational dashboards and reporting',
                  'Integrations with the tools you already run',
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-cream/85 border-b border-cream/10 pb-3"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-orange shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Dashboard mockup grid */}
          <Reveal delay={0.15}>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { src: '/images/pearlos-dashboard.png', label: 'Authority Dashboard' },
                { src: '/images/pearlos-workflow.png', label: 'Workflow Editor' },
                { src: '/images/pearlos-pipeline.png', label: 'Revenue Pipeline' },
                { src: '/images/pearlos-inbox.png', label: 'AI Response Inbox' },
              ].map((m, i) => (
                <figure
                  key={m.src}
                  className={`relative aspect-[16/10] rounded-3xl overflow-hidden border border-cream/10 ${i === 0 ? 'shadow-glow' : 'shadow-soft'}`}
                >
                  <Image
                    src={m.src}
                    alt={`PearlOS ${m.label}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute bottom-4 left-5 text-[0.65rem] tracking-micro uppercase text-cream">
                    PearlOS · {m.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="GEO Pricing"
              title="Choose the system that matches the moment."
              description="Each tier is a complete authority infrastructure. Move up when your category demands it."
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

      {/* FAQ */}
      <section className="py-24 bg-cream">
        <Container size="lg">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions about GEO."
              description="Everything you need to know about Generative Engine Optimization and how Hey Pearl builds it."
            />
          </Reveal>
          <div className="mt-12 flex flex-col gap-5">
            {geoFaqs.map((item, i) => (
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
