import { Container } from '@/components/ui/Container';

const STEPS = [
  {
    letter: 'P',
    title: 'Process',
    description: 'A structured 90-day authority build sequence that creates systematic AI visibility from day one — not ad hoc tactics.',
  },
  {
    letter: 'E',
    title: 'Entity',
    description: 'Knowledge graph architecture that establishes your business as a verified, trusted entity across every AI engine.',
  },
  {
    letter: 'A',
    title: 'Authority',
    description: 'Deep topical content systems, structured data, and E-E-A-T signals that make your expertise undeniable to AI systems.',
  },
  {
    letter: 'R',
    title: 'Reputation',
    description: 'Third-party validation, citation patterns, and trust signal architecture that AI engines use to confirm recommendation fitness.',
  },
  {
    letter: 'L',
    title: 'Leverage',
    description: 'Distribution and amplification systems that compound your authority signals across channels and compound over time.',
  },
];

export function PearlFramework() {
  return (
    <section className="py-28 bg-[#090909] relative overflow-hidden">
      {/* Gold center glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(191,155,92,0.15), transparent)' }}
      />

      <Container size="lg">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              The Framework
            </span>
            <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
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
            The P.E.A.R.L. Framework —<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>five layers, one complete system.</span>
          </h2>
          <p className="mt-5" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.45)', lineHeight: 1.7 }}>
            Every HeyPearl engagement follows this systematic sequence. Each layer builds on the last
            to create AI authority that compounds.
          </p>
        </div>

        {/* Five-pillar horizontal layout (stacks vertically on mobile) */}
        <div className="flex flex-col lg:flex-row gap-px" style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
          {STEPS.map((step, i) => (
            <div
              key={step.letter}
              className="flex-1 p-6 lg:p-7 relative"
              style={{ background: i % 2 === 0 ? '#0E0E0E' : '#0C0C0C' }}
            >
              {/* Large letter background */}
              <div
                aria-hidden
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '5rem',
                  fontWeight: 700,
                  color: 'rgba(191,155,92,0.06)',
                  lineHeight: 1,
                  position: 'absolute',
                  top: '0.75rem',
                  right: '1rem',
                  userSelect: 'none',
                }}
              >
                {step.letter}
              </div>

              {/* Gold letter badge */}
              <div
                className="mb-4 w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(191,155,92,0.1)', border: '1px solid rgba(191,155,92,0.2)' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#BF9B5C',
                  }}
                >
                  {step.letter}
                </span>
              </div>

              <h3
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#F2EDE4',
                  marginBottom: '0.6rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'rgba(242,237,228,0.4)', lineHeight: 1.7 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-8" style={{ fontSize: '0.8rem', color: 'rgba(242,237,228,0.25)' }}>
          Executed in 90 days. Built to compound indefinitely.
        </p>
      </Container>
    </section>
  );
}
