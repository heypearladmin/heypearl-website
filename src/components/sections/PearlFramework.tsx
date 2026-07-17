import { Container } from '@/components/ui/Container';

const STEPS = [
  {
    letter: 'P',
    title: 'Process',
    tagline: 'Structured sequence, not tactics.',
    description:
      'A systematic 90-day authority build that establishes AI visibility from day one. Every engagement follows the same disciplined sequence so nothing is left to chance.',
  },
  {
    letter: 'E',
    title: 'Entity',
    tagline: 'Tell AI exactly who you are.',
    description:
      'Knowledge graph architecture that registers your business as a verified, unambiguous entity across ChatGPT, Perplexity, Gemini, and every major AI engine.',
  },
  {
    letter: 'A',
    title: 'Authority',
    tagline: 'Depth that signals expertise.',
    description:
      'Topical content systems, structured data, and E-E-A-T architecture that make your expertise undeniable to AI systems — and citation-worthy at scale.',
  },
  {
    letter: 'R',
    title: 'Reputation',
    tagline: 'Third-party proof AI can verify.',
    description:
      'Citation patterns, review architecture, and trust signal systems that give AI engines the external validation they need to confidently recommend your business.',
  },
  {
    letter: 'L',
    title: 'Leverage',
    tagline: 'Returns that grow over time.',
    description:
      'Distribution and amplification systems that make your signals multiply across channels — so visibility grows every month without proportional reinvestment.',
  },
];

export function PearlFramework() {
  return (
    <section className="py-32 bg-[#090909] relative overflow-hidden">
      {/* Horizontal gold centerline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(191,155,92,0.12) 30%, rgba(191,155,92,0.12) 70%, transparent 100%)' }}
      />

      <Container size="xl">
        {/* Section header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block h-px w-10" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
            <span style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              HeyPearl's Proprietary Framework
            </span>
            <span className="inline-block h-px w-10" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 700,
              color: '#F2EDE4',
              lineHeight: 1.06,
              letterSpacing: '-0.025em',
            }}
          >
            The P.E.A.R.L. Framework
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              fontStyle: 'italic',
              color: '#BF9B5C',
              marginTop: '0.6rem',
              letterSpacing: '-0.01em',
            }}
          >
            Five layers. One complete system. Zero guesswork.
          </p>
          <p className="mt-5 max-w-xl mx-auto" style={{ fontSize: '0.975rem', color: 'rgba(242,237,228,0.48)', lineHeight: 1.75 }}>
            Every HeyPearl engagement executes this systematic sequence. Each layer is a prerequisite
            for the next — building visibility that grows month after month without starting over.
          </p>
        </div>

        {/* Five-pillar grid */}
        <div
          className="flex flex-col lg:flex-row gap-px"
          style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', overflow: 'hidden' }}
        >
          {STEPS.map((step, i) => (
            <div
              key={step.letter}
              className="flex-1 p-7 lg:p-8 relative"
              style={{ background: i % 2 === 0 ? '#0F0F0F' : '#0C0C0C' }}
            >
              {/* Ghost letter — background watermark */}
              <div
                aria-hidden
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '7rem',
                  fontWeight: 700,
                  color: 'rgba(191,155,92,0.07)',
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
                  background: 'rgba(191,155,92,0.1)',
                  border: '1px solid rgba(191,155,92,0.25)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#BF9B5C',
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
                  color: '#F2EDE4',
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
                  color: 'rgba(191,155,92,0.7)',
                  marginBottom: '0.9rem',
                  lineHeight: 1.4,
                }}
              >
                {step.tagline}
              </p>

              {/* Gold micro-rule */}
              <div className="h-px mb-4" style={{ background: 'rgba(191,155,92,0.1)' }} />

              {/* Description */}
              <p style={{ fontSize: '0.875rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.75 }}>
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
              color: 'rgba(242,237,228,0.38)',
              letterSpacing: '0.01em',
            }}
          >
            Executed over{' '}
            <span style={{ color: '#BF9B5C', fontWeight: 600 }}>90 days.</span>{' '}
            Built to grow{' '}
            <span style={{ color: 'rgba(242,237,228,0.65)', fontWeight: 500 }}>indefinitely.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
