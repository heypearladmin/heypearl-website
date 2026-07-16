import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const CASE_STUDIES = [
  {
    category: 'Real Estate',
    headline: 'From invisible to cited in 62 AI answers',
    metric: '62',
    metricLabel: 'AI citations in 90 days',
    result: 'A Texas real estate team went from zero AI visibility to being cited in ChatGPT, Perplexity, and Google SGE for 14 high-intent buying queries in their market.',
    tags: ['Knowledge Graph', 'Authority Pages', 'GEO Engine'],
  },
  {
    category: 'Service Business',
    headline: '3× increase in AI recommendation frequency',
    metric: '3×',
    metricLabel: 'AI recommendation rate',
    result: 'A regional HVAC company built entity authority that made them the default AI recommendation for emergency HVAC service across a 60-mile radius.',
    tags: ['PearlOS', 'Entity Architecture', 'Local Authority'],
  },
  {
    category: 'Brokerage',
    headline: 'First brand cited in 8 of 10 AI engine responses',
    metric: '#1',
    metricLabel: 'AI-cited brokerage in market',
    result: 'A brokerage network deployed Authority Infrastructure across 24 agents, becoming the dominant brand in AI-generated real estate recommendations for their metro.',
    tags: ['Authority Score', 'AI Visibility', 'Team Deployment'],
  },
];

export function ResultsPreview() {
  return (
    <section className="py-28 bg-[#0A0A0A]">
      <Container size="lg">
        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
                The Evidence
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
              The system works.<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>Here's the proof.</span>
            </h2>
          </div>
          <Link
            href="/results"
            className="inline-flex items-center gap-2 text-sm font-medium shrink-0 self-start sm:self-auto"
            style={{ color: 'rgba(242,237,228,0.45)' }}
          >
            All case studies
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
          {CASE_STUDIES.map((cs, i) => (
            <div
              key={cs.headline}
              className="p-7 lg:p-8 flex flex-col"
              style={{ background: i === 1 ? '#101010' : '#0D0D0D' }}
            >
              {/* Category */}
              <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(191,155,92,0.6)', marginBottom: '1.25rem' }}>
                {cs.category}
              </div>

              {/* Metric */}
              <div className="mb-4">
                <div
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '2.8rem',
                    fontWeight: 700,
                    color: '#BF9B5C',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {cs.metric}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(242,237,228,0.35)', marginTop: '0.2rem' }}>
                  {cs.metricLabel}
                </div>
              </div>

              {/* Gold rule */}
              <div className="h-px mb-5" style={{ background: 'rgba(191,155,92,0.12)' }} />

              {/* Headline */}
              <h3
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#F2EDE4',
                  lineHeight: 1.4,
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {cs.headline}
              </h3>

              {/* Result */}
              <p className="flex-1" style={{ fontSize: '0.83rem', color: 'rgba(242,237,228,0.4)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {cs.result}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      color: 'rgba(242,237,228,0.3)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center mt-6" style={{ fontSize: '0.72rem', color: 'rgba(242,237,228,0.2)' }}>
          Results represent real client outcomes. Individual results vary based on market, category, and engagement scope.
        </p>
      </Container>
    </section>
  );
}
