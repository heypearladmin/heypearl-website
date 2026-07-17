import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

export function HeroDeclaration() {
  return (
    <section
      className="relative -mt-24 sm:-mt-28 min-h-screen flex flex-col justify-center bg-[#090909] overflow-hidden"
      aria-label="Hero"
    >
      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(191,155,92,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(191,155,92,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Gold radial — upper right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(191,155,92,0.09) 0%, transparent 65%)',
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 inset-x-0 h-48"
        style={{ background: 'linear-gradient(to bottom, transparent, #090909)' }}
      />

      <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-24">

        {/* Brand declaration — answers "What is HeyPearl?" in the first line */}
        <div className="flex items-center gap-3 mb-8">
          <span
            className="inline-block h-px w-10"
            style={{ background: '#BF9B5C', opacity: 0.5 }}
            aria-hidden
          />
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#BF9B5C',
            }}
          >
            HeyPearl — The AI Authority Platform
          </span>
        </div>

        {/* H1 — answers "Why should I care?" */}
        <h1
          className="max-w-4xl"
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: 'clamp(3rem, 7.5vw, 6rem)',
            fontWeight: 700,
            color: '#F2EDE4',
            lineHeight: 1.03,
            letterSpacing: '-0.03em',
          }}
        >
          Become the Authority<br />
          <span style={{ color: '#BF9B5C', fontStyle: 'italic', whiteSpace: 'nowrap' }}>
            AI Recommends.
          </span>
        </h1>

        {/* Subheadline — confirms the brand, explains the mechanism */}
        <p
          className="mt-7 max-w-[38rem] leading-relaxed"
          style={{ fontSize: '1.1rem', color: 'rgba(242,237,228,0.68)' }}
        >
          We build the infrastructure that makes AI engines trust, cite, and recommend your business —
          entity architecture, authority pages, and reputation systems engineered for the AI search era.{' '}
          <span style={{ color: 'rgba(242,237,228,0.82)' }}>
            Powered by PearlOS and the P.E.A.R.L. framework.
          </span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={site.strategyCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200"
          >
            Book a Strategy Call
            <ArrowRight size={15} />
          </a>
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-medium transition-colors duration-200 hover:border-white/20 hover:text-[#F2EDE4]"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(242,237,228,0.65)',
            }}
          >
            Explore the Platform
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Proof strip — three consistent, system-level claims */}
        <div
          className="mt-16 flex flex-wrap gap-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem' }}
        >
          {[
            { num: '6',        label: 'AI engines tracked per client' },
            { num: '90-Day',   label: 'Authority visibility roadmap' },
            { num: '5-Layer',  label: 'P.E.A.R.L. authority system' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '1.55rem',
                  fontWeight: 700,
                  color: '#BF9B5C',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  color: 'rgba(242,237,228,0.38)',
                  marginTop: '0.35rem',
                  letterSpacing: '0.03em',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
