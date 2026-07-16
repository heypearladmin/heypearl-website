import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

export function FinalCTA() {
  return (
    <section className="py-32 bg-[#090909] relative overflow-hidden">
      {/* Gold center glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(191,155,92,0.09) 0%, transparent 65%)' }}
        />
      </div>

      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(191,155,92,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(191,155,92,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <Container size="md" className="relative text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
          <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
            Start Your Authority System
          </span>
          <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 700,
            color: '#F2EDE4',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            marginBottom: '1.5rem',
          }}
        >
          Become the trusted name<br />
          AI{' '}
          <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>recommends.</span>
        </h2>

        <p
          className="mx-auto"
          style={{ fontSize: '1.05rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.75, maxWidth: '36rem', marginBottom: '2.5rem' }}
        >
          Every quarter the AI search era pulls further from old playbooks. The businesses that
          build authority infrastructure now will be the ones AI surfaces for the next decade.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={site.strategyCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-7 py-4 text-sm font-semibold transition-colors duration-200"
            style={{ background: '#BF9B5C', color: '#090909' }}
          >
            Book a Strategy Call with Misti
            <ArrowRight size={15} />
          </a>
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 rounded-lg px-7 py-4 text-sm font-medium transition-colors duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(242,237,228,0.6)' }}
          >
            Explore the Platform
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Trust strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {[
            'No long-term contracts required',
            'Founder-led strategy sessions',
            'Built for 90-day compounding returns',
          ].map((trust) => (
            <div key={trust} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full" style={{ background: '#BF9B5C' }} aria-hidden />
              <span style={{ fontSize: '0.78rem', color: 'rgba(242,237,228,0.3)' }}>{trust}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
