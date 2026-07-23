import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { geoTiers } from '@/lib/pricing';
import { site } from '@/lib/site';

export function PricingPreview() {
  return (
    <section className="py-28 bg-[#07142F] relative overflow-hidden">
      {/* Subtle gold line top */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(182,146,94,0.15), transparent)' }}
      />

      <Container size="lg">
        {/* Header */}
        <div className="mb-14 text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.35)' }} aria-hidden />
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>
              Pricing
            </span>
            <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.35)' }} aria-hidden />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: 700,
              color: '#F8F6F2',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Authority systems,{' '}
            <span style={{ color: '#C2185B', fontStyle: 'italic' }}>not retainers.</span>
          </h2>
          <p className="mt-5" style={{ fontSize: '0.95rem', color: '#98A6BE', lineHeight: 1.7 }}>
            Each tier is a complete system, not a marketing retainer.
            Start where you are. Move up when the system is ready for it.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: '1px solid rgba(48,72,111,0.5)', borderRadius: '1rem', overflow: 'hidden' }}>
          {geoTiers.map((tier, i) => (
            <div
              key={tier.id}
              className="p-7 lg:p-8 flex flex-col relative"
              style={{ background: tier.highlight ? '#14284A' : '#07142F' }}
            >
              {tier.highlight && (
                <>
                  <div
                    className="absolute top-0 inset-x-0 h-0.5"
                    style={{ background: 'linear-gradient(90deg, transparent, #C2185B, transparent)' }}
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(194,24,91,0.12)', color: '#C2185B', border: '1px solid rgba(182,146,94,0.15)' }}
                    >
                      Most popular
                    </span>
                  </div>
                </>
              )}

              {/* Tier name */}
              <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(194,24,91,0.65)', marginBottom: '0.5rem' }}>
                {tier.position}
              </div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#F8F6F2',
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
                      color: tier.highlight ? '#C2185B' : '#F8F6F2',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    ${tier.price.toLocaleString()}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#98A6BE' }}>/mo</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px mb-5" style={{ background: 'rgba(48,72,111,0.4)' }} />

              {/* Description */}
              <p style={{ fontSize: '0.83rem', color: '#98A6BE', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-7">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={13} style={{ color: '#C2185B', marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.82rem', color: '#C9D3E3', lineHeight: 1.5 }}>{f}</span>
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
                    ? { background: '#C2185B', color: '#FFFFFF' }
                    : { background: 'rgba(255,255,255,0.04)', color: '#C9D3E3', border: '1px solid #30486F' }
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
          <p style={{ fontSize: '0.8rem', color: '#98A6BE', marginBottom: '8px' }}>
            Looking for local authority?
          </p>
          <Link href="/pricing" className="text-sm font-medium" style={{ color: '#C2185B' }}>
            See all tiers including HeyLocal plans →
          </Link>
        </div>
      </Container>
    </section>
  );
}
