import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: '#0A1224' }}>
      {/* Subtle radial center glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 65%)' }}
        />
      </div>

      {/* Very subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <Container size="md" className="relative text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="inline-block h-px w-8" style={{ background: 'rgba(255,255,255,0.2)' }} aria-hidden />
          <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6A00' }}>
            Start Your Authority System
          </span>
          <span className="inline-block h-px w-8" style={{ background: 'rgba(255,255,255,0.2)' }} aria-hidden />
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            marginBottom: '1.5rem',
          }}
        >
          Become the trusted name<br />
          AI{' '}
          <span style={{ color: '#FF6A00', fontStyle: 'italic' }}>recommends.</span>
        </h2>

        <p
          className="mx-auto"
          style={{ fontSize: '1.05rem', color: 'rgba(248,245,240,0.62)', lineHeight: 1.75, maxWidth: '36rem', marginBottom: '2.5rem' }}
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
            className="inline-flex items-center gap-2 rounded-lg px-7 py-4 text-sm font-semibold transition-colors duration-200 hover:bg-[#E65F00]"
            style={{ background: '#FF6A00', color: '#FFFFFF' }}
          >
            Book a Strategy Call with Misti
            <ArrowRight size={15} />
          </a>
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 rounded-lg px-7 py-4 text-sm font-medium transition-colors duration-200 hover:border-white/30"
            style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.72)' }}
          >
            Explore the Platform
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Trust strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          {[
            'No long-term contracts required',
            'Founder-led strategy sessions',
            'Measured against your Day 1 baseline',
          ].map((trust) => (
            <div key={trust} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full" style={{ background: '#FF6A00' }} aria-hidden />
              <span style={{ fontSize: '0.78rem', color: 'rgba(248,245,240,0.5)' }}>{trust}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
