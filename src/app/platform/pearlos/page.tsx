import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { EcosystemNav } from '@/components/platform/EcosystemNav';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'PearlOS — The AI Authority Operating System | HeyPearl',
  description:
    'PearlOS is the operating system behind every HeyPearl engagement. It orchestrates entity signals, monitors 6 AI engines in real time, and executes the P.E.A.R.L. framework so your authority compounds as a system.',
  openGraph: {
    title: 'PearlOS — The AI Authority Operating System',
    description:
      'The unified intelligence layer that turns five modules into one compounding authority system.',
    images: ['/images/og/og-pearlos.webp'],
  },
};

const BUSINESS_OUTCOMES = [
  {
    outcome: 'More inbound from AI — without paying for it.',
    detail: 'When AI engines recommend your business in response to buyer queries, you get inbound calls from people already convinced to reach out. No ad spend required.',
  },
  {
    outcome: 'One system instead of five disconnected tools.',
    detail: 'PearlOS coordinates every module so you don\'t have to. Entity signals, content layers, monitoring, and GEO — all running through one operating layer with one strategic direction.',
  },
  {
    outcome: 'Authority that builds instead of resetting.',
    detail: 'Every month you run PearlOS, the signals accumulate. AI visibility grows without proportional reinvestment — the opposite of ad spend, which stops the moment billing stops.',
  },
];

const FUNCTIONS = [
  {
    title: 'Unified Signal Orchestration',
    description:
      'PearlOS connects entity signals, content layers, and reputation inputs across your full authority infrastructure — ensuring every layer reinforces every other.',
  },
  {
    title: '6-Engine Monitoring',
    description:
      'ChatGPT, Perplexity, Gemini, Claude AI, Microsoft Copilot, and Google AI Overviews — PearlOS tracks how each engine represents your business and flags changes the moment they happen.',
  },
  {
    title: 'P.E.A.R.L. Framework Execution',
    description:
      'Each engagement executes the five-layer P.E.A.R.L. sequence in the right order. PearlOS enforces the sequence — preventing gaps and eliminating the guesswork from authority building.',
  },
  {
    title: 'Authority Intelligence Layer',
    description:
      'PearlOS surfaces what is working, what is missing, and where to invest next — at every phase of the 90-day authority build and beyond.',
  },
  {
    title: 'Module Coordination',
    description:
      'Authority Pages, Authority Score, Knowledge Graph, AI Visibility, and GEO Engine don\'t operate in isolation. PearlOS makes them function as one integrated system.',
  },
  {
    title: 'Reinforcing Feedback Loop',
    description:
      'As authority grows, PearlOS captures what signals are driving AI citations and reinforces them — creating returns that increase over time without proportional reinvestment.',
  },
];

const LAYERS = [
  { step: '01', title: 'Entity Layer', desc: 'Who you are — name, category, geography, expertise, verified across every AI engine.' },
  { step: '02', title: 'Authority Layer', desc: 'What you know — topical depth, structured content, and E-E-A-T signals that make your expertise citable.' },
  { step: '03', title: 'Reputation Layer', desc: 'Who vouches for you — citation patterns, review architecture, and third-party trust signals AI can verify.' },
  { step: '04', title: 'Visibility Layer', desc: 'How AI sees you — real-time monitoring of how every major engine represents your business in generated responses.' },
  { step: '05', title: 'Leverage Layer', desc: 'How authority compounds — distribution and amplification systems that grow your AI visibility month after month.' },
];

export default function PearlOSPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[72vh] flex flex-col justify-center bg-[#090909] overflow-hidden"
        aria-label="PearlOS hero"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image src="/images/platform/platform-pearlos.webp" alt="" fill sizes="100vw" className="object-cover opacity-[0.12]" />
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
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse at top, rgba(191,155,92,0.07) 0%, transparent 65%)' }}
        />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link href="/platform" className="text-xs" style={{ color: 'rgba(242,237,228,0.35)' }}>
              Platform
            </Link>
            <span style={{ color: 'rgba(242,237,228,0.2)', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontSize: '0.72rem', color: '#BF9B5C', fontWeight: 600 }}>PearlOS</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-px w-8" style={{ background: '#BF9B5C', opacity: 0.5 }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              The Operating System — Start Here
            </span>
          </div>
          <h1
            className="max-w-3xl"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
              fontWeight: 700,
              color: '#F2EDE4',
              lineHeight: 1.03,
              letterSpacing: '-0.03em',
            }}
          >
            PearlOS
          </h1>
          <p
            className="mt-4 max-w-xl"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              fontStyle: 'italic',
              color: '#BF9B5C',
            }}
          >
            The system that runs your authority build — so you don't have to.
          </p>
          <p className="mt-5 max-w-[36rem]" style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.75 }}>
            PearlOS coordinates every module, monitors every AI engine, and executes the P.E.A.R.L. framework in the exact sequence required. Every HeyPearl engagement is powered by it from day one.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.strategyCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200"
            >
              See PearlOS in Action
              <ArrowRight size={14} />
            </a>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: 'rgba(242,237,228,0.45)' }}
            >
              View all platform modules
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Business outcomes — what PearlOS means for your business */}
      <section className="py-24 bg-[#0B0B0B]">
        <Container size="lg">
          <div className="mb-10 max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
                What It Means for Your Business
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
                fontWeight: 700,
                color: '#F2EDE4',
                lineHeight: 1.1,
                letterSpacing: '-0.022em',
              }}
            >
              Three outcomes.<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>Not features. Outcomes.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {BUSINESS_OUTCOMES.map((item, i) => (
              <div
                key={i}
                className="p-7 rounded-xl flex flex-col"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#F2EDE4',
                    lineHeight: 1.35,
                    marginBottom: '1rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.outcome}
                </div>
                <div className="h-px mb-4" style={{ background: 'rgba(191,155,92,0.12)' }} />
                <p style={{ fontSize: '0.85rem', color: 'rgba(242,237,228,0.45)', lineHeight: 1.7 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What PearlOS does — technical */}
      <section className="py-28 bg-[#0A0A0A]">
        <Container size="lg">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
                How It Works
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#F2EDE4',
                lineHeight: 1.08,
                letterSpacing: '-0.022em',
              }}
            >
              Six functions.<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>One coordinated system.</span>
            </h2>
            <p className="mt-5" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.48)', lineHeight: 1.75 }}>
              Without PearlOS, the five modules are powerful individual tools. With it, they become a single coordinated system where every layer amplifies every other.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}
          >
            {FUNCTIONS.map((fn, i) => (
              <div
                key={fn.title}
                className="p-7"
                style={{ background: i % 2 === 0 ? '#0F0F0F' : '#0D0D0D' }}
              >
                <div className="h-px mb-5" style={{ background: 'rgba(191,155,92,0.1)' }} />
                <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#F2EDE4', letterSpacing: '-0.01em', marginBottom: '0.6rem' }}>
                  {fn.title}
                </h3>
                <p style={{ fontSize: '0.83rem', color: 'rgba(242,237,228,0.42)', lineHeight: 1.72 }}>
                  {fn.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The 5 Layers PearlOS executes */}
      <section className="py-28 bg-[#090909]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
                <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
                  The P.E.A.R.L. Sequence
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                  fontWeight: 700,
                  color: '#F2EDE4',
                  lineHeight: 1.08,
                  letterSpacing: '-0.022em',
                  marginBottom: '1.25rem',
                }}
              >
                Five layers.<br />
                <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>Executed in order.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.48)', lineHeight: 1.75 }}>
                PearlOS enforces the P.E.A.R.L. sequence because the order matters. Entity architecture must precede authority content. Authority must precede reputation. Reputation must precede leverage. PearlOS ensures no step is skipped, no layer is built on a weak foundation.
              </p>
            </div>

            <div className="space-y-3">
              {LAYERS.map((layer) => (
                <div
                  key={layer.step}
                  className="flex gap-5 p-5 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.1rem', fontWeight: 700, color: 'rgba(191,155,92,0.5)', flexShrink: 0, lineHeight: 1 }}>
                    {layer.step}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#F2EDE4', marginBottom: '0.25rem' }}>
                      {layer.title}
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(242,237,228,0.42)', lineHeight: 1.65 }}>
                      {layer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Ecosystem nav */}
      <EcosystemNav
        current=""
        nextHref="/platform/authority-score"
        nextLabel="Authority Score — Measure your gaps"
      />

      {/* CTA */}
      <section className="py-24 bg-[#0B0B0B]">
        <Container size="md" className="text-center">
          <h2
            className="mb-5 max-w-xl mx-auto"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: '#F2EDE4',
              lineHeight: 1.1,
              letterSpacing: '-0.022em',
            }}
          >
            Ready to run PearlOS<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>for your business?</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.45)', lineHeight: 1.75 }}>
            Every HeyPearl engagement is powered by PearlOS from day one. Book a strategy call to see how it applies to your specific market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={site.strategyCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200"
            >
              See PearlOS in Action
              <ArrowRight size={14} />
            </a>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(242,237,228,0.55)' }}
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
