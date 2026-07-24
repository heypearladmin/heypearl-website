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
    body: 'Real-time tracking of how AI engines represent your brand, so you can course-correct before gaps quietly erode your visibility.',
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
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>
              The Category
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
            }}
          >
            We invented a category:{' '}
            <span style={{ color: '#C2185B', fontStyle: 'italic' }}>
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
                boxShadow: '0 1px 4px rgba(30,58,102,0.06), 0 8px 24px rgba(30,58,102,0.05)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '2.25rem',
                  fontWeight: 700,
                  color: '#ECE8E2',
                  lineHeight: 1,
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.03em',
                }}
              >
                {p.number}
              </div>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1E3A66',
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
            style={{ color: '#C2185B' }}
          >
            See the full platform
            <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
