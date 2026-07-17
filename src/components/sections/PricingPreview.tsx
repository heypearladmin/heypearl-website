import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { geoTiers } from '@/lib/pricing';
import { site } from '@/lib/site';

export function PricingPreview() {
  return (
    <section className="py-28 bg-[#090909] relative overflow-hidden">
      {/* Subtle gold line top */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(191,155,92,0.2), transparent)' }}
      />

      <Container size="lg">
        {/* Header */}
        <div className="mb-14 text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              Pricing
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
            Authority systems,{' '}
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>not retainers.</span>
          </h2>
          <p className="mt-5" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.45)', lineHeight: 1.7 }}>
            Each tier is a complete system, not a marketing retainer.
            Start where you are. Move up when the system is ready for it.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
          {geoTiers.map((tier, i) => (
            <div
              key={tier.id}
              className="p-7 lg:p-8 flex flex-col relative"
              style={{ background: tier.highlight ? '#111111' : '#0D0D0D' }}
            >
              {tier.highlight && (
                <>
                  <div
                    className="absolute top-0 inset-x-0 h-0.5"
                    style={{ background: 'linear-gradient(90deg, transparent, #BF9B5C, transparent)' }}
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(191,155,92,0.12)', color: '#BF9B5C', border: '1px solid rgba(191,155,92,0.2)' }}
                    >
                      Most popular
                    </span>
                  </div>
                </>
              )}

              {/* Tier name */}
              <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(191,155,92,0.65)', marginBottom: '0.5rem' }}>
                {tier.position}
              </div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#F2EDE4',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {tier.name}
              </h3>

              {/* Price */}
              <div className="my-5">
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                      fontSize: '2.4rem',
                      fontWeight: 700,
                      color: tier.highlight ? '#BF9B5C' : '#F2EDE4',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    ${tier.price.toLocaleString()}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(242,237,228,0.35)' }}>/mo</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.05)' }} />

              {/* Description */}
              <p style={{ fontSize: '0.83rem', color: 'rgba(242,237,228,0.4)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-7">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={13} style={{ color: '#BF9B5C', marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.82rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={site.strategyCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold transition-colors duration-200"
                style={
                  tier.highlight
                    ? { background: '#BF9B5C', color: '#090909' }
                    : { background: 'rgba(255,255,255,0.04)', color: 'rgba(242,237,228,0.7)', border: '1px solid rgba(255,255,255,0.08)' }
                }
              >
                Book a Strategy Call
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center">
          <p style={{ fontSize: '0.8rem', color: 'rgba(242,237,228,0.25)', marginBottom: '8px' }}>
            Looking for local authority?
          </p>
          <Link href="/pricing" className="text-sm font-medium" style={{ color: '#BF9B5C' }}>
            See all tiers including HeyLocal plans →
          </Link>
        </div>
      </Container>
    </section>
  );
}
