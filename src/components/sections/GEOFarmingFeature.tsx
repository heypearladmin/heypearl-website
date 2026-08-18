'use client';

import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/lib/site';

const BULLETS = [
  'Circle Prospecting',
  'Monthly Neighborhood Newsletters',
  'AI Seller Attraction',
  'One Agent Per Market Strategy',
  'Done-For-You Campaigns',
];

function NeighborhoodIllustration() {
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #07142F 0%, #0F2548 50%, #1a1035 100%)',
        minHeight: '480px',
        border: '1px solid rgba(194,24,91,0.15)',
      }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(248,245,240,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(248,245,240,0.12) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(50% 50% at 40% 40%, rgba(194,24,91,0.18) 0%, transparent 65%), radial-gradient(35% 45% at 70% 70%, rgba(30,58,102,0.3) 0%, transparent 60%)',
        }}
      />

      {/* Map nodes */}
      <svg
        aria-hidden
        viewBox="0 0 480 380"
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      >
        {/* Street lines */}
        <line x1="0" y1="120" x2="480" y2="120" stroke="rgba(248,245,240,0.08)" strokeWidth="1" />
        <line x1="0" y1="200" x2="480" y2="200" stroke="rgba(248,245,240,0.08)" strokeWidth="1" />
        <line x1="0" y1="280" x2="480" y2="280" stroke="rgba(248,245,240,0.08)" strokeWidth="1" />
        <line x1="120" y1="0" x2="120" y2="380" stroke="rgba(248,245,240,0.08)" strokeWidth="1" />
        <line x1="240" y1="0" x2="240" y2="380" stroke="rgba(248,245,240,0.08)" strokeWidth="1" />
        <line x1="360" y1="0" x2="360" y2="380" stroke="rgba(248,245,240,0.08)" strokeWidth="1" />

        {/* House blocks */}
        {[
          [60, 60], [180, 60], [300, 60], [420, 60],
          [60, 160], [180, 160], [300, 160], [420, 160],
          [60, 240], [180, 240], [300, 240], [420, 240],
          [60, 320], [180, 320], [300, 320], [420, 320],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x - 14}, ${y - 14})`}>
            <rect width="28" height="20" rx="3" fill="rgba(248,245,240,0.06)" stroke="rgba(248,245,240,0.1)" strokeWidth="0.5" y="8" />
            <polygon points="14,0 28,10 0,10" fill="rgba(248,245,240,0.08)" />
          </g>
        ))}

        {/* Active coverage rings — highlighted nodes */}
        {[[180, 160], [300, 160], [240, 240]].map(([x, y], i) => (
          <g key={`ring-${i}`}>
            <circle cx={x} cy={y} r="38" fill="none" stroke="rgba(194,24,91,0.25)" strokeWidth="1" strokeDasharray="4 3" />
            <circle cx={x} cy={y} r="24" fill="rgba(194,24,91,0.12)" />
          </g>
        ))}

        {/* Location pins */}
        {[
          { x: 180, y: 160, primary: true },
          { x: 300, y: 160, primary: false },
          { x: 240, y: 240, primary: false },
          { x: 120, y: 200, primary: false },
          { x: 360, y: 200, primary: false },
        ].map(({ x, y, primary }, i) => (
          <g key={`pin-${i}`}>
            <circle
              cx={x}
              cy={y}
              r={primary ? 10 : 7}
              fill={primary ? '#C2185B' : 'rgba(194,24,91,0.55)'}
              stroke={primary ? 'rgba(248,245,240,0.3)' : 'transparent'}
              strokeWidth="1.5"
            />
            <circle cx={x} cy={y} r={primary ? 4 : 2.5} fill="white" opacity="0.9" />
          </g>
        ))}
      </svg>

      {/* Floating stat cards */}
      <div className="absolute top-6 left-6 right-6 flex gap-3">
        {[
          { label: 'Homes Targeted', value: '247' },
          { label: 'Leads Generated', value: '18' },
          { label: 'Market Coverage', value: '94%' },
        ].map((s) => (
          <div
            key={s.label}
            className="flex-1 rounded-xl p-3"
            style={{ background: 'rgba(7,20,47,0.85)', backdropFilter: 'blur(8px)', border: '1px solid rgba(248,245,240,0.1)' }}
          >
            <div style={{ fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(248,245,240,0.5)', marginBottom: '2px' }}>
              {s.label}
            </div>
            <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.15rem', fontWeight: 700, color: '#F8F5F0', lineHeight: 1 }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom badge */}
      <div
        className="absolute bottom-6 left-6 right-6 rounded-xl px-4 py-3 flex items-center justify-between"
        style={{ background: 'rgba(7,20,47,0.9)', backdropFilter: 'blur(8px)', border: '1px solid rgba(194,24,91,0.2)' }}
      >
        <div>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C2185B', marginBottom: '2px' }}>
            GEO Farming AI
          </div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(248,245,240,0.85)', fontWeight: 500 }}>
            Neighborhood campaign active · New Braunfels, TX
          </div>
        </div>
        <div
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
          style={{ background: 'rgba(194,24,91,0.15)', border: '1px solid rgba(194,24,91,0.3)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#C2185B] animate-pulse" />
          <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#C2185B', letterSpacing: '0.06em' }}>LIVE</span>
        </div>
      </div>

      {/* Powered by badge */}
      <div
        className="absolute top-6 right-6"
        style={{ background: 'rgba(7,20,47,0.85)', backdropFilter: 'blur(8px)', border: '1px solid rgba(248,245,240,0.08)', borderRadius: '8px', padding: '4px 10px' }}
      >
        <span style={{ fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(248,245,240,0.45)', fontWeight: 600 }}>
          Powered by HeyPearl
        </span>
      </div>
    </div>
  );
}

export function GEOFarmingFeature() {
  const geoUrl = site.products.geoFarmingAI.url;

  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: '#F8F5F0' }}
      aria-label="GEO Farming AI feature"
    >
      {/* Subtle grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#1E3A66 1px, transparent 1px), linear-gradient(90deg, #1E3A66 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <Container size="xl" className="relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — illustration */}
          <Reveal>
            <NeighborhoodIllustration />
          </Reveal>

          {/* Right — copy */}
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 mb-5">
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.58rem] font-bold uppercase tracking-widest"
                style={{ background: '#C2185B', color: '#FFFFFF' }}
              >
                New
              </span>
              <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(182,146,94,0.75)' }}>
                A HeyPearl Product
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#1E3A66',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                marginBottom: '0.75rem',
              }}
            >
              Introducing{' '}
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>GEO Farming AI.</span>
            </h2>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#334155' }}>
              AI-powered neighborhood marketing designed to turn every listing into your next listing.
            </p>

            {/* Bullets */}
            <ul className="flex flex-col gap-3 mb-10">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: '#C2185B' }}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span style={{ fontSize: '0.9375rem', color: '#334155', fontWeight: 500 }}>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={geoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:bg-[#D62F73] hover:shadow-lg hover:scale-[1.01]"
                style={{ background: '#C2185B', color: '#FFFFFF' }}
              >
                Launch Your Campaign
                <ArrowUpRight size={14} />
              </a>
              <a
                href="https://calendly.com/hey-pearl/meet?month=2026-05"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium transition-colors duration-200 hover:border-[#1E3A66]/40 hover:text-[#1E3A66]"
                style={{ border: '1px solid #E7E3DD', color: '#334155' }}
              >
                Book a Strategy Call
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-6 text-xs" style={{ color: '#94A3B8' }}>
              Plans starting at $149/month · One agent per market · Powered by HeyPearl
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
