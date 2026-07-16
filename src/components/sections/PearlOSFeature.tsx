import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const CAPABILITIES = [
  'Unified authority dashboard across all AI engines',
  'Automated entity signal distribution and monitoring',
  'P.E.A.R.L. framework execution layer',
  'Knowledge graph maintenance and gap detection',
  'Authority Score tracking and improvement workflows',
  'GEO Engine for generative search optimization',
];

export function PearlOSFeature() {
  return (
    <section className="py-28 bg-[#0C0C0C] relative overflow-hidden">
      {/* Background glow left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-60 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(191,155,92,0.06) 0%, transparent 65%)' }}
      />

      <Container size="xl" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
                The Core System
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 700,
                color: '#F2EDE4',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              PearlOS is the operating system for{' '}
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>AI authority.</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '34rem' }}>
              Every HeyPearl engagement runs through PearlOS — a structured operating layer
              that orchestrates entity signals, monitors AI recommendation patterns, and executes
              the full P.E.A.R.L. framework from a single system of record.
            </p>

            {/* Capabilities list */}
            <ul className="space-y-3 mb-8">
              {CAPABILITIES.map((cap) => (
                <li key={cap} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: '#BF9B5C' }}
                    aria-hidden
                  />
                  <span style={{ fontSize: '0.88rem', color: 'rgba(242,237,228,0.65)', lineHeight: 1.6 }}>
                    {cap}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/platform/pearlos"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: '#BF9B5C' }}
            >
              Explore PearlOS
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right — UI mockup (CSS-only, no image dependency) */}
          <div className="relative">
            {/* Outer card */}
            <div
              className="rounded-2xl p-px"
              style={{ background: 'linear-gradient(135deg, rgba(191,155,92,0.3) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)' }}
            >
              <div className="rounded-[calc(1rem-1px)] overflow-hidden" style={{ background: '#101010' }}>
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
                  <div className="ml-4 flex-1 h-4 rounded" style={{ background: 'rgba(255,255,255,0.04)' }} />
                </div>

                {/* Dashboard layout */}
                <div className="p-5">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div style={{ fontSize: '0.65rem', color: 'rgba(191,155,92,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>PearlOS</div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(242,237,228,0.8)' }}>Authority Dashboard</div>
                    </div>
                    <div className="px-2 py-0.5 rounded" style={{ background: 'rgba(191,155,92,0.1)', border: '1px solid rgba(191,155,92,0.2)' }}>
                      <span style={{ fontSize: '0.6rem', color: '#BF9B5C', fontWeight: 600 }}>● LIVE</span>
                    </div>
                  </div>

                  {/* Score cards */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {[
                      { label: 'Authority Score', val: '84', change: '+12' },
                      { label: 'AI Citations', val: '247', change: '+38' },
                      { label: 'Engine Coverage', val: '91%', change: '+6%' },
                    ].map(({ label, val, change }) => (
                      <div key={label} className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.04)' }}>
                        <div style={{ fontSize: '0.6rem', color: 'rgba(242,237,228,0.35)', marginBottom: '4px' }}>{label}</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F2EDE4', lineHeight: 1 }}>{val}</div>
                        <div style={{ fontSize: '0.6rem', color: '#BF9B5C', marginTop: '3px' }}>{change} 30d</div>
                      </div>
                    ))}
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-3">
                    {[
                      { label: 'Entity Completeness', pct: 82 },
                      { label: 'Topical Authority', pct: 74 },
                      { label: 'Citation Diversity', pct: 67 },
                      { label: 'Reputation Signals', pct: 91 },
                    ].map(({ label, pct }) => (
                      <div key={label}>
                        <div className="flex justify-between mb-1">
                          <span style={{ fontSize: '0.65rem', color: 'rgba(242,237,228,0.45)' }}>{label}</span>
                          <span style={{ fontSize: '0.65rem', color: 'rgba(242,237,228,0.3)' }}>{pct}%</span>
                        </div>
                        <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${pct}%`, background: pct > 80 ? '#BF9B5C' : 'rgba(191,155,92,0.5)' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent activity */}
                  <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(242,237,228,0.25)', marginBottom: '8px' }}>Recent activity</div>
                    {[
                      'Knowledge graph entity verified — ChatGPT',
                      'Authority page indexed — Perplexity',
                      'New citation detected — Google SGE',
                    ].map((activity) => (
                      <div key={activity} className="flex items-center gap-2 py-1.5">
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ background: '#BF9B5C' }} />
                        <span style={{ fontSize: '0.65rem', color: 'rgba(242,237,228,0.35)' }}>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div
              aria-hidden
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(191,155,92,0.08) 0%, transparent 70%)', zIndex: -1 }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
