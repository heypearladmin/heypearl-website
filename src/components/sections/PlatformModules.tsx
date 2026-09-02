import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const MODULES = [
  {
    label: 'Authority Pages',
    href: '/platform/authority-pages',
    tagline: 'AI-ready architecture',
    description: 'Page infrastructure engineered for AI citation and recommendation — structured so every AI engine understands exactly who you are and what you offer.',
  },
  {
    label: 'Authority Score',
    href: '/platform/authority-score',
    tagline: 'Measurement & visibility',
    description: 'A proprietary scoring system that quantifies your AI visibility across all major engines and surfaces the exact gaps costing you recommendations.',
  },
  {
    label: 'Knowledge Graph',
    href: '/platform/knowledge-graph',
    tagline: 'Entity architecture',
    description: 'Structured entity signals that establish your business as an unambiguous, verified entity — so AI engines can confidently cite and recommend you.',
  },
  {
    label: 'AI Visibility',
    href: '/platform/ai-visibility',
    tagline: 'Real-time monitoring',
    description: 'Continuous tracking of how ChatGPT, Perplexity, Gemini, and Google AI Overviews represent your business — with alerts when the picture changes.',
  },
  {
    label: 'GEO Engine',
    href: '/platform/geo-engine',
    tagline: 'Generative Engine Optimization',
    description: 'Purpose-built GEO tools designed for the era when AI is the primary discovery channel for high-intent buyers in your market.',
  },
];

export function PlatformModules() {
  return (
    <section className="py-28" style={{ background: '#F8F5F0' }}>
      <Container size="lg">

        {/* Section header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: '#E7E3DD' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6A00' }}>
                Platform Modules
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
              Five purpose-built modules,<br />
              <span style={{ color: '#FF6A00', fontStyle: 'italic' }}>all powered by PearlOS.</span>
            </h2>
            <p className="mt-4" style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.7 }}>
              PearlOS orchestrates each module as part of one integrated system — no standalone tactics, no disconnected tools.
            </p>
          </div>
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 text-sm font-medium shrink-0 self-start sm:self-auto"
            style={{ color: '#94A3B8' }}
          >
            Full platform overview
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODULES.map((mod) => (
            <Link
              key={mod.href}
              href={mod.href}
              className="group block p-6 lg:p-8 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E7E3DD',
                boxShadow: '0 1px 4px rgba(10,18,36,0.06), 0 8px 24px rgba(10,18,36,0.06)',
              }}
            >
              {/* Tagline */}
              <div
                style={{
                  fontSize: '0.67rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,106,0,0.6)',
                  marginBottom: '0.4rem',
                }}
              >
                {mod.tagline}
              </div>

              {/* Module name + arrow */}
              <div className="flex items-start justify-between mb-4">
                <h3
                  className="group-hover:text-[#FF6A00] transition-colors duration-200"
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#0A1224',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {mod.label}
                </h3>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-60 transition-opacity mt-0.5 shrink-0"
                  style={{ color: '#FF6A00' }}
                />
              </div>

              {/* Rule */}
              <div className="h-px mb-4" style={{ background: '#ECE8E2' }} />

              <p style={{ fontSize: '0.855rem', color: '#64748B', lineHeight: 1.72 }}>
                {mod.description}
              </p>
            </Link>
          ))}

          {/* Sixth cell — CTA */}
          <div
            className="p-6 lg:p-8 rounded-2xl flex flex-col justify-center"
            style={{
              background: '#0A1224',
              border: '1px solid #0A1224',
            }}
          >
            <p style={{ fontSize: '0.85rem', color: 'rgba(248,245,240,0.65)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Every module runs through PearlOS — the operating layer that turns individual signals into compounding AI authority.
            </p>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: '#FF6A00' }}
            >
              Explore the full platform
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
