import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { EcosystemNav } from '@/components/platform/EcosystemNav';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Authority Score — AI Visibility Measurement | HeyPearl',
  description:
    "HeyPearl's Authority Score is a proprietary scoring system that quantifies your AI visibility across 6 engines, surfaces the gaps costing you recommendations, and tracks your authority progress over time.",
  openGraph: {
    title: 'Authority Score — Measure and Track Your AI Visibility',
    description: "The scoring system that tells you exactly where you stand in AI search — and what to fix first.",
    images: ['/images/og/og-authority-score.webp'],
  },
};

const WHAT_IT_MEASURES = [
  { label: 'Entity Verification', desc: 'How clearly AI engines can identify and verify your business as a distinct, unambiguous entity.' },
  { label: 'Topical Authority', desc: 'The depth and breadth of expertise signals AI engines attribute to your business in your category.' },
  { label: 'Citation Frequency', desc: 'How often your business appears as a recommended answer across ChatGPT, Perplexity, Gemini, and others.' },
  { label: 'Cross-Engine Consistency', desc: 'Whether all six major AI engines represent your business accurately and consistently.' },
  { label: 'Competitor Position', desc: 'Where your authority stands relative to the businesses AI engines recommend instead of you.' },
  { label: 'Gap Map', desc: 'The exact infrastructure gaps — entity signals, content layers, reputation inputs — that are limiting your AI visibility.' },
];

const PROCESS = [
  { step: '01', title: 'Baseline Audit', desc: 'We run your business through six AI engines with the queries your buyers are actually asking — capturing exactly how (or whether) you appear.' },
  { step: '02', title: 'Authority Score Calculation', desc: 'Your score is calculated across five dimensions: entity clarity, topical depth, citation frequency, cross-engine consistency, and reputation signals.' },
  { step: '03', title: 'Gap Analysis', desc: 'Every gap is mapped to a specific layer of authority infrastructure — so you know exactly what to build, not just what\'s missing.' },
  { step: '04', title: 'Ongoing Tracking', desc: 'PearlOS re-runs your Authority Score at regular intervals throughout your engagement — so you can see compounding gains in real time.' },
];

export default function AuthorityScorePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[68vh] flex flex-col justify-center bg-[#090909] overflow-hidden"
        aria-label="Authority Score hero"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image src="/images/platform/platform-authority-score.webp" alt="" fill sizes="100vw" className="object-cover opacity-[0.12]" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(191,155,92,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(191,155,92,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/3 w-[600px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(191,155,92,0.06) 0%, transparent 65%)' }}
        />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Link href="/platform" className="text-xs" style={{ color: 'rgba(242,237,228,0.35)' }}>Platform</Link>
            <span style={{ color: 'rgba(242,237,228,0.2)', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontSize: '0.72rem', color: '#BF9B5C', fontWeight: 600 }}>Authority Score</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: '#BF9B5C', opacity: 0.5 }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              Module 02 — Powered by PearlOS
            </span>
          </div>
          <h1
            className="max-w-3xl"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2.6rem, 6vw, 5rem)',
              fontWeight: 700,
              color: '#F2EDE4',
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
            }}
          >
            Authority Score
          </h1>
          <p
            className="mt-3 max-w-xl"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontStyle: 'italic',
              color: '#BF9B5C',
            }}
          >
            You can't improve what you can't see.
          </p>
          <p className="mt-5 max-w-[34rem]" style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.75 }}>
            Most businesses don't know their AI visibility is eroding until leads stop coming in. Authority Score gives you the exact picture — which engines are recommending you, which aren't, and what gaps to close first to start earning AI recommendations.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.strategyCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200"
            >
              Get Your Authority Score
              <ArrowRight size={14} />
            </a>
            <Link href="/platform" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'rgba(242,237,228,0.45)' }}>
              View all modules <ArrowUpRight size={13} />
            </Link>
          </div>
        </Container>
      </section>

      {/* What it measures */}
      <section className="py-28 bg-[#0A0A0A]">
        <Container size="lg">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>What It Measures</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              Six dimensions.<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>One clear picture.</span>
            </h2>
            <p className="mt-5" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.48)', lineHeight: 1.75 }}>
              Authority Score doesn't measure website traffic or keyword rankings. It measures the signals AI engines actually use to decide whether to recommend your business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
            {WHAT_IT_MEASURES.map((item, i) => (
              <div key={item.label} className="p-7" style={{ background: i % 2 === 0 ? '#0D0D0D' : '#0F0F0F' }}>
                <div className="h-px mb-5" style={{ background: 'rgba(191,155,92,0.1)' }} />
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F2EDE4', letterSpacing: '-0.01em', marginBottom: '0.6rem' }}>{item.label}</h3>
                <p style={{ fontSize: '0.83rem', color: 'rgba(242,237,228,0.42)', lineHeight: 1.72 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The process */}
      <section className="py-28 bg-[#090909]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
                <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>How It Works</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em', marginBottom: '1.25rem' }}>
                Scoring in four steps.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.48)', lineHeight: 1.75 }}>
                Every engagement begins with an Authority Score baseline. As PearlOS builds infrastructure, the score is retaken at each phase — so you can see the direct relationship between what was built and what moved.
              </p>
            </div>
            <div className="space-y-3">
              {PROCESS.map((p) => (
                <div key={p.step} className="flex gap-5 p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.1rem', fontWeight: 700, color: 'rgba(191,155,92,0.5)', flexShrink: 0, lineHeight: 1 }}>{p.step}</div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#F2EDE4', marginBottom: '0.25rem' }}>{p.title}</div>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(242,237,228,0.42)', lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* PearlOS integration */}
      <section className="py-20 bg-[#0A0A0A]">
        <Container size="lg">
          <div className="flex flex-col lg:flex-row gap-8 items-start p-8 lg:p-10 rounded-2xl"
            style={{ background: 'rgba(191,155,92,0.04)', border: '1px solid rgba(191,155,92,0.12)' }}>
            <div className="flex-1">
              <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C', marginBottom: '0.75rem' }}>PearlOS Integration</div>
              <h3 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                Authority Score guides the entire system.
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.75 }}>
                PearlOS uses your Authority Score data to prioritize which modules get attention first, which gaps get filled when, and how resources are allocated across the 90-day P.E.A.R.L. sequence. The score isn't just a report — it's the instruction set.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/platform/pearlos" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#BF9B5C' }}>
                Learn about PearlOS <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Ecosystem nav */}
      <EcosystemNav
        current="/platform/authority-score"
        nextHref="/platform/knowledge-graph"
        nextLabel="Knowledge Graph — Build your entity foundation"
      />

      {/* CTA */}
      <section className="py-24 bg-[#090909]">
        <Container size="md" className="text-center">
          <h2 className="mb-5 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
            Find out where you<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>stand in AI search.</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.45)', lineHeight: 1.75 }}>
            Your Authority Score baseline is the first deliverable in every HeyPearl engagement. Book a strategy call to start the audit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200">
              Book a Strategy Call <ArrowRight size={14} />
            </a>
            <Link href="/platform" className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(242,237,228,0.55)' }}>
              View all modules <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
