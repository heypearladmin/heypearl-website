'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/lib/site';

const GEO_FEATURES = [
  'Circle Prospecting',
  'Neighborhood Authority',
  'AI Visibility',
  'Seller Lead Generation',
];

const STANDARD_PRODUCTS = [
  {
    name: 'PearlOS',
    description: 'Your AI-powered operating system for running and scaling your real estate business.',
    href: '/platform/pearlos',
  },
  {
    name: 'AI Authority',
    description: 'Build the digital authority that AI search engines trust and recommend.',
    href: '/platform/authority-score',
  },
  {
    name: 'AI Operations',
    description: 'Automate repetitive tasks, workflows, follow-up, and client communication.',
    href: '/platform/pearlos',
  },
  {
    name: 'AI Visibility',
    description: 'Dominate Google, AI Search, GEO, AEO, and local search visibility.',
    href: '/platform/ai-visibility',
  },
];

export function AISolutions() {
  const geoUrl = site.products.geoFarmingAI.url;

  return (
    <section className="py-24 sm:py-32 bg-white" aria-label="AI Solutions suite">
      <Container size="xl">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.5)' }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2185B' }}>
              Our AI Solutions
            </span>
          </div>
          <div className="max-w-3xl">
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#1E3A66',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                marginBottom: '1rem',
              }}
            >
              A complete suite of AI-powered products.
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.75, maxWidth: '44rem' }}>
              Built to help real estate professionals build AI authority, automate operations, and become the recognized, recommended choice in every neighborhood.
            </p>
          </div>
        </Reveal>

        {/* Product grid */}
        <div className="mt-12 grid lg:grid-cols-12 gap-5">

          {/* ── Featured: GEO Farming AI ── */}
          <Reveal className="lg:col-span-5" delay={0.04}>
            <div
              className="relative h-full rounded-3xl overflow-hidden flex flex-col p-8 sm:p-10"
              style={{
                background: 'linear-gradient(145deg, #0F2548 0%, #1E3A66 45%, #2D1438 100%)',
                border: '1px solid rgba(194,24,91,0.25)',
                boxShadow: '0 0 0 1px rgba(194,24,91,0.12), 0 24px 64px rgba(30,58,102,0.25)',
                minHeight: '420px',
              }}
            >
              {/* Radial glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background: 'radial-gradient(55% 55% at 85% 10%, rgba(194,24,91,0.2) 0%, transparent 65%), radial-gradient(40% 60% at 10% 90%, rgba(30,58,102,0.4) 0%, transparent 60%)',
                }}
              />

              {/* Grid pattern */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(248,245,240,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(248,245,240,0.15) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              <div className="relative flex flex-col flex-1 gap-6">
                {/* Badge */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.6rem] font-bold uppercase tracking-widest"
                    style={{ background: '#C2185B', color: '#FFFFFF' }}
                  >
                    Flagship Product
                  </span>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.6rem] font-medium uppercase tracking-wide"
                    style={{ background: 'rgba(248,245,240,0.1)', color: 'rgba(248,245,240,0.7)', border: '1px solid rgba(248,245,240,0.12)' }}
                  >
                    A HeyPearl Product
                  </span>
                </div>

                {/* Name */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                      fontWeight: 700,
                      color: '#F8F5F0',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    GEO Farming AI
                  </h3>
                  <p className="mt-3 text-base leading-relaxed" style={{ color: 'rgba(248,245,240,0.75)' }}>
                    Turn every listing into your next listing with AI-powered Circle Prospecting, neighborhood marketing, and automated homeowner engagement.
                  </p>
                </div>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-2">
                  {GEO_FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="shrink-0" style={{ color: '#C2185B' }} />
                      <span style={{ fontSize: '0.8rem', color: 'rgba(248,245,240,0.85)' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <a
                    href={geoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
                    style={{ background: '#C2185B', color: '#FFFFFF' }}
                  >
                    Launch Campaign
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={geoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors duration-200"
                    style={{ border: '1px solid rgba(248,245,240,0.2)', color: 'rgba(248,245,240,0.85)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(248,245,240,0.4)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(248,245,240,0.2)'; }}
                  >
                    Learn More
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Standard product cards 2×2 ── */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {STANDARD_PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={0.06 + i * 0.05}>
                <Link
                  href={p.href}
                  className="group flex flex-col gap-4 h-full rounded-3xl p-7 transition-all duration-200 hover:shadow-md hover:border-[#1E3A66]/20"
                  style={{
                    border: '1px solid #E7E3DD',
                    background: '#F8F5F0',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#FFFFFF'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#F8F5F0'; }}
                >
                  <div>
                    <div
                      style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(182,146,94,0.7)', marginBottom: '0.35rem' }}
                    >
                      HeyPearl Product
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-playfair), Georgia, serif',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: '#1E3A66',
                        lineHeight: 1.2,
                      }}
                    >
                      {p.name}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.65, flex: 1 }}>
                    {p.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium self-start transition-colors duration-200"
                    style={{ border: '1px solid #E7E3DD', color: '#C2185B', background: 'rgba(194,24,91,0.06)' }}
                  >
                    Explore →
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
