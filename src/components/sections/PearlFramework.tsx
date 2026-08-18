import { Container } from '@/components/ui/Container';

const STEPS = [
  {
    letter: 'P',
    title: 'Process',
    tagline: 'Structured sequence, not tactics.',
    description:
      'A systematic 90-day authority build that establishes repeatable systems from day one. Every engagement follows the same disciplined sequence so nothing is left to chance.',
  },
  {
    letter: 'E',
    title: 'Efficiency',
    tagline: 'Remove the friction.',
    description:
      'We strip the unnecessary effort out of the systems that matter most — so your team spends its time on the work that actually moves authority forward.',
  },
  {
    letter: 'A',
    title: 'Automation',
    tagline: 'Let the software do the work.',
    description:
      'PearlOS handles the predictable execution — entity signals, content publishing, monitoring — so authority compounds without depending on manual follow-through.',
  },
  {
    letter: 'R',
    title: 'Replication',
    tagline: 'Reproduce what works.',
    description:
      'Once a system proves itself, we reproduce it — across clients, markets, teams, and workflows — so results are systematic, not a one-time win.',
  },
  {
    letter: 'L',
    title: 'Leverage',
    tagline: 'Returns that grow over time.',
    description:
      'Replicated systems compound into greater output and impact without proportionally more effort — so visibility grows every month without proportional reinvestment.',
  },
];

export function PearlFramework() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <Container size="xl">
        {/* Section header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block h-px w-10" style={{ background: '#E7E3DD' }} aria-hidden />
            <span style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2185B' }}>
              HeyPearl's Proprietary Framework
            </span>
            <span className="inline-block h-px w-10" style={{ background: '#E7E3DD' }} aria-hidden />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 700,
              color: '#1E3A66',
              lineHeight: 1.06,
              letterSpacing: '-0.025em',
            }}
          >
            The P.E.A.R.L. Framework
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              fontStyle: 'italic',
              color: '#C2185B',
              marginTop: '0.6rem',
              letterSpacing: '-0.01em',
            }}
          >
            Five layers. One complete system. Zero guesswork.
          </p>
          <p className="mt-5 max-w-xl mx-auto" style={{ fontSize: '0.975rem', color: '#64748B', lineHeight: 1.75 }}>
            Every HeyPearl engagement executes this systematic sequence. Each layer is a prerequisite
            for the next — building visibility that grows month after month without starting over.
          </p>
        </div>

        {/* Five-pillar grid */}
        <div className="flex flex-col lg:flex-row gap-4">
          {STEPS.map((step) => (
            <div
              key={step.letter}
              className="flex-1 p-7 lg:p-8 rounded-2xl relative"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E7E3DD',
                boxShadow: '0 1px 4px rgba(30,58,102,0.06), 0 8px 24px rgba(30,58,102,0.06)',
              }}
            >
              {/* Ghost letter watermark */}
              <div
                aria-hidden
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '6rem',
                  fontWeight: 700,
                  color: 'rgba(30,58,102,0.04)',
                  lineHeight: 1,
                  position: 'absolute',
                  top: '0.5rem',
                  right: '0.75rem',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                {step.letter}
              </div>

              {/* Letter badge */}
              <div
                className="mb-5 flex items-center justify-center rounded-xl"
                style={{
                  width: '2.75rem',
                  height: '2.75rem',
                  background: 'rgba(194,24,91,0.06)',
                  border: '1px solid rgba(194,24,91,0.15)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#C2185B',
                    lineHeight: 1,
                  }}
                >
                  {step.letter}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#1E3A66',
                  letterSpacing: '-0.015em',
                  marginBottom: '0.3rem',
                }}
              >
                {step.title}
              </h3>

              {/* Tagline */}
              <p
                style={{
                  fontSize: '0.75rem',
                  fontStyle: 'italic',
                  color: 'rgba(194,24,91,0.65)',
                  marginBottom: '0.9rem',
                  lineHeight: 1.4,
                }}
              >
                {step.tagline}
              </p>

              {/* Divider */}
              <div className="h-px mb-4" style={{ background: '#ECE8E2' }} />

              {/* Description */}
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.75 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-12 text-center">
          <p
            style={{
              fontSize: '0.95rem',
              color: '#94A3B8',
              letterSpacing: '0.01em',
            }}
          >
            Executed over{' '}
            <span style={{ color: '#C2185B', fontWeight: 600 }}>90 days.</span>{' '}
            Built to grow{' '}
            <span style={{ color: '#1E3A66', fontWeight: 500 }}>indefinitely.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
