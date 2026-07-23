import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { EcosystemNav } from '@/components/platform/EcosystemNav';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'GEO Engine — Generative Engine Optimization | HeyPearl',
  description:
    'The HeyPearl GEO Engine is purpose-built Generative Engine Optimization — content, structure, and distribution systems designed to make your business the answer when AI generates responses for your buyers.',
  openGraph: {
    title: 'GEO Engine — Generative Engine Optimization by HeyPearl',
    description: 'Purpose-built GEO tools for the era when AI generates the answers your buyers are reading.',
    images: ['/images/og/og-geo-engine.webp'],
  },
};

const WHAT_GEO_DOES = [
  {
    title: 'Prompt-to-Recommendation Mapping',
    desc: 'We identify the exact prompts and questions buyers are using to discover businesses in your market — then engineer the content and signals that make your business the recommended answer.',
  },
  {
    title: 'AI-Citable Content Architecture',
    desc: 'Content written and structured the way AI engines extract citations — clear definitions, factual claims, direct answers, and attribution signals that make your content the preferred source.',
  },
  {
    title: 'Zero-Click Presence Strategy',
    desc: 'When AI generates an answer without sending a click, your business name, expertise, and positioning still appear in the response. GEO Engine builds the authority that earns those mentions.',
  },
  {
    title: 'Category Authority Content',
    desc: 'Long-form content systems that make your business the deepest, most comprehensive resource in your category — the kind AI engines prefer to cite over thin, generic competition.',
  },
  {
    title: 'GEO Distribution Amplification',
    desc: 'Structured distribution of authority content across channels AI engines monitor — so signals compound across platforms, not just your website.',
  },
  {
    title: 'Topical Gap Coverage',
    desc: 'Authority Score and AI Visibility data surface the exact queries where competitors are being recommended instead of you. GEO Engine closes those gaps systematically.',
  },
];

const GEO_VS_SEO = [
  { dimension: 'Primary goal', seo: 'Rank pages on Google', geo: 'Be cited in AI-generated answers' },
  { dimension: 'Success metric', seo: 'Organic click-through rate', geo: 'AI recommendation frequency' },
  { dimension: 'Content format', seo: 'Blog posts optimized for keywords', geo: 'Structured, citable expert content' },
  { dimension: 'Core signal', seo: 'Backlinks and domain authority', geo: 'Entity signals and expertise depth' },
  { dimension: 'Result timeline', seo: '3-6 months for rankings', geo: '60-90 days for AI citations' },
];

export default function GEOEnginePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[68vh] flex flex-col justify-center bg-[#07142F] overflow-hidden"
        aria-label="GEO Engine hero"
      >
        <div aria-hidden className="pointer-events-none absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 w-[38%] hidden lg:block" style={{ zIndex: 1 }}>
          <div style={{ aspectRatio: '16/10', position: 'relative', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(182,146,94,0.15)', boxShadow: '0 32px 64px rgba(3,8,20,0.7)' }}>
            <Image src="/images/platform/platform-geo-engine.webp" alt="" fill sizes="38vw" className="object-cover" />
          </div>
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(194,24,91,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(194,24,91,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div aria-hidden className="pointer-events-none absolute -top-40 right-1/4 w-[700px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse at top, rgba(194,24,91,0.07) 0%, transparent 65%)' }} />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div style={{ maxWidth: '54%' }}>
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Link href="/platform" className="text-xs" style={{ color: '#98A6BE' }}>Platform</Link>
            <span style={{ color: 'rgba(245,241,232,0.2)', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontSize: '0.72rem', color: '#C2185B', fontWeight: 600 }}>GEO Engine</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B6925E' }}>
              Module 05 — Powered by PearlOS
            </span>
          </div>
          <h1 className="max-w-3xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 700, color: '#F8F6F2', lineHeight: 1.04, letterSpacing: '-0.03em' }}>
            GEO Engine
          </h1>
          <p className="mt-3 max-w-xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontStyle: 'italic', color: '#B6925E' }}>
            The answer AI generates. The name it uses.
          </p>
          <p className="mt-5 max-w-[34rem]" style={{ fontSize: '1rem', color: '#C9D3E3', lineHeight: 1.75 }}>
            When buyers ask AI who to call, who to trust, who to hire — they read a generated answer. GEO Engine engineers your content and authority signals so your business is the name in that answer — and stays there as authority compounds.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold bg-[#C2185B] hover:bg-[#D62F73] text-white transition-colors duration-200">
              Book a Strategy Call <ArrowRight size={14} />
            </a>
            <Link href="/platform" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: '#98A6BE' }}>
              View all modules <ArrowUpRight size={13} />
            </Link>
          </div>
          </div>
        </Container>
      </section>

      {/* GEO vs SEO */}
      <section className="py-24 bg-[#14284A]">
        <Container size="lg">
          <div className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.35)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B6925E' }}>GEO vs. SEO</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F8F6F2', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              Different game.<br />
              <span style={{ color: '#B6925E', fontStyle: 'italic' }}>Different rules.</span>
            </h2>
          </div>
          <div style={{ border: '1px solid rgba(48,72,111,0.35)', borderRadius: '1rem', overflow: 'hidden' }}>
            <div className="grid grid-cols-3 gap-px" style={{ background: 'rgba(48,72,111,0.35)' }}>
              <div className="p-4 text-xs font-semibold" style={{ background: '#07142F', color: '#98A6BE', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Dimension</div>
              <div className="p-4 text-xs font-semibold" style={{ background: '#07142F', color: '#98A6BE', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Traditional SEO</div>
              <div className="p-4 text-xs font-semibold" style={{ background: '#07142F', color: '#B6925E', textTransform: 'uppercase', letterSpacing: '0.08em' }}>GEO Engine</div>
            </div>
            {GEO_VS_SEO.map((row, i) => (
              <div key={row.dimension} className="grid grid-cols-3 gap-px" style={{ background: 'rgba(48,72,111,0.35)' }}>
                <div className="p-4" style={{ background: '#14284A', fontSize: '0.8rem', fontWeight: 600, color: '#98A6BE' }}>{row.dimension}</div>
                <div className="p-4" style={{ background: '#14284A', fontSize: '0.82rem', color: '#98A6BE' }}>{row.seo}</div>
                <div className="p-4" style={{ background: '#14284A', fontSize: '0.82rem', color: 'rgba(245,241,232,0.75)' }}>{row.geo}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What GEO Engine does */}
      <section className="py-28 bg-[#07142F]">
        <Container size="lg">
          <Reveal>
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.35)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B6925E' }}>What It Builds</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F8F6F2', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              Six GEO systems.<br />
              <span style={{ color: '#B6925E', fontStyle: 'italic' }}>One AI presence.</span>
            </h2>
            <p className="mt-5" style={{ fontSize: '0.95rem', color: 'rgba(245,241,232,0.48)', lineHeight: 1.75 }}>
              GEO Engine isn't a content calendar. It's a coordinated system that targets the exact prompts your buyers are using and engineers your business as the AI-recommended answer.
            </p>
          </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ border: '1px solid rgba(48,72,111,0.35)', borderRadius: '1rem', overflow: 'hidden' }}>
            {WHAT_GEO_DOES.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
              <div className="p-7" style={{ background: i % 2 === 0 ? '#07142F' : '#14284A' }}>
                <div className="h-px mb-5" style={{ background: 'rgba(182,146,94,0.1)' }} />
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8F6F2', letterSpacing: '-0.01em', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.83rem', color: 'rgba(245,241,232,0.42)', lineHeight: 1.72 }}>{item.desc}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PearlOS integration */}
      <section className="py-20 bg-[#14284A]">
        <Container size="lg">
          <div className="flex flex-col lg:flex-row gap-8 items-start p-8 lg:p-10 rounded-2xl"
            style={{ background: 'rgba(194,24,91,0.04)', border: '1px solid rgba(182,146,94,0.12)' }}>
            <div className="flex-1">
              <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B6925E', marginBottom: '0.75rem' }}>PearlOS Integration</div>
              <h3 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#F8F6F2', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                GEO without entity architecture is noise.
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#98A6BE', lineHeight: 1.75 }}>
                PearlOS ensures GEO Engine content is built on top of a verified Knowledge Graph entity, measured by Authority Score, and tracked by AI Visibility — so every piece of GEO content compounds the authority layer, not replaces it. Content without entity infrastructure doesn't earn AI citations. Content with it compounds month after month.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/platform/pearlos" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#C2185B' }}>
                Learn about PearlOS <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Ecosystem nav */}
      <EcosystemNav
        current="/platform/geo-engine"
        nextHref={site.strategyCallUrl}
        nextLabel="Book a Strategy Call"
      />

      {/* CTA */}
      <section className="py-24 bg-[#07142F]">
        <Container size="md" className="text-center">
          <h2 className="mb-5 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#F8F6F2', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
            Become the answer<br />
            <span style={{ color: '#B6925E', fontStyle: 'italic' }}>AI generates.</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '0.95rem', color: '#98A6BE', lineHeight: 1.75 }}>
            GEO Engine runs throughout every PearlOS engagement — starting from the first 30 days and compounding as entity architecture matures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold bg-[#C2185B] hover:bg-[#D62F73] text-white transition-colors duration-200">
              Book a Strategy Call <ArrowRight size={14} />
            </a>
            <Link href="/platform" className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#C9D3E3' }}>
              View all modules <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
