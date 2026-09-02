import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const PILLARS = [
  {
    number: '01',
    title: 'Entity Architecture',
    body: 'Structured data and knowledge graph signals that tell AI engines precisely who you are and what you do — eliminating ambiguity at the source.',
    accent: '#2563FF',
  },
  {
    number: '02',
    title: 'Authority Infrastructure',
    body: 'A system of pages, assets, and content that establishes topical depth and credibility across every AI platform that matters.',
    accent: '#FF6A00',
  },
  {
    number: '03',
    title: 'Reputation Signals',
    body: 'Third-party trust signals, citation patterns, and E-E-A-T architecture that AI engines use to validate recommendation worthiness.',
    accent: '#FFC107',
  },
  {
    number: '04',
    title: 'AI Visibility Monitoring',
    body: 'Real-time tracking of how AI engines represent your brand, so you can course-correct before gaps quietly erode your visibility.',
    accent: '#22C55E',
  },
];

export function CategoryIntro() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: '#F8F5F0' }}>
      <Container size="lg" className="relative">
        {/* Headline block */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-px w-8" style={{ background: '#E7E3DD' }} aria-hidden />
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6A00' }}>
              The Category
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif',
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: 700,
              color: '#0A1224',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            We invented a category:{' '}
            <span style={{ color: '#FF6A00', fontStyle: 'italic' }}>
              AI Authority Infrastructure.
            </span>
          </h2>
          <p className="mt-5 max-w-xl" style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.75 }}>
            Not AI content generation. Not prompt engineering. Not chatbot deployment.
            The systematic engineering of why AI engines trust, cite, and recommend your business
            over every alternative in your market.
          </p>
        </div>

        {/* Four pillars — white cards on cream */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PILLARS.map((p) => (
            <div
              key={p.number}
              className="p-7 lg:p-9 rounded-2xl"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E7E3DD',
                borderTop: `3px solid ${p.accent}`,
                boxShadow: '0 1px 4px rgba(10,18,36,0.06), 0 8px 24px rgba(10,18,36,0.05)',
              }}
            >
              <div className="flex items-center justify-between" style={{ marginBottom: '1.25rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif',
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    color: '#ECE8E2',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {p.number}
                </div>
                <div className="w-2 h-2 rounded-full" style={{ background: p.accent }} aria-hidden />
              </div>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#0A1224',
                  marginBottom: '0.6rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.72 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <p style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
            Built for operators willing to invest in what lasts.
          </p>
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: '#FF6A00' }}
          >
            See the full platform
            <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
