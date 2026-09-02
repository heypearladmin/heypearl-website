import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { EcosystemNav } from '@/components/platform/EcosystemNav';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Authority Websites & Pages — AI-Ready Page Architecture | HeyPearl',
  description:
    'What is an authority website? HeyPearl builds authority pages and site architecture that make your business citable by AI — structured for entity recognition, topical authority, and AI recommendations.',
  alternates: { canonical: 'https://heypearl.io/platform/authority-pages' },
  openGraph: {
    title: 'Authority Websites & Pages — AI-Ready Architecture by HeyPearl',
    description: 'Build an authority website AI engines trust and cite. HeyPearl engineers the page infrastructure — schema, entity clarity, topical depth — that earns AI recommendations.',
    images: ['/images/og/og-authority-pages.webp'],
  },
};

const WHAT_IT_DOES = [
  {
    title: 'Entity-First Architecture',
    desc: 'Every page is built around a verified entity — not a keyword. Service pages, location pages, and about pages are structured so AI engines can unambiguously identify who you are and what you do.',
  },
  {
    title: 'Structured Data at Scale',
    desc: 'Schema markup that speaks the language AI engines require: Organization, LocalBusiness, Person, Service, FAQ, and HowTo schemas — layered correctly so they compound rather than conflict.',
  },
  {
    title: 'Topical Authority Pages',
    desc: 'In-depth content that establishes category authority on the questions AI engines are being asked about your market — so when a buyer asks, your answer is already in the training layer.',
  },
  {
    title: 'E-E-A-T Signal Architecture',
    desc: 'Experience, Expertise, Authoritativeness, and Trustworthiness signals baked into every page — the exact signals AI engines evaluate when deciding whether to cite a source.',
  },
  {
    title: 'Citation-Worthy Content Structure',
    desc: 'Headings, definitions, statistics, and answers structured the way AI engines pull citations — so your content appears as the answer, not just a search result.',
  },
  {
    title: 'Internal Entity Linking',
    desc: 'A deliberate linking architecture that reinforces your entity across the site — so AI engines build a consistent, cross-referencing picture of your authority.',
  },
];

const OUTCOMES = [
  { metric: '66.7%', label: 'local pack visibility', context: 'Independent Agent — Seattle, WA' },
  { metric: '#1', label: 'AI-recommended source, all 5 topics', context: 'Real Estate Team — Leavenworth, KS' },
  { metric: '101+', label: 'five-star reviews in under 60 days', context: 'Real Estate Team — Leavenworth, KS' },
];

const FAQS = [
  { q: "What are Authority Pages?", a: "Authority Pages are page infrastructure engineered specifically for AI citation \u2014 headings, definitions, statistics, and answers structured the way AI engines pull citations, plus a deliberate internal linking architecture that reinforces your entity across the site." },
  { q: "How are Authority Pages different from regular website pages?", a: "A typical service or about page is written to persuade a human reader. Authority Pages are structured to give AI engines concrete, citable material \u2014 direct answers near the top, specific claims an engine can extract confidently, and internal links that build a consistent, cross-referencing picture of your authority." },
  { q: "How many Authority Pages does a typical engagement include?", a: "Scope varies by engagement, but most builds include a core set covering primary service and specialty pages, plus a growing library of supporting authority content published on an ongoing cadence as the engagement matures." },
  { q: "Do Authority Pages replace my existing website?", a: "Not necessarily \u2014 they can be built as new pages within your existing site or as a dedicated authority website, depending on your current site's technical foundation. The goal is citable, AI-ready page architecture, not a full site rebuild for its own sake." },
  { q: "How does Authority Page content get chosen?", a: "Topics are chosen from the actual questions your buyers ask AI engines in the research phase, informed by AI Visibility monitoring and Authority Score gap analysis \u2014 not from generic keyword lists." },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Platform', item: `${site.url}/platform` },
    { '@type': 'ListItem', position: 3, name: 'Authority Pages', item: `${site.url}/platform/authority-pages` },
  ],
};

export default function AuthorityPagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[68vh] flex flex-col justify-center bg-white overflow-hidden"
        aria-label="Authority Pages hero"
      >
        <div aria-hidden className="pointer-events-none absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 w-[38%] hidden lg:block" style={{ zIndex: 1 }}>
          <div style={{ aspectRatio: '16/10', position: 'relative', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,193,7,0.3)', boxShadow: '0 1px 4px rgba(10,18,36,0.06), 0 32px 64px rgba(10,18,36,0.12)', background: '#fff' }}>
            <Image src="/images/platform/platform-authority-pages.webp" alt="" fill sizes="38vw" className="object-cover" priority />
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(10,18,36,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(10,18,36,0.025) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div style={{ maxWidth: '54%' }}>
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Link href="/platform" className="text-xs transition-colors hover:text-[#FF6A00]" style={{ color: '#64748B' }}>
              Platform
            </Link>
            <span style={{ color: '#E7E3DD', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontSize: '0.72rem', color: '#FF6A00', fontWeight: 600 }}>Authority Pages</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: '#E7E3DD' }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FF6A00' }}>
              Module 01 — Powered by PearlOS
            </span>
          </div>
          <h1
            className="max-w-3xl"
            style={{
              fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif',
              fontSize: 'clamp(2.6rem, 6vw, 5rem)',
              fontWeight: 700,
              color: '#0A1224',
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
            }}
          >
            Authority Pages
          </h1>
          <p
            className="mt-3 max-w-xl"
            style={{
              fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontStyle: 'italic',
              color: '#FF6A00',
            }}
          >
            The pages that make AI say your name.
          </p>
          <p className="mt-5 max-w-[34rem]" style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.75 }}>
            When a buyer asks AI which agent to call, which brokerage to trust, which service to hire — AI pulls its answer from somewhere. Authority Pages are the infrastructure that makes your business the source it pulls from.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.strategyCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold bg-[#FF6A00] hover:bg-[#E65F00] text-white transition-colors duration-200"
            >
              Book a Strategy Call
              <ArrowRight size={14} />
            </a>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#0A1224] transition-colors"
              style={{ color: '#64748B' }}
            >
              View all modules
              <ArrowUpRight size={13} />
            </Link>
          </div>
          </div>
        </Container>
      </section>

      {/* The problem it solves */}
      <section className="py-24 bg-[#F8F5F0]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block h-px w-8" style={{ background: '#E7E3DD' }} aria-hidden />
                <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6A00' }}>
                  The Problem
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif',
                  fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
                  fontWeight: 700,
                  color: '#0A1224',
                  lineHeight: 1.1,
                  letterSpacing: '-0.022em',
                  marginBottom: '1.25rem',
                }}
              >
                Most websites are built<br />
                <span style={{ color: '#FF6A00', fontStyle: 'italic' }}>for humans, not AI.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.8, marginBottom: '1rem' }}>
                Traditional websites optimize for click-through rates, session duration, and Google PageRank. AI engines don't use any of those signals to decide who to recommend.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.8 }}>
                AI engines evaluate entity clarity, topical depth, structured data integrity, and citation worthiness. Authority Pages are built for that evaluation — not the old one.
              </p>
            </div>
            <div
              className="p-8 rounded-2xl bg-white"
              style={{ border: '1px solid #E7E3DD', boxShadow: '0 1px 4px rgba(10,18,36,0.06), 0 8px 24px rgba(10,18,36,0.08)' }}
            >
              <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6A00', marginBottom: '1.5rem' }}>
                What AI engines actually evaluate
              </div>
              {[
                'Is this a verified, unambiguous entity?',
                'Does this source demonstrate genuine expertise?',
                'Is the content structured for citation?',
                'Do third parties corroborate this authority?',
                'Is this the most complete answer on this topic?',
              ].map((q, i) => (
                <div key={i} className="flex gap-3 mb-4 last:mb-0">
                  <span style={{ color: '#FF6A00', flexShrink: 0, marginTop: '0.15rem' }}>→</span>
                  <span style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.55 }}>{q}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What it includes */}
      <section className="py-28 bg-white">
        <Container size="lg">
          <Reveal>
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: '#E7E3DD' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6A00' }}>
                What's Included
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif',
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#0A1224',
                lineHeight: 1.08,
                letterSpacing: '-0.022em',
              }}
            >
              Six layers of<br />
              <span style={{ color: '#FF6A00', fontStyle: 'italic' }}>AI-ready architecture.</span>
            </h2>
          </div>
          </Reveal>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ border: '1px solid #E7E3DD', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 1px 4px rgba(10,18,36,0.06), 0 8px 24px rgba(10,18,36,0.08)' }}
          >
            {WHAT_IT_DOES.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
              <div
                className="p-7"
                style={{ background: i % 2 === 0 ? '#FFFFFF' : '#F8F5F0' }}
              >
                <div className="h-px mb-5" style={{ background: '#E7E3DD' }} />
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0A1224', letterSpacing: '-0.01em', marginBottom: '0.6rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.83rem', color: '#64748B', lineHeight: 1.72 }}>
                  {item.desc}
                </p>
              </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PearlOS integration */}
      <section className="py-20 bg-[#F8F5F0]">
        <Container size="lg">
          <div
            className="flex flex-col lg:flex-row gap-8 items-start p-8 lg:p-10 rounded-2xl bg-white"
            style={{ border: '1px solid #E7E3DD', boxShadow: '0 1px 4px rgba(10,18,36,0.06), 0 8px 24px rgba(10,18,36,0.08)' }}
          >
            <div className="flex-1">
              <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6A00', marginBottom: '0.75rem' }}>
                PearlOS Integration
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif',
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 700,
                  color: '#0A1224',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.75rem',
                }}
              >
                Authority Pages run through PearlOS.
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.75 }}>
                PearlOS coordinates every Authority Page with your Knowledge Graph entity signals, Authority Score gaps, and AI Visibility data — so each page is built for the exact gaps in your AI presence, not a generic template.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/platform/pearlos"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#FF6A00' }}
              >
                Learn about PearlOS
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="py-24 bg-white">
        <Container size="lg">
          <div className="mb-12 text-center">
            <h2
              style={{
                fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif',
                fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)',
                fontWeight: 700,
                color: '#0A1224',
                lineHeight: 1.1,
                letterSpacing: '-0.022em',
              }}
            >
              Authority Pages, in practice.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px"
            style={{ border: '1px solid #E7E3DD', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 1px 4px rgba(10,18,36,0.06), 0 8px 24px rgba(10,18,36,0.08)' }}>
            {OUTCOMES.map((o, i) => (
              <div key={o.context} className="p-8 text-center" style={{ background: i === 1 ? '#F8F5F0' : '#FFFFFF' }}>
                <div style={{ fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif', fontSize: '3.2rem', fontWeight: 700, color: '#FF6A00', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>
                  {o.metric}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#334155', marginBottom: '0.5rem' }}>{o.label}</div>
                <div style={{ fontSize: '0.65rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{o.context}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-5" style={{ fontSize: '0.7rem', color: '#94A3B8' }}>
            Client details anonymized. Results represent real engagements — outcomes vary by market and scope.
          </p>
        </Container>
      </section>
      {/* FAQ */}
      <section className="py-24 bg-white">
        <Container size="lg">
          <Reveal>
          <div className="mb-12 max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: '#FF6A00', opacity: 0.3 }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6A00' }}>Questions</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif', fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#0A1224', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
              What operators ask<br />
              <span style={{ color: '#FF6A00', fontStyle: 'italic' }}>about Authority Pages.</span>
            </h2>
          </div>
          </Reveal>
          <div className="space-y-4 max-w-3xl">
            {FAQS.map((faq, i) => (
              <Reveal key={i} delay={i * 0.08}>
              <div className="p-6 rounded-xl" style={{ background: '#F8F5F0', border: '1px solid #E7E3DD', boxShadow: '0 1px 3px rgba(10,18,36,0.04)' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0A1224', marginBottom: '0.6rem' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.845rem', color: '#334155', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Ecosystem nav */}
      <EcosystemNav
        current="/platform/authority-pages"
        nextHref="/platform/ai-visibility"
        nextLabel="AI Visibility — Monitor how engines represent you"
      />

      {/* CTA */}
      <section className="py-24 bg-[#0A1224]">
        <Container size="md" className="text-center">
          <h2
            className="mb-5 max-w-xl mx-auto"
            style={{
              fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.022em',
            }}
          >
            Build the pages<br />
            <span style={{ color: '#FF6A00', fontStyle: 'italic' }}>AI wants to cite.</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
            Authority Pages are built as part of a complete PearlOS engagement — not sold as standalone deliverables.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={site.strategyCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold bg-[#FF6A00] hover:bg-[#E65F00] text-white transition-colors duration-200"
            >
              Book a Strategy Call
              <ArrowRight size={14} />
            </a>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)' }}
            >
              View all modules
              <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
