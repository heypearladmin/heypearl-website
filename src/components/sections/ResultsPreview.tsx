import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const CASE_STUDIES = [
  {
    client: 'Independent Agent — Seattle, WA',
    headline: 'From an 18.5 average search position to 66.7% local pack visibility',
    metric: '66.7%',
    metricLabel: 'local pack visibility across the Seattle grid',
    result:
      'A luxury real estate agent had an active brand and strong reputation but zero measured local pack presence. After 6 months of Authority Infrastructure — a new authority domain, Knowledge Graph work, and GEO content — she appeared in 26 of 39 tracked map points and grew Google Search impressions 3.9x, from 3,389 to 13,300 a month.',
    tools: ['Knowledge Graph', 'Authority Score', 'GEO Engine'],
  },
  {
    client: 'Independent Agent — New Braunfels, TX',
    headline: 'From near-zero digital presence to the #1 AI-recommended source',
    metric: '#1',
    metricLabel: 'AI-recommended source for 3 of 5 tracked local topics',
    result:
      'An agent came to HeyPearl with no website sessions, no search impressions, and no reviews. HeyPearl built the entity architecture, hyperlocal content, and GEO strategy from scratch — resolving 406 technical issues and expanding the site from 23 to 56 pages along the way.',
    tools: ['Entity Architecture', 'Authority Pages', 'GEO Engine'],
  },
  {
    client: 'Real Estate Team — Leavenworth, KS',
    headline: 'Ranked #1 across all 5 tracked AI search topics',
    metric: '#1',
    metricLabel: 'AI-recommended source across every tracked topic by month 8',
    result:
      'A veteran-owned real estate team had deep community roots but zero digital authority. After a full authority build — entity architecture, AI-optimized content, and a concentrated review campaign that drove 101+ five-star reviews in under 60 days — they became the recommended authority across every tracked AI platform.',
    tools: ['Entity Architecture', 'Reputation Signals', 'AI Visibility'],
  },
];

export function ResultsPreview() {
  return (
    <section className="py-28 bg-white">
      <Container size="lg">
        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: '#E7E3DD' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>
                The Evidence
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#1E3A66',
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
            style={{ color: '#94A3B8' }}
          >
            See all case studies
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CASE_STUDIES.map((cs, i) => (
            <div
              key={cs.client}
              className="p-7 lg:p-8 rounded-2xl flex flex-col"
              style={{
                background: i === 1 ? '#F8F5F0' : '#FFFFFF',
                border: '1px solid #E7E3DD',
                boxShadow: '0 1px 4px rgba(30,58,102,0.06), 0 8px 24px rgba(30,58,102,0.06)',
              }}
            >
              {/* Client context */}
              <div
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(194,24,91,0.6)',
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
                    color: '#1E3A66',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {cs.metric}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '0.25rem', lineHeight: 1.4 }}>
                  {cs.metricLabel}
                </div>
              </div>

              {/* Rule */}
              <div className="h-px mb-5" style={{ background: '#ECE8E2' }} />

              {/* Headline */}
              <h3
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#1E3A66',
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
                style={{ fontSize: '0.83rem', color: '#64748B', lineHeight: 1.72, marginBottom: '1.5rem' }}
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
                      color: '#94A3B8',
                      background: '#F8F5F0',
                      border: '1px solid #E7E3DD',
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
        <p className="text-center mt-8" style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
          Client details anonymized. Results represent real engagements — outcomes vary by market, category, and engagement scope.
        </p>
      </Container>
    </section>
  );
}
