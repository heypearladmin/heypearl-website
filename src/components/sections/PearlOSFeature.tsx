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
    <section className="py-28 bg-white relative overflow-hidden">
      <Container size="xl" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block h-px w-8" style={{ background: '#E7E3DD' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>
                The Core System
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 700,
                color: '#1E3A66',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              One operating system.<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>Every signal. Every engine.</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '34rem' }}>
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
                  <span style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.6 }}>
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

          {/* Right — UI mockup */}
          <div className="relative">
            {/* Outer card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E7E3DD',
                boxShadow: '0 1px 4px rgba(30,58,102,0.06), 0 24px 64px rgba(30,58,102,0.12)',
              }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid #ECE8E2', background: '#FDFBF8' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#E7E3DD' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#E7E3DD' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#E7E3DD' }} />
                <div className="ml-4 flex-1 h-4 rounded-md" style={{ background: '#F0EDE8' }} />
              </div>

              {/* Dashboard layout */}
              <div className="p-5">
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div style={{ fontSize: '0.65rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>PearlOS</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1E3A66' }}>Authority Dashboard</div>
                  </div>
                  <div className="px-2 py-0.5 rounded-md" style={{ background: 'rgba(194,24,91,0.08)', border: '1px solid rgba(194,24,91,0.15)' }}>
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
                    <div key={label} className="rounded-xl p-3" style={{ background: '#F8F5F0', border: '1px solid #E7E3DD' }}>
                      <div style={{ fontSize: '0.6rem', color: '#94A3B8', marginBottom: '4px' }}>{label}</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1E3A66', lineHeight: 1 }}>{val}</div>
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
                        <span style={{ fontSize: '0.65rem', color: '#64748B' }}>{label}</span>
                        <span style={{ fontSize: '0.65rem', color: '#64748B' }}>{pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: '#ECE8E2' }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${pct}%`, background: pct > 80 ? '#C2185B' : 'rgba(194,24,91,0.45)' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent activity */}
                <div className="mt-5 pt-4" style={{ borderTop: '1px solid #ECE8E2' }}>
                  <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8', marginBottom: '8px' }}>Recent activity</div>
                  {[
                    'Knowledge graph entity verified — ChatGPT',
                    'Authority page indexed — Perplexity',
                    'New citation detected — Google SGE',
                  ].map((activity) => (
                    <div key={activity} className="flex items-center gap-2 py-1.5">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#C2185B' }} />
                      <span style={{ fontSize: '0.65rem', color: '#64748B' }}>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div
              aria-hidden
              className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full -z-10"
              style={{ background: 'radial-gradient(ellipse, rgba(194,24,91,0.04) 0%, transparent 70%)' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
