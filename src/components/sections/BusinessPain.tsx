import { Container } from '@/components/ui/Container';

const CONSEQUENCES = [
  {
    trigger: 'The shift already happened.',
    detail:
      'AI engines — ChatGPT, Perplexity, Google AI Overviews, Gemini — are already recommending businesses in your market. Most business owners have no idea who is being cited or why.',
  },
  {
    trigger: 'The businesses winning AI recommendations are investing now.',
    detail:
      'Visibility infrastructure takes 60–90 days to build measurable momentum. The competitors getting cited today started months ago. The window is open — but it closes.',
  },
  {
    trigger: 'Visibility loss in AI search is silent.',
    detail:
      'There are no rankings to check, no traffic drop to notice. You won\'t know AI has stopped recommending you until a competitor already owns your category in every AI engine that matters.',
  },
];

export function BusinessPain() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <Container size="lg" className="relative">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="inline-block h-px w-8" style={{ background: '#E7E3DD' }} aria-hidden />
          <span
            style={{
              fontSize: '0.67rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#C2185B',
            }}
          >
            The Visibility Gap
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — the provocation */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
                fontWeight: 700,
                color: '#1E3A66',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
              }}
            >
              Right now, someone in your market is asking AI{' '}
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>
                who to hire.
              </span>
            </h2>

            <p
              className="mt-6"
              style={{
                fontSize: '1.1rem',
                fontWeight: 500,
                color: '#64748B',
                lineHeight: 1.65,
              }}
            >
              Are you in that answer?
            </p>

            {/* Divider */}
            <div
              className="mt-8 mb-8 h-px"
              style={{ background: '#ECE8E2' }}
            />

            {/* Bridge statement */}
            <p
              style={{
                fontSize: '1rem',
                color: '#334155',
                lineHeight: 1.75,
              }}
            >
              This isn't an SEO problem. It isn't a content problem.
              It's a{' '}
              <span style={{ color: '#1E3A66', fontWeight: 600 }}>
                visibility infrastructure problem
              </span>{' '}
              — and most businesses don't have a systematic solution for it yet.
            </p>
          </div>

          {/* Right — three consequences */}
          <div className="space-y-0">
            {CONSEQUENCES.map((c, i) => (
              <div
                key={c.trigger}
                className="py-6"
                style={{
                  borderBottom:
                    i < CONSEQUENCES.length - 1
                      ? '1px solid #ECE8E2'
                      : 'none',
                }}
              >
                <div className="flex gap-4">
                  <span
                    style={{
                      color: '#C2185B',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      marginTop: '0.1rem',
                      flexShrink: 0,
                      opacity: 0.6,
                    }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#1E3A66',
                        marginBottom: '0.5rem',
                        lineHeight: 1.4,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {c.trigger}
                    </p>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: '#64748B',
                        lineHeight: 1.72,
                      }}
                    >
                      {c.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout — cream card */}
        <div
          className="mt-14 rounded-2xl p-8 lg:p-10"
          style={{
            background: '#F8F5F0',
            border: '1px solid #E7E3DD',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              fontStyle: 'italic',
              color: '#334155',
              lineHeight: 1.65,
              textAlign: 'center',
            }}
          >
            "The businesses that establish recommendation authority in the next 24 months
            will own their categories for the next decade."
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-8" style={{ background: '#E7E3DD' }} />
            <span style={{ fontSize: '0.7rem', color: '#94A3B8', letterSpacing: '0.08em' }}>
              Misti Bruton — Founder, HeyPearl
            </span>
            <div className="h-px w-8" style={{ background: '#E7E3DD' }} />
          </div>
        </div>
      </Container>
    </section>
  );
}
