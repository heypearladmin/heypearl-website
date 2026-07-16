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
  'Depth and authority signal credibility to AI engines',
  'AI visibility is built through structured data and entity architecture',
  'AI citations drive brand recall at the zero-click moment',
  'Analytics must now measure AI recommendation frequency',
];

export function TheGap() {
  return (
    <section className="bg-[#090909] py-28 overflow-hidden">
      <Container size="lg">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              The Shift
            </span>
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
            The Search Era ended.<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>The Authority Era has begun.</span>
          </h2>
          <p className="mt-5" style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.7, maxWidth: '38rem' }}>
            AI doesn't rank pages — it recommends authorities. Every assumption about digital visibility
            needs to be rebuilt from the ground up.
          </p>
        </div>

        {/* Two-panel comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1rem', overflow: 'hidden' }}>
          {/* Old world */}
          <div className="p-8 lg:p-10" style={{ background: '#111111' }}>
            <div className="flex items-center gap-2 mb-7">
              <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.3)' }}>
                Before AI Search
              </span>
            </div>
            <ul className="space-y-5">
              {OLD.map((item) => (
                <li key={item} className="flex gap-3">
                  <span style={{ color: 'rgba(242,237,228,0.15)', lineHeight: 1.6, flexShrink: 0, marginTop: '0.1rem' }}>—</span>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(242,237,228,0.35)', lineHeight: 1.65 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* New world */}
          <div className="p-8 lg:p-10 relative" style={{ background: '#0F0F0F' }}>
            {/* Gold left border accent */}
            <div className="absolute left-0 top-8 bottom-8 w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(191,155,92,0.4), transparent)' }} />
            <div className="flex items-center gap-2 mb-7">
              <div className="w-2 h-2 rounded-full" style={{ background: '#BF9B5C' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#BF9B5C' }}>
                The AI Authority Era
              </span>
            </div>
            <ul className="space-y-5">
              {NEW.map((item) => (
                <li key={item} className="flex gap-3">
                  <span style={{ color: '#BF9B5C', lineHeight: 1.6, flexShrink: 0, marginTop: '0.1rem' }}>→</span>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(242,237,228,0.75)', lineHeight: 1.65 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pull quote */}
        <div className="mt-14 text-center max-w-2xl mx-auto">
          <p
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
              fontStyle: 'italic',
              color: 'rgba(242,237,228,0.5)',
              lineHeight: 1.6,
            }}
          >
            "The businesses that win AI recommendations in the next 24 months will own their categories
            for the next decade."
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-8" style={{ background: 'rgba(191,155,92,0.3)' }} />
            <span style={{ fontSize: '0.72rem', color: 'rgba(242,237,228,0.3)', letterSpacing: '0.08em' }}>Misti Bruton, Founder — HeyPearl</span>
            <div className="h-px w-8" style={{ background: 'rgba(191,155,92,0.3)' }} />
          </div>
        </div>
      </Container>
    </section>
  );
}
