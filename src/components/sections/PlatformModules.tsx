import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const MODULES = [
  {
    label: 'PearlOS',
    href: '/platform/pearlos',
    tagline: 'The operating layer',
    description: 'The unified system that orchestrates every component of your AI authority strategy. PearlOS is the engine beneath everything.',
    accent: '#BF9B5C',
    flagship: true,
  },
  {
    label: 'Authority Pages',
    href: '/platform/authority-pages',
    tagline: 'AI-ready architecture',
    description: 'Page infrastructure engineered for AI citation and recommendation — not just search ranking.',
    accent: 'rgba(191,155,92,0.7)',
  },
  {
    label: 'Authority Score',
    href: '/platform/authority-score',
    tagline: 'Measurement & tracking',
    description: 'A proprietary scoring system that quantifies your AI visibility and surfaces gaps before they cost you market share.',
    accent: 'rgba(191,155,92,0.7)',
  },
  {
    label: 'Knowledge Graph',
    href: '/platform/knowledge-graph',
    tagline: 'Entity architecture',
    description: 'Structured entity signals that tell AI engines exactly who you are, what you do, and why you should be trusted.',
    accent: 'rgba(191,155,92,0.7)',
  },
  {
    label: 'AI Visibility',
    href: '/platform/ai-visibility',
    tagline: 'Real-time monitoring',
    description: 'Continuous monitoring of how ChatGPT, Perplexity, Gemini, and other engines represent your business in their outputs.',
    accent: 'rgba(191,155,92,0.7)',
  },
  {
    label: 'GEO Engine',
    href: '/platform/geo-engine',
    tagline: 'Generative Engine Optimization',
    description: 'Purpose-built GEO tools and frameworks for the era when AI is the primary discovery channel for high-intent buyers.',
    accent: 'rgba(191,155,92,0.7)',
  },
];

export function PlatformModules() {
  return (
    <section className="py-28 bg-[#090909]">
      <Container size="lg">
        {/* Section header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
                The Platform
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#F2EDE4',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Six modules.<br />One complete system.
            </h2>
          </div>
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 text-sm font-medium shrink-0 self-start sm:self-auto"
            style={{ color: 'rgba(242,237,228,0.5)' }}
          >
            Full platform overview
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
          {MODULES.map((mod) => (
            <Link
              key={mod.href}
              href={mod.href}
              className="group block p-6 lg:p-8 transition-colors duration-200"
              style={{ background: mod.flagship ? '#111111' : '#0D0D0D' }}
            >
              {/* Module label row */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div
                    style={{
                      fontSize: '0.67rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: mod.accent,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {mod.tagline}
                  </div>
                  <h3
                    className="group-hover:text-[#BF9B5C] transition-colors duration-200"
                    style={{
                      fontSize: mod.flagship ? '1.15rem' : '1rem',
                      fontWeight: 600,
                      color: mod.flagship ? '#F2EDE4' : 'rgba(242,237,228,0.85)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {mod.label}
                  </h3>
                </div>
                <ArrowUpRight
                  size={15}
                  className="opacity-0 group-hover:opacity-60 transition-opacity mt-1"
                  style={{ color: '#BF9B5C' }}
                />
              </div>

              {/* Gold rule */}
              <div
                className="h-px mb-4"
                style={{ background: mod.flagship ? 'rgba(191,155,92,0.25)' : 'rgba(255,255,255,0.05)' }}
              />

              <p style={{ fontSize: '0.85rem', color: 'rgba(242,237,228,0.4)', lineHeight: 1.7 }}>
                {mod.description}
              </p>

              {mod.flagship && (
                <div className="mt-5">
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(191,155,92,0.1)', color: '#BF9B5C', border: '1px solid rgba(191,155,92,0.2)' }}
                  >
                    Core System
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
