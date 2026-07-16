import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const PILLARS = [
  {
    number: '01',
    title: 'Entity Architecture',
    body: 'Structured data and knowledge graph signals that tell AI engines precisely who you are and what you do — eliminating ambiguity at the source.',
  },
  {
    number: '02',
    title: 'Authority Infrastructure',
    body: 'A system of pages, assets, and content that establishes topical depth and credibility across every AI platform that matters.',
  },
  {
    number: '03',
    title: 'Reputation Signals',
    body: 'Third-party trust signals, citation patterns, and E-E-A-T architecture that AI engines use to validate recommendation worthiness.',
  },
  {
    number: '04',
    title: 'AI Visibility Monitoring',
    body: 'Real-time tracking of how AI engines represent your brand, so you can course-correct before gaps compound into invisibility.',
  },
];

export function CategoryIntro() {
  return (
    <section className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(191,155,92,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <Container size="lg" className="relative">
        {/* Headline block */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              The Category
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
            }}
          >
            We invented a category:{' '}
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>
              AI Authority Infrastructure.
            </span>
          </h2>
          <p className="mt-5 max-w-xl" style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.75 }}>
            Not AI content generation. Not prompt engineering. Not chatbot deployment.
            The systematic engineering of why AI engines trust, cite, and recommend your business
            over every alternative in your market.
          </p>
        </div>

        {/* Four pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
          {PILLARS.map((p, i) => (
            <div
              key={p.number}
              className="p-7 lg:p-9 relative"
              style={{ background: i % 2 === 0 ? '#0E0E0E' : '#0C0C0C' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'rgba(191,155,92,0.12)',
                  lineHeight: 1,
                  marginBottom: '1rem',
                  letterSpacing: '-0.03em',
                }}
              >
                {p.number}
              </div>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#F2EDE4',
                  marginBottom: '0.6rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(242,237,228,0.45)', lineHeight: 1.7 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <p style={{ fontSize: '0.875rem', color: 'rgba(242,237,228,0.4)' }}>
            Built for the 10% of businesses willing to invest in permanent AI visibility.
          </p>
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: '#BF9B5C' }}
          >
            See the full platform
            <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
