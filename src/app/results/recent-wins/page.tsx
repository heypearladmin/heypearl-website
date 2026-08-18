import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';
import { RECENT_WINS } from '@/data/results';

export const metadata: Metadata = {
  title: 'Recent Wins — Live Milestones from Active Engagements | HeyPearl',
  description:
    'Specific AI visibility milestones from real HeyPearl client engagements — tracked as they happen, named by hyperlocal area.',
  alternates: { canonical: 'https://heypearl.io/results/recent-wins' },
  openGraph: {
    title: 'HeyPearl Recent Wins — Live Client Milestones',
    description: 'Real wins from real engagements. Updated as they happen.',
    images: ['/images/og/og-results.webp'],
  },
};

export default function RecentWinsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[50vh] flex flex-col justify-center bg-white overflow-hidden"
        aria-label="Recent wins hero"
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
            Recent Wins.<br />
            <span style={{ color: '#C2185B', fontStyle: 'italic' }}>Observed as they happen.</span>
          </h1>
          <p className="mt-6 max-w-[36rem]" style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.8 }}>
            Specific milestones from active PearlOS engagements — AI ranking firsts, search visibility jumps, local pack appearances. Each win is tied to a real client, named by hyperlocal area.
          </p>
        </Container>
      </section>

      {/* Wins grid */}
      <section className="py-20 bg-[#F8F5F0]" aria-label="Wins feed">
        <Container size="lg">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <p style={{ fontSize: '0.78rem', color: '#64748B' }}>
              {RECENT_WINS.length} wins documented · Updated as milestones are reached
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RECENT_WINS.map((win, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="p-5 rounded-xl flex flex-col gap-3 h-full"
                  style={{ border: '1px solid #E7E3DD', background: '#FFFFFF' }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1E3A66', lineHeight: 1.3 }}>{win.handle}</div>
                      <div style={{ fontSize: '0.62rem', color: '#94A3B8', fontWeight: 500, marginTop: '0.15rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{win.segment}</div>
                    </div>
                    <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#C2185B', background: 'rgba(194,24,91,0.08)', border: '1px solid rgba(194,24,91,0.15)', borderRadius: '0.3rem', padding: '0.2rem 0.5rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
                      {win.engine}
                    </span>
                  </div>

                  {/* Win */}
                  <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.7, flex: 1 }}>{win.result}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid rgba(48,72,111,0.08)' }}>
                    <span style={{ fontSize: '0.68rem', color: '#64748B' }}>
                      Day <span style={{ fontWeight: 700, color: '#C2185B' }}>{win.dayFromActivation}</span> from activation
                    </span>
                    <span style={{ fontSize: '0.62rem', color: '#94A3B8' }}>{win.month}</span>
                  </div>
                </div>
              </Reveal>
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
            These are other businesses' wins.
            <span style={{ display: 'block', color: '#C2185B', fontStyle: 'italic', marginTop: '0.2rem' }}>Yours are next.</span>
          </h2>
          <p className="mb-10 max-w-md mx-auto" style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.8 }}>
            Book a strategy call. We'll run a live Authority Score audit on your business and show you exactly where you stand.
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
              href="/results/case-studies"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid #E7E3DD', color: '#334155' }}
            >
              View Case Studies <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
