import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { EcosystemNav } from '@/components/platform/EcosystemNav';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Authority Pages — AI-Ready Page Architecture | HeyPearl',
  description:
    'Authority Pages are the page infrastructure that makes your business citable by AI. Structured for entity recognition, topical authority, and zero-click AI recommendations — not just Google rankings.',
  openGraph: {
    title: 'Authority Pages — AI-Ready Page Architecture',
    description: 'Page infrastructure engineered so every AI engine knows exactly who you are and cites you with confidence.',
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
  { metric: '14', label: 'buyer queries answered', context: 'Luxury Realtor — Seattle, WA' },
  { metric: '#1', label: 'AI-cited brokerage', context: 'Independent Brokerage — Austin, TX' },
  { metric: '3×', label: 'AI recommendation increase', context: 'Real Estate Team — Scottsdale, AZ' },
];

export default function AuthorityPagesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[68vh] flex flex-col justify-center bg-[#07142F] overflow-hidden"
        aria-label="Authority Pages hero"
      >
        <div aria-hidden className="pointer-events-none absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 w-[38%] hidden lg:block" style={{ zIndex: 1 }}>
          <div style={{ aspectRatio: '16/10', position: 'relative', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(182,146,94,0.15)', boxShadow: '0 32px 64px rgba(3,8,20,0.7)' }}>
            <Image src="/images/platform/platform-authority-pages.webp" alt="" fill sizes="38vw" className="object-cover" />
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(194,24,91,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(194,24,91,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, rgba(194,24,91,0.06) 0%, transparent 65%)' }}
        />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div style={{ maxWidth: '54%' }}>
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Link href="/platform" className="text-xs" style={{ color: '#98A6BE' }}>
              Platform
            </Link>
            <span style={{ color: 'rgba(245,241,232,0.2)', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontSize: '0.72rem', color: '#C2185B', fontWeight: 600 }}>Authority Pages</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B6925E' }}>
              Module 01 — Powered by PearlOS
            </span>
          </div>
          <h1
            className="max-w-3xl"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2.6rem, 6vw, 5rem)',
              fontWeight: 700,
              color: '#F8F6F2',
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
            }}
          >
            Authority Pages
          </h1>
          <p
            className="mt-3 max-w-xl"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontStyle: 'italic',
              color: '#B6925E',
            }}
          >
            The pages that make AI say your name.
          </p>
          <p className="mt-5 max-w-[34rem]" style={{ fontSize: '1rem', color: '#C9D3E3', lineHeight: 1.75 }}>
            When a buyer asks AI which agent to call, which brokerage to trust, which service to hire — AI pulls its answer from somewhere. Authority Pages are the infrastructure that makes your business the source it pulls from.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.strategyCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold bg-[#C2185B] hover:bg-[#D62F73] text-white transition-colors duration-200"
            >
              Book a Strategy Call
              <ArrowRight size={14} />
            </a>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: '#98A6BE' }}
            >
              View all modules
              <ArrowUpRight size={13} />
            </Link>
          </div>
          </div>
        </Container>
      </section>

      {/* The problem it solves */}
      <section className="py-24 bg-[#14284A]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.35)' }} aria-hidden />
                <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B6925E' }}>
                  The Problem
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
                  fontWeight: 700,
                  color: '#F8F6F2',
                  lineHeight: 1.1,
                  letterSpacing: '-0.022em',
                  marginBottom: '1.25rem',
                }}
              >
                Most websites are built<br />
                <span style={{ color: '#B6925E', fontStyle: 'italic' }}>for humans, not AI.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#98A6BE', lineHeight: 1.8, marginBottom: '1rem' }}>
                Traditional websites optimize for click-through rates, session duration, and Google PageRank. AI engines don't use any of those signals to decide who to recommend.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#98A6BE', lineHeight: 1.8 }}>
                AI engines evaluate entity clarity, topical depth, structured data integrity, and citation worthiness. Authority Pages are built for that evaluation — not the old one.
              </p>
            </div>
            <div
              className="p-8 rounded-2xl"
              style={{ background: 'rgba(194,24,91,0.04)', border: '1px solid rgba(182,146,94,0.12)' }}
            >
              <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B6925E', marginBottom: '1.5rem' }}>
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
                  <span style={{ color: '#B6925E', flexShrink: 0, marginTop: '0.15rem' }}>→</span>
                  <span style={{ fontSize: '0.88rem', color: '#C9D3E3', lineHeight: 1.55 }}>{q}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What it includes */}
      <section className="py-28 bg-[#07142F]">
        <Container size="lg">
          <Reveal>
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.35)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B6925E' }}>
                What's Included
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#F8F6F2',
                lineHeight: 1.08,
                letterSpacing: '-0.022em',
              }}
            >
              Six layers of<br />
              <span style={{ color: '#B6925E', fontStyle: 'italic' }}>AI-ready architecture.</span>
            </h2>
          </div>
          </Reveal>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ border: '1px solid rgba(48,72,111,0.35)', borderRadius: '1rem', overflow: 'hidden' }}
          >
            {WHAT_IT_DOES.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
              <div
                className="p-7"
                style={{ background: i % 2 === 0 ? '#07142F' : '#14284A' }}
              >
                <div className="h-px mb-5" style={{ background: 'rgba(182,146,94,0.1)' }} />
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8F6F2', letterSpacing: '-0.01em', marginBottom: '0.6rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.83rem', color: 'rgba(245,241,232,0.42)', lineHeight: 1.72 }}>
                  {item.desc}
                </p>
              </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PearlOS integration */}
      <section className="py-20 bg-[#14284A]">
        <Container size="lg">
          <div
            className="flex flex-col lg:flex-row gap-8 items-start p-8 lg:p-10 rounded-2xl"
            style={{ background: 'rgba(194,24,91,0.04)', border: '1px solid rgba(182,146,94,0.12)' }}
          >
            <div className="flex-1">
              <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B6925E', marginBottom: '0.75rem' }}>
                PearlOS Integration
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 700,
                  color: '#F8F6F2',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.75rem',
                }}
              >
                Authority Pages run through PearlOS.
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#98A6BE', lineHeight: 1.75 }}>
                PearlOS coordinates every Authority Page with your Knowledge Graph entity signals, Authority Score gaps, and AI Visibility data — so each page is built for the exact gaps in your AI presence, not a generic template.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/platform/pearlos"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#C2185B' }}
              >
                Learn about PearlOS
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="py-24 bg-[#07142F]">
        <Container size="lg">
          <div className="mb-12 text-center">
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)',
                fontWeight: 700,
                color: '#F8F6F2',
                lineHeight: 1.1,
                letterSpacing: '-0.022em',
              }}
            >
              Authority Pages, in practice.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px"
            style={{ border: '1px solid rgba(48,72,111,0.35)', borderRadius: '1rem', overflow: 'hidden' }}>
            {OUTCOMES.map((o, i) => (
              <div key={o.context} className="p-8 text-center" style={{ background: i === 1 ? '#14284A' : '#07142F' }}>
                <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '3.2rem', fontWeight: 700, color: '#B6925E', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>
                  {o.metric}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#C9D3E3', marginBottom: '0.5rem' }}>{o.label}</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(182,146,94,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{o.context}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-5" style={{ fontSize: '0.7rem', color: 'rgba(245,241,232,0.2)' }}>
            Client details anonymized. Results represent real engagements — outcomes vary by market and scope.
          </p>
        </Container>
      </section>

      {/* Ecosystem nav */}
      <EcosystemNav
        current="/platform/authority-pages"
        nextHref="/platform/ai-visibility"
        nextLabel="AI Visibility — Monitor how engines represent you"
      />

      {/* CTA */}
      <section className="py-24 bg-[#14284A]">
        <Container size="md" className="text-center">
          <h2
            className="mb-5 max-w-xl mx-auto"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              color: '#F8F6F2',
              lineHeight: 1.1,
              letterSpacing: '-0.022em',
            }}
          >
            Build the pages<br />
            <span style={{ color: '#B6925E', fontStyle: 'italic' }}>AI wants to cite.</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '0.95rem', color: '#98A6BE', lineHeight: 1.75 }}>
            Authority Pages are built as part of a complete PearlOS engagement — not sold as standalone deliverables.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={site.strategyCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold bg-[#C2185B] hover:bg-[#D62F73] text-white transition-colors duration-200"
            >
              Book a Strategy Call
              <ArrowRight size={14} />
            </a>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#C9D3E3' }}
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
