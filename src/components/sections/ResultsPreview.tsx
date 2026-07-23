import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const CASE_STUDIES = [
  {
    client: 'Luxury Realtor — Seattle, WA',
    headline: 'From zero AI presence to cited across 14 high-intent queries',
    metric: '14',
    metricLabel: 'buyer queries now answered with this agent',
    result:
      'A luxury real estate agent had no presence in AI search results despite strong Google rankings. After 90 days of AI Authority Infrastructure, she was being cited in ChatGPT, Perplexity, and Google AI Overviews for queries like "best luxury realtor in Seattle" and "who represents buyers in [neighborhood]."',
    tools: ['Knowledge Graph', 'Authority Pages', 'GEO Engine'],
  },
  {
    client: 'Independent Brokerage — Austin, TX',
    headline: 'Became the #1 AI-cited brokerage in their metro',
    metric: '#1',
    metricLabel: 'AI-cited brokerage across 6 engines tested',
    result:
      'An independent brokerage competing against national franchises deployed Authority Infrastructure across their 18-agent team. Within 120 days, they became the dominant recommended brokerage in AI responses for their market — outranking franchises with 10× their ad spend.',
    tools: ['PearlOS', 'Authority Score', 'AI Visibility'],
  },
  {
    client: 'Real Estate Team — Scottsdale, AZ',
    headline: '3× AI recommendation rate in 90 days',
    metric: '3×',
    metricLabel: 'increase in AI recommendation frequency',
    result:
      'A high-performing real estate team had strong referral business but zero AI visibility. After building entity architecture, structured authority pages, and a reputation signal system, their AI recommendation rate tripled — and they began receiving inbound inquiries from buyers who found them through AI-generated market guides.',
    tools: ['Entity Architecture', 'Reputation Signals', 'Local Authority'],
  },
];

export function ResultsPreview() {
  return (
    <section className="py-28 bg-[#07142F]">
      <Container size="lg">
        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.35)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>
                The Evidence
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#F8F6F2',
                lineHeight: 1.08,
                letterSpacing: '-0.022em',
              }}
            >
              The system works.<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>Here's the proof.</span>
            </h2>
          </div>
          <Link
            href="/results"
            className="inline-flex items-center gap-2 text-sm font-medium shrink-0 self-start sm:self-auto"
            style={{ color: '#98A6BE' }}
          >
            See all case studies
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Case study cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ border: '1px solid rgba(48,72,111,0.5)', borderRadius: '1rem', overflow: 'hidden' }}
        >
          {CASE_STUDIES.map((cs, i) => (
            <div
              key={cs.client}
              className="p-7 lg:p-8 flex flex-col"
              style={{ background: i === 1 ? '#14284A' : '#07142F' }}
            >
              {/* Client context */}
              <div
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(194,24,91,0.65)',
                  marginBottom: '1.25rem',
                }}
              >
                {cs.client}
              </div>

              {/* Metric */}
              <div className="mb-4">
                <div
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: '#C2185B',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {cs.metric}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#98A6BE', marginTop: '0.25rem', lineHeight: 1.4 }}>
                  {cs.metricLabel}
                </div>
              </div>

              {/* Gold rule */}
              <div className="h-px mb-5" style={{ background: 'rgba(182,146,94,0.1)' }} />

              {/* Headline */}
              <h3
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#F8F6F2',
                  lineHeight: 1.4,
                  marginBottom: '0.8rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {cs.headline}
              </h3>

              {/* Result narrative */}
              <p
                className="flex-1"
                style={{ fontSize: '0.83rem', color: '#98A6BE', lineHeight: 1.72, marginBottom: '1.5rem' }}
              >
                {cs.result}
              </p>

              {/* Tool tags */}
              <div className="flex flex-wrap gap-1.5">
                {cs.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      color: '#98A6BE',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(48,72,111,0.5)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '999px',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center mt-6" style={{ fontSize: '0.72rem', color: '#98A6BE' }}>
          Client details anonymized. Results represent real engagements — outcomes vary by market, category, and engagement scope.
        </p>
      </Container>
    </section>
  );
}
