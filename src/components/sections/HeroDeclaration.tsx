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
            'linear-gradient(rgba(191,155,92,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(191,155,92,0.07) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial gold glow — upper right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(191,155,92,0.10) 0%, transparent 65%)',
        }}
      />

      {/* Bottom fade to black */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 inset-x-0 h-40"
        style={{ background: 'linear-gradient(to bottom, transparent, #090909)' }}
      />

      <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span
            className="inline-block h-px w-10"
            style={{ background: 'rgba(191,155,92,0.5)' }}
            aria-hidden
          />
          <span
            style={{
              fontSize: '0.67rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#BF9B5C',
            }}
          >
            The AI Authority Platform
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display max-w-4xl leading-[1.05] tracking-tight"
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 700,
            color: '#F2EDE4',
            letterSpacing: '-0.025em',
          }}
        >
          The AI Recommendation Era{' '}
          <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>
            Has Already Begun.
          </span>
        </h1>

        {/* Body */}
        <p
          className="mt-7 max-w-xl leading-relaxed"
          style={{ fontSize: '1.05rem', color: 'rgba(242,237,228,0.6)' }}
        >
          HeyPearl builds the systems that help businesses become the authority
          AI recommends. Not more content. Not more ads.{' '}
          <span style={{ color: 'rgba(242,237,228,0.85)' }}>
            The infrastructure that makes AI trust you.
          </span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={site.strategyCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200"
          >
            Book a Strategy Call
            <ArrowRight size={15} />
          </a>
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium transition-colors duration-200"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(242,237,228,0.7)',
            }}
          >
            Explore the Platform
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Social proof strip */}
        <div
          className="mt-16 flex flex-wrap gap-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem' }}
        >
          {[
            { num: '62+',    label: 'Authority pages live' },
            { num: '10',     label: 'Deep knowledge articles' },
            { num: '90 day', label: 'Visibility roadmap' },
            { num: '5-layer',label: 'P.E.A.R.L. system' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#BF9B5C',
                  lineHeight: 1,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  color: 'rgba(242,237,228,0.4)',
                  marginTop: '0.3rem',
                  letterSpacing: '0.04em',
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
