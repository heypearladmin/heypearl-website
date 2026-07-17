import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The Platform — HeyPearl AI Authority Infrastructure',
  description:
    'PearlOS and five purpose-built modules — one integrated system that makes your business the authority AI recommends. Authority Pages, Authority Score, Knowledge Graph, AI Visibility, and GEO Engine.',
  openGraph: {
    title: 'The HeyPearl Platform — AI Authority Infrastructure',
    description:
      'One operating system. Five integrated modules. The complete infrastructure for becoming the business AI recommends.',
    images: ['/images/og/og-platform.webp'],
  },
};

const MODULES = [
  {
    label: 'Authority Pages',
    href: '/platform/authority-pages',
    tagline: 'AI-ready page architecture',
    description:
      'Page infrastructure engineered for AI citation — structured so every engine understands exactly who you are and what you offer.',
    number: '01',
  },
  {
    label: 'Authority Score',
    href: '/platform/authority-score',
    tagline: 'Measurement & gap analysis',
    description:
      'A proprietary scoring system that quantifies your AI visibility and surfaces the exact gaps costing you recommendations.',
    number: '02',
  },
  {
    label: 'Knowledge Graph',
    href: '/platform/knowledge-graph',
    tagline: 'Entity architecture',
    description:
      'Structured signals that establish your business as a verified, unambiguous entity across every major AI engine.',
    number: '03',
  },
  {
    label: 'AI Visibility',
    href: '/platform/ai-visibility',
    tagline: 'Real-time monitoring',
    description:
      'Continuous tracking of how ChatGPT, Perplexity, Gemini, and Google AI Overviews represent your business.',
    number: '04',
  },
  {
    label: 'GEO Engine',
    href: '/platform/geo-engine',
    tagline: 'Generative Engine Optimization',
    description:
      'Purpose-built GEO tools designed for the era when AI is the primary discovery channel for high-intent buyers.',
    number: '05',
  },
];

const PEARLOS_FUNCTIONS = [
  { title: 'Signal Orchestration', desc: 'Coordinates every entity signal, content layer, and reputation input across the full P.E.A.R.L. sequence.' },
  { title: '6-Engine Monitoring', desc: 'Tracks how ChatGPT, Perplexity, Gemini, Claude, Copilot, and Google AI Overviews represent your business in real time.' },
  { title: 'Framework Execution', desc: 'Ensures every engagement executes the P.E.A.R.L. sequence in the right order — no gaps, no redundancy.' },
  { title: 'Authority Intelligence', desc: 'Surfaces what is working, what is missing, and what to do next — at every stage of your authority build.' },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[70vh] flex flex-col justify-center bg-[#090909] overflow-hidden"
        aria-label="Platform hero"
      >
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
          className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, rgba(191,155,92,0.07) 0%, transparent 65%)' }}
        />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-px w-8" style={{ background: '#BF9B5C', opacity: 0.5 }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              The HeyPearl Platform
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
            One operating system.<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>Five integrated modules.</span>
          </h1>
          <p className="mt-6 max-w-[36rem]" style={{ fontSize: '1.05rem', color: 'rgba(242,237,228,0.56)', lineHeight: 1.75 }}>
            PearlOS orchestrates every signal, every engine, and every layer of authority infrastructure — so your AI visibility grows as a system, not a collection of tactics.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.strategyCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200"
            >
              Book a Strategy Call
              <ArrowRight size={14} />
            </a>
            <Link
              href="/platform/pearlos"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(242,237,228,0.65)' }}
            >
              Explore PearlOS
              <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

      {/* PearlOS — the orchestrating layer */}
      <section className="py-28 bg-[#0A0A0A]" aria-label="PearlOS overview">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
                <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
                  The Operating Layer
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 700,
                  color: '#F2EDE4',
                  lineHeight: 1.08,
                  letterSpacing: '-0.025em',
                  marginBottom: '1.25rem',
                }}
              >
                PearlOS runs<br />
                <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>everything.</span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.52)', lineHeight: 1.75, marginBottom: '1rem' }}>
                PearlOS is the operating system beneath every HeyPearl engagement — the unified intelligence layer that connects entity signals, monitors AI engines, and executes the P.E.A.R.L. framework in sequence.
              </p>
              <p style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.52)', lineHeight: 1.75, marginBottom: '2rem' }}>
                Without PearlOS, the five modules are powerful tools. With it, they become one integrated system.
              </p>
              <Link
                href="/platform/pearlos"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#BF9B5C' }}
              >
                Deep dive into PearlOS
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Right — 4 PearlOS functions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
              style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
              {PEARLOS_FUNCTIONS.map((fn, i) => (
                <div
                  key={fn.title}
                  className="p-5"
                  style={{ background: i % 2 === 0 ? '#0F0F0F' : '#0D0D0D' }}
                >
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#F2EDE4', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>
                    {fn.title}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.65 }}>
                    {fn.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Journey guide */}
      <section className="py-20 bg-[#090909]" aria-label="Platform journey">
        <Container size="lg">
          <div className="mb-10 flex items-center gap-3">
            <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              Where to Start
            </span>
          </div>
          <h2
            className="mb-10 max-w-xl"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
              fontWeight: 700,
              color: '#F2EDE4',
              lineHeight: 1.1,
              letterSpacing: '-0.022em',
            }}
          >
            The recommended path through the platform.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { step: '00', label: 'PearlOS', href: '/platform/pearlos', desc: 'Understand the operating system that runs everything. Start here.', highlight: true },
              { step: '01', label: 'Authority Score', href: '/platform/authority-score', desc: 'See exactly where your AI visibility stands and what gaps to close first.' },
              { step: '02', label: 'Knowledge Graph', href: '/platform/knowledge-graph', desc: 'Build the entity foundation every other module depends on.' },
              { step: '03', label: 'Authority Pages', href: '/platform/authority-pages', desc: 'Create the citable page infrastructure AI engines pull from.' },
              { step: '04', label: 'AI Visibility', href: '/platform/ai-visibility', desc: 'Monitor how six AI engines represent your business in real time.' },
              { step: '05', label: 'GEO Engine', href: '/platform/geo-engine', desc: 'Amplify what works. Close what doesn\'t. Compound month after month.' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex gap-4 p-5 rounded-xl transition-colors duration-200 hover:bg-white/[0.025]"
                style={{
                  background: item.highlight ? 'rgba(191,155,92,0.06)' : 'rgba(255,255,255,0.02)',
                  border: item.highlight ? '1px solid rgba(191,155,92,0.2)' : '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: item.highlight ? '#BF9B5C' : 'rgba(191,155,92,0.4)',
                    flexShrink: 0,
                    lineHeight: 1,
                    marginTop: '0.1rem',
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <div
                    className="group-hover:text-[#BF9B5C] transition-colors duration-200 mb-1"
                    style={{ fontSize: '0.88rem', fontWeight: 700, color: item.highlight ? '#F2EDE4' : 'rgba(242,237,228,0.75)', letterSpacing: '-0.01em' }}
                  >
                    {item.label}
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Module grid */}
      <section className="py-28 bg-[#0A0A0A]" aria-label="Platform modules">
        <Container size="lg">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
                Five Modules
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
              Five systems. <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>One result.</span>
            </h2>
            <p className="mt-4 max-w-xl" style={{ fontSize: '0.9rem', color: 'rgba(242,237,228,0.60)', lineHeight: 1.7 }}>
              Each module addresses a distinct layer of AI authority — and every module runs through PearlOS so they build on each other, not alongside each other.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}
          >
            {MODULES.map((mod, i) => (
              <Link
                key={mod.href}
                href={mod.href}
                className="group block p-7 lg:p-8 transition-colors duration-200 hover:bg-white/[0.025]"
                style={{ background: '#0D0D0D' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'rgba(191,155,92,0.45)', letterSpacing: '0.06em' }}>
                    {mod.number}
                  </span>
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 group-hover:opacity-50 transition-opacity shrink-0"
                    style={{ color: '#BF9B5C' }}
                  />
                </div>
                <div style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(191,155,92,0.6)', marginBottom: '0.35rem' }}>
                  {mod.tagline}
                </div>
                <h3
                  className="group-hover:text-[#BF9B5C] transition-colors duration-200 mb-4"
                  style={{ fontSize: '1rem', fontWeight: 700, color: 'rgba(242,237,228,0.9)', letterSpacing: '-0.01em' }}
                >
                  {mod.label}
                </h3>
                <div className="h-px mb-4" style={{ background: 'rgba(255,255,255,0.05)' }} />
                <p style={{ fontSize: '0.845rem', color: 'rgba(242,237,228,0.4)', lineHeight: 1.7 }}>
                  {mod.description}
                </p>
              </Link>
            ))}

            {/* Sixth cell — the system message */}
            <div className="p-7 lg:p-8 flex flex-col justify-between" style={{ background: '#111111' }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Every module runs through PearlOS — turning individual signals into integrated authority that builds month after month.
              </p>
              <a
                href={site.strategyCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#BF9B5C' }}
              >
                Book a Strategy Call
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works together */}
      <section className="py-24 bg-[#0B0B0B]" aria-label="How the platform works">
        <Container size="md" className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              Why Integration Matters
            </span>
            <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
          </div>
          <h2
            className="mb-6 max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.9rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#F2EDE4',
              lineHeight: 1.1,
              letterSpacing: '-0.022em',
            }}
          >
            We didn't build five separate tools.{' '}
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>We built one system.</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-6" style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.52)', lineHeight: 1.8 }}>
            Authority Pages create citable infrastructure. Knowledge Graph registers your entity. Authority Score reveals the gaps. AI Visibility tracks every engine. GEO Engine amplifies what works. PearlOS makes them all speak the same language and execute in the right order.
          </p>
          <p className="max-w-xl mx-auto mb-10" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.75 }}>
            Most agencies sell individual tactics. HeyPearl builds integrated authority infrastructure — the kind that makes AI engines trust and recommend your business six months from now, not just this week.
          </p>
          <a
            href={site.strategyCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200"
          >
            Explore the Platform
            <ArrowRight size={14} />
          </a>
        </Container>
      </section>
    </>
  );
}
