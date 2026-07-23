import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

const CREDENTIALS = [
  { label: 'Background', value: 'Brokerage & brand operator' },
  { label: 'Approach', value: 'Systems-first, zero hype' },
  { label: 'Philosophy', value: 'Operator-first, never agency-speak' },
];

export function Founder() {
  return (
    <section className="py-28 bg-[#07142F] relative overflow-hidden">
      {/* Subtle gold radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 w-[500px] h-[500px]"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(194,24,91,0.05) 0%, transparent 60%)' }}
      />

      <Container size="xl" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — portrait */}
          <div className="relative">
            {/* Gold frame effect */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0"
              style={{ border: '1px solid rgba(182,146,94,0.12)' }}
            >
              <Image
                src={site.founder.photo}
                alt={`${site.founder.name}, ${site.founder.role}`}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 40vw, 80vw"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(3,8,20,0.6) 0%, transparent 50%)' }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <div style={{ fontSize: '0.67rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#98A6BE', marginBottom: '2px' }}>
                  Founder & CEO
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#F8F6F2',
                  }}
                >
                  {site.founder.name}
                </div>
              </div>
            </div>

            {/* Floating credential card */}
            <div
              className="hidden lg:block absolute -right-8 bottom-16 rounded-xl p-4 w-44"
              style={{ background: 'rgba(7,20,47,0.95)', border: '1px solid rgba(182,146,94,0.15)', backdropFilter: 'blur(12px)' }}
            >
              <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C2185B', marginBottom: '6px' }}>
                Category Creator
              </div>
              <div style={{ fontSize: '0.75rem', color: '#C9D3E3', lineHeight: 1.5 }}>
                AI Authority Infrastructure — coined and built by HeyPearl
              </div>
            </div>
          </div>

          {/* Right — editorial text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.35)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>
                The Founder
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 700,
                color: '#F8F6F2',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              Built by an operator who has{' '}
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>run the playbook.</span>
            </h2>

            <p style={{ fontSize: '1rem', color: '#C9D3E3', lineHeight: 1.75, marginBottom: '1rem' }}>
              HeyPearl is led by Misti Bruton — a founder who has scaled brokerages, brands, and
              operations across rapidly changing markets. The shift to AI search is not theoretical
              for her. It is the next chapter of work she has spent her career preparing for.
            </p>
            <p style={{ fontSize: '1rem', color: '#C9D3E3', lineHeight: 1.75, marginBottom: '2rem' }}>
              Every system inside HeyPearl was built for the operators she would want as clients.
              Modern, sophisticated, and serious about long-term authority. No hype. No shortcuts.
              No abandoned dashboards.
            </p>

            {/* Credentials */}
            <div
              className="grid grid-cols-3 gap-4 mb-8 py-6"
              style={{ borderTop: '1px solid rgba(48,72,111,0.5)', borderBottom: '1px solid rgba(48,72,111,0.5)' }}
            >
              {CREDENTIALS.map(({ label, value }) => (
                <div key={label}>
                  <div style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C2185B', marginBottom: '4px' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#C9D3E3', lineHeight: 1.4 }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={site.strategyCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-200"
                style={{ background: '#C2185B', color: '#FFFFFF' }}
              >
                Book a Strategy Call
                <ArrowRight size={14} />
              </a>
              <Link
                href="/about/founder"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200"
                style={{ border: '1px solid #30486F', color: '#C9D3E3' }}
              >
                Misti's story
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
