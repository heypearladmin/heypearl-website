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
    <section className="py-28 bg-[#07142F] relative overflow-hidden">
      {/* Background glow left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-60 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(194,24,91,0.05) 0%, transparent 65%)' }}
      />

      <Container size="xl" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.35)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>
                The Core System
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 700,
                color: '#F8F6F2',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              One operating system.<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>Every signal. Every engine.</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#C9D3E3', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '34rem' }}>
              Every HeyPearl engagement runs through PearlOS — a structured operating layer
              that orchestrates entity signals, monitors recommendation patterns across six major engines, and executes
              the P.E.A.R.L. framework from a single system of record.
            </p>

            {/* Capabilities list */}
            <ul className="space-y-3 mb-8">
              {CAPABILITIES.map((cap) => (
                <li key={cap} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: '#C2185B' }}
                    aria-hidden
                  />
                  <span style={{ fontSize: '0.88rem', color: '#C9D3E3', lineHeight: 1.6 }}>
                    {cap}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/platform/pearlos"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: '#C2185B' }}
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
              style={{ background: 'linear-gradient(135deg, rgba(194,24,91,0.25) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)' }}
            >
              <div className="rounded-[calc(1rem-1px)] overflow-hidden" style={{ background: '#091828' }}>
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(48,72,111,0.4)' }}>
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
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#C9D3E3' }}>Authority Dashboard</div>
                    </div>
                    <div className="px-2 py-0.5 rounded" style={{ background: 'rgba(194,24,91,0.1)', border: '1px solid rgba(194,24,91,0.2)' }}>
                      <span style={{ fontSize: '0.6rem', color: '#C2185B', fontWeight: 600 }}>● LIVE</span>
                    </div>
                  </div>

                  {/* Score cards */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {[
                      { label: 'Authority Score', val: '84', change: '+12' },
                      { label: 'AI Citations', val: '247', change: '+38' },
                      { label: 'Engine Coverage', val: '91%', change: '+6%' },
                    ].map(({ label, val, change }) => (
                      <div key={label} className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(48,72,111,0.35)' }}>
                        <div style={{ fontSize: '0.6rem', color: '#98A6BE', marginBottom: '4px' }}>{label}</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F8F6F2', lineHeight: 1 }}>{val}</div>
                        <div style={{ fontSize: '0.6rem', color: '#C2185B', marginTop: '3px' }}>{change} 30d</div>
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
                          <span style={{ fontSize: '0.65rem', color: '#98A6BE' }}>{label}</span>
                          <span style={{ fontSize: '0.65rem', color: '#98A6BE' }}>{pct}%</span>
                        </div>
                        <div className="h-1 rounded-full" style={{ background: 'rgba(48,72,111,0.4)' }}>
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${pct}%`, background: pct > 80 ? '#C2185B' : 'rgba(194,24,91,0.5)' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent activity */}
                  <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(48,72,111,0.4)' }}>
                    <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#98A6BE', marginBottom: '8px' }}>Recent activity</div>
                    {[
                      'Knowledge graph entity verified — ChatGPT',
                      'Authority page indexed — Perplexity',
                      'New citation detected — Google SGE',
                    ].map((activity) => (
                      <div key={activity} className="flex items-center gap-2 py-1.5">
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ background: '#C2185B' }} />
                        <span style={{ fontSize: '0.65rem', color: '#98A6BE' }}>{activity}</span>
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
              style={{ background: 'radial-gradient(ellipse, rgba(194,24,91,0.05) 0%, transparent 70%)', zIndex: -1 }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
