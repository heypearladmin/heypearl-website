import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';
import { CASE_STUDIES } from '@/data/results';

export const metadata: Metadata = {
  title: 'Case Studies — Documented AI Authority Outcomes | HeyPearl',
  description:
    'In-depth case studies from real PearlOS engagements — challenge, solution, measured results, and client perspective. Client details anonymized by request.',
  alternates: { canonical: 'https://heypearl.io/results/case-studies' },
  openGraph: {
    title: 'HeyPearl Case Studies — Real Clients, Documented Outcomes',
    description: 'In-depth engagement breakdowns from real HeyPearl clients. Not testimonials — evidence.',
    images: ['/images/og/og-results.webp'],
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[50vh] flex flex-col justify-center bg-white overflow-hidden"
        aria-label="Case studies hero"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(194,24,91,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(194,24,91,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-16">
          <Link
            href="/results"
            className="inline-flex items-center gap-1.5 mb-8 text-xs font-medium text-[#64748B] hover:text-[#C2185B] transition-colors"
          >
            <ArrowLeft size={12} />
            Back to Results
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.5)' }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2185B' }}>
              The Proof Center
            </span>
          </div>
          <h1
            className="max-w-3xl"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 700,
              color: '#1E3A66',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Real clients.<br />
            <span style={{ color: '#C2185B', fontStyle: 'italic' }}>Documented outcomes.</span>
          </h1>
          <p className="mt-6 max-w-[36rem]" style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.8 }}>
            In-depth breakdowns of real PearlOS engagements — the challenge, the solution, and the measured results. Client details are anonymized by request. Market context and numbers are real.
          </p>
        </Container>
      </section>

      {/* Case studies */}
      <section className="py-20 bg-[#F8F5F0]" aria-label="Case studies list">
        <Container size="lg">
          <div className="space-y-8">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid #E7E3DD', background: '#F8F5F0' }}
              >
                {/* Card header */}
                <div
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-8 py-5"
                  style={{ borderBottom: '1px solid #E7E3DD', background: 'rgba(194,24,91,0.04)' }}
                >
                  <div className="flex items-center gap-4 flex-wrap">
                    <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(182,146,94,0.6)' }}>{cs.label}</span>
                    <span aria-hidden style={{ color: '#CBD5E1' }}>·</span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1E3A66' }}>{cs.handle}</span>
                    <span aria-hidden style={{ color: '#CBD5E1' }}>·</span>
                    <span style={{ fontSize: '0.62rem', color: '#64748B', fontWeight: 500 }}>{cs.city}</span>
                    <span aria-hidden style={{ color: '#CBD5E1' }}>·</span>
                    <span style={{ fontSize: '0.62rem', color: 'rgba(182,146,94,0.6)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{cs.segment}</span>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 500 }}>
                      Timeline: <span style={{ color: '#C2185B', fontWeight: 700 }}>{cs.timeline}</span>
                    </span>
                    <span style={{ fontSize: '0.62rem', color: '#94A3B8' }}>Updated {cs.updatedAt}</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  {/* Left: narrative */}
                  <div className="p-8 space-y-6" style={{ background: '#F8F5F0' }}>
                    <div>
                      <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '0.5rem' }}>The Challenge</div>
                      <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.75 }}>{cs.challenge}</p>
                    </div>
                    <div className="h-px" style={{ background: 'rgba(48,72,111,0.35)' }} />
                    <div>
                      <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '0.5rem' }}>The Solution</div>
                      <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.75 }}>{cs.solution}</p>
                    </div>
                    <div className="h-px" style={{ background: 'rgba(48,72,111,0.35)' }} />
                    <div>
                      <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '0.5rem' }}>Modules Used</div>
                      <div className="flex flex-wrap gap-2">
                        {cs.modules.map((m) => (
                          <span key={m} style={{ fontSize: '0.68rem', fontWeight: 600, color: '#C2185B', background: 'rgba(194,24,91,0.08)', border: '1px solid rgba(182,146,94,0.2)', borderRadius: '0.375rem', padding: '0.2rem 0.6rem' }}>{m}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: results */}
                  <div className="p-8 flex flex-col gap-6" style={{ background: '#FFFFFF' }}>
                    <div>
                      <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(182,146,94,0.55)', marginBottom: '1rem' }}>Measured Results</div>
                      <div className="space-y-4">
                        {cs.results.map((r, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#C2185B', lineHeight: 1, flexShrink: 0, width: '5rem' }}>{r.metric}</div>
                            <div style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.65, paddingTop: '0.25rem' }}>{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="h-px mb-5" style={{ background: 'rgba(48,72,111,0.35)' }} />
                      <blockquote>
                        <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: '#334155', lineHeight: 1.7, marginBottom: '0.5rem' }}>"{cs.quote}"</p>
                        <footer style={{ fontSize: '0.68rem', color: '#64748B' }}>— {cs.handle}, {cs.city}</footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <Container size="md" className="text-center">
          <h2
            className="mb-5 max-w-xl mx-auto"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              color: '#1E3A66',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            These are other businesses' results.
            <span style={{ display: 'block', color: '#C2185B', fontStyle: 'italic', marginTop: '0.2rem' }}>Yours are next.</span>
          </h2>
          <p className="mb-10 max-w-md mx-auto" style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.8 }}>
            Book a strategy call. We'll run a live Authority Score audit and show you exactly where you stand — before you commit to anything.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={site.strategyCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-9 py-4 text-sm font-semibold bg-[#C2185B] hover:bg-[#D62F73] text-white transition-colors duration-200"
            >
              Book a Strategy Call <ArrowRight size={14} />
            </a>
            <Link
              href="/results/recent-wins"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid #E7E3DD', color: '#334155' }}
            >
              View Recent Wins <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
