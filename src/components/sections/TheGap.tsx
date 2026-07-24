import { Container } from '@/components/ui/Container';

const OLD = [
  'Google ranks pages that match keywords',
  'More blog posts = more traffic',
  'SEO is about links and content volume',
  'Ads drive immediate visibility',
  'Analytics measure clicks and sessions',
];

const NEW = [
  'AI recommends entities it has verified and trusts',
  'Depth and expertise signal credibility to AI engines',
  'AI visibility is built through entity architecture and structured data',
  'AI citations drive brand recall at the zero-click moment',
  'The metric that matters now is AI recommendation frequency',
];

export function TheGap() {
  return (
    <section style={{ background: '#1E3A66' }} className="py-28 overflow-hidden">
      <Container size="lg">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-px w-8" style={{ background: 'rgba(255,255,255,0.2)' }} aria-hidden />
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>
              The Shift
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.08,
              letterSpacing: '-0.022em',
            }}
          >
            The Search Era ended.<br />
            <span style={{ color: '#C2185B', fontStyle: 'italic' }}>The Authority Era has begun.</span>
          </h2>
          <p className="mt-6" style={{ fontSize: '1rem', color: 'rgba(248,245,240,0.7)', lineHeight: 1.75, maxWidth: '38rem' }}>
            For 25 years, visibility meant ranking on Google. That era is over.
            These systems don't rank pages — they recommend entities they have verified, understand, and trust.
            How businesses get found has fundamentally changed.
          </p>
        </div>

        {/* Two-panel comparison */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', overflow: 'hidden' }}
        >
          {/* Old world */}
          <div className="p-8 lg:p-10" style={{ background: 'rgba(0,0,0,0.2)' }}>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.18)' }} />
              <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>
                The Search Era (1999 – 2022)
              </span>
            </div>
            <ul className="space-y-5">
              {OLD.map((item) => (
                <li key={item} className="flex gap-3.5">
                  <span style={{ color: 'rgba(255,255,255,0.15)', lineHeight: 1.6, flexShrink: 0, marginTop: '0.15rem', fontSize: '0.9rem' }}>—</span>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* New world */}
          <div className="p-8 lg:p-10 relative" style={{ background: 'rgba(255,255,255,0.04)' }}>
            {/* Left accent */}
            <div className="absolute left-0 top-8 bottom-8 w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(194,24,91,0.5), transparent)' }} />
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-2 h-2 rounded-full" style={{ background: '#C2185B' }} />
              <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C2185B' }}>
                The Recommendation Era (Now)
              </span>
            </div>
            <ul className="space-y-5">
              {NEW.map((item) => (
                <li key={item} className="flex gap-3.5">
                  <span style={{ color: '#C2185B', lineHeight: 1.6, flexShrink: 0, marginTop: '0.15rem', fontSize: '0.9rem' }}>→</span>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(248,245,240,0.82)', lineHeight: 1.65 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Transition statement */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 px-6 py-5 rounded-xl"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p style={{ fontSize: '0.9rem', color: 'rgba(248,245,240,0.65)', lineHeight: 1.6 }}>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>The shift is not coming.</span>{' '}
            It has already happened. The question is what it means for your specific business — right now.
          </p>
          <div className="h-px sm:h-10 w-full sm:w-px shrink-0" style={{ background: 'rgba(255,255,255,0.12)' }} aria-hidden />
          <p style={{ fontSize: '0.82rem', color: '#C2185B', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Keep reading ↓
          </p>
        </div>
      </Container>
    </section>
  );
}
