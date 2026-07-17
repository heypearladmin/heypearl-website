import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { EcosystemNav } from '@/components/platform/EcosystemNav';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Knowledge Graph — Entity Architecture for AI | HeyPearl',
  description:
    'HeyPearl builds the entity architecture that registers your business as a verified, unambiguous entity across ChatGPT, Perplexity, Gemini, and every major AI engine — so they can cite and recommend you with confidence.',
  openGraph: {
    title: 'Knowledge Graph — Entity Architecture for AI Search',
    description: 'Structured entity signals that make your business impossible for AI engines to misidentify or overlook.',
    images: ['/images/og/og-knowledge-graph.webp'],
  },
};

const WHAT_IT_BUILDS = [
  { title: 'Entity Registration', desc: 'Structured signals that formally register your business — name, category, location, expertise, ownership — across every major AI training and knowledge base.' },
  { title: 'Schema Markup Architecture', desc: 'Organization, LocalBusiness, Person, and Service schema deployed in layers that reinforce your entity across every page, not just the homepage.' },
  { title: 'NAP Consistency Audit', desc: 'Name, address, and phone consistency verified across every citation source — because conflicting signals create entity ambiguity that suppresses AI recommendations.' },
  { title: 'Cross-Platform Entity Signals', desc: 'Entity signals deployed across Google Business Profile, Wikidata, industry directories, and structured citation sources that AI engines use to verify businesses.' },
  { title: 'Knowledge Panel Optimization', desc: 'Google Knowledge Panel signals engineered to trigger — because a confirmed Knowledge Panel is one of the strongest entity verification signals available.' },
  { title: 'Category & Expertise Mapping', desc: 'Deliberate category assignment and expertise territory mapping so AI engines associate your business with the exact queries your buyers are asking.' },
];

const WHY_ENTITY = [
  { q: 'Why does entity architecture matter to AI?', a: 'AI engines don\'t rank pages. They recommend entities they have verified. If an AI engine can\'t unambiguously identify what your business is, who it serves, and where it operates — it won\'t recommend it, regardless of how good your website is.' },
  { q: 'What is an entity in AI search?', a: 'An entity is a distinct, identifiable thing — a business, a person, a place, a concept. AI engines use entity graphs to understand relationships. Your business needs to exist as a clear, verified node in that graph.' },
  { q: 'What is entity ambiguity?', a: 'Entity ambiguity happens when different sources describe your business inconsistently — different names, addresses, categories, or service descriptions. AI engines resolve ambiguity by recommending the business they can most confidently identify.' },
];

export default function KnowledgeGraphPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[68vh] flex flex-col justify-center bg-[#090909] overflow-hidden"
        aria-label="Knowledge Graph hero"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image src="/images/platform/platform-knowledge-graph.webp" alt="" fill sizes="100vw" className="object-cover opacity-[0.12]" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(191,155,92,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(191,155,92,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, rgba(191,155,92,0.06) 0%, transparent 65%)' }} />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Link href="/platform" className="text-xs" style={{ color: 'rgba(242,237,228,0.35)' }}>Platform</Link>
            <span style={{ color: 'rgba(242,237,228,0.2)', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontSize: '0.72rem', color: '#BF9B5C', fontWeight: 600 }}>Knowledge Graph</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: '#BF9B5C', opacity: 0.5 }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              Module 03 — Powered by PearlOS
            </span>
          </div>
          <h1 className="max-w-3xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.04, letterSpacing: '-0.03em' }}>
            Knowledge Graph
          </h1>
          <p className="mt-3 max-w-xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontStyle: 'italic', color: '#BF9B5C' }}>
            Before AI can recommend you, it has to know you exist.
          </p>
          <p className="mt-5 max-w-[34rem]" style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.75 }}>
            AI engines don't look up your website when a buyer asks who to hire. They consult their knowledge layer — structured records of verified businesses, categorized by expertise and geography. Knowledge Graph builds your record in that layer.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200">
              Book a Strategy Call <ArrowRight size={14} />
            </a>
            <Link href="/platform" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'rgba(242,237,228,0.45)' }}>
              View all modules <ArrowUpRight size={13} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Why entity matters */}
      <section className="py-24 bg-[#0B0B0B]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
                <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>Why It Matters</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em', marginBottom: '1.25rem' }}>
                If AI doesn't know<br />
                <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>who you are, it won't say.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.8, marginBottom: '1rem' }}>
                AI engines don't pull from websites — they pull from structured entity knowledge. When a buyer asks "who's the best [service] in [city]?" the AI consults its knowledge layer, not your homepage.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.8 }}>
                Knowledge Graph puts your business in that knowledge layer — verified, categorized, and associated with the exact expertise AI engines need to recommend you confidently.
              </p>
            </div>
            <div className="space-y-4">
              {WHY_ENTITY.map((item, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F2EDE4', marginBottom: '0.5rem' }}>{item.q}</div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(242,237,228,0.45)', lineHeight: 1.65 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What it builds */}
      <section className="py-28 bg-[#090909]">
        <Container size="lg">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>What It Builds</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              Six layers of<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>entity infrastructure.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
            {WHAT_IT_BUILDS.map((item, i) => (
              <div key={item.title} className="p-7" style={{ background: i % 2 === 0 ? '#0D0D0D' : '#0F0F0F' }}>
                <div className="h-px mb-5" style={{ background: 'rgba(191,155,92,0.1)' }} />
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F2EDE4', letterSpacing: '-0.01em', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.83rem', color: 'rgba(242,237,228,0.42)', lineHeight: 1.72 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PearlOS integration */}
      <section className="py-20 bg-[#0A0A0A]">
        <Container size="lg">
          <div className="flex flex-col lg:flex-row gap-8 items-start p-8 lg:p-10 rounded-2xl"
            style={{ background: 'rgba(191,155,92,0.04)', border: '1px solid rgba(191,155,92,0.12)' }}>
            <div className="flex-1">
              <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C', marginBottom: '0.75rem' }}>PearlOS Integration</div>
              <h3 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                Entity is Layer 01. Everything builds on it.
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.75 }}>
                PearlOS executes the P.E.A.R.L. sequence — and Entity (E) is the second layer, built immediately after the Process audit. Authority Pages, Reputation signals, and GEO content all depend on a verified entity foundation. Without it, AI engines can't attribute authority to the right business.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/platform/pearlos" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#BF9B5C' }}>
                Learn about PearlOS <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      {/* Ecosystem nav */}
      <EcosystemNav
        current="/platform/knowledge-graph"
        nextHref="/platform/authority-pages"
        nextLabel="Authority Pages — Create the citable infrastructure"
      />

      <section className="py-24 bg-[#090909]">
        <Container size="md" className="text-center">
          <h2 className="mb-5 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
            Build the entity<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>AI engines trust.</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.45)', lineHeight: 1.75 }}>
            Knowledge Graph architecture is built in the first 30 days of every PearlOS engagement — the foundation every other module depends on.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200">
              Book a Strategy Call <ArrowRight size={14} />
            </a>
            <Link href="/platform" className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(242,237,228,0.55)' }}>
              View all modules <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
