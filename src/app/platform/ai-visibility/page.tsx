import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { EcosystemNav } from '@/components/platform/EcosystemNav';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'AI Visibility — Real-Time AI Search Monitoring | HeyPearl',
  description:
    'AI Visibility tracks how ChatGPT, Perplexity, Gemini, Claude, Copilot, and Google AI Overviews represent your business — with alerts when your AI presence changes and intelligence that drives your authority strategy.',
  openGraph: {
    title: 'AI Visibility — Monitor Your Presence Across 6 AI Engines',
    description: 'Real-time monitoring of how every major AI engine represents your business — so you know exactly what AI is saying about you.',
    images: ['/images/og/og-ai-visibility.webp'],
  },
};

const ENGINES = [
  { name: 'ChatGPT', note: 'OpenAI' },
  { name: 'Perplexity', note: 'Search AI' },
  { name: 'Gemini', note: 'Google AI' },
  { name: 'Claude', note: 'Anthropic' },
  { name: 'Copilot', note: 'Microsoft' },
  { name: 'AI Overviews', note: 'Google Search' },
];

const WHAT_IT_TRACKS = [
  { title: 'Recommendation Frequency', desc: 'How often your business appears as a recommended answer — across all six engines, across the full range of queries your buyers are asking.' },
  { title: 'Citation Accuracy', desc: 'Whether AI engines are describing your business correctly — right name, right service, right location, right positioning. Errors are flagged immediately.' },
  { title: 'Competitor Positioning', desc: 'Who AI engines are recommending instead of you — by query type, geography, and category — so you know exactly who you\'re competing with in AI search.' },
  { title: 'Share of Voice', desc: 'Your percentage of AI-generated recommendations in your market category — the single metric that tells you whether your authority is growing.' },
  { title: 'Change Alerts', desc: 'When how any major AI engine represents your business changes — positively or negatively — you know within the monitoring cycle.' },
  { title: 'Query-Level Intelligence', desc: 'The specific buyer questions that are (or aren\'t) surfacing your business — so content and entity efforts can be directed at the highest-leverage gaps.' },
];

export default function AIVisibilityPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[68vh] flex flex-col justify-center bg-[#090909] overflow-hidden"
        aria-label="AI Visibility hero"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image src="/images/platform/platform-ai-visibility.webp" alt="" fill sizes="100vw" className="object-cover opacity-[0.12]" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(191,155,92,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(191,155,92,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[700px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(191,155,92,0.07) 0%, transparent 65%)' }} />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Link href="/platform" className="text-xs" style={{ color: 'rgba(242,237,228,0.35)' }}>Platform</Link>
            <span style={{ color: 'rgba(242,237,228,0.2)', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontSize: '0.72rem', color: '#BF9B5C', fontWeight: 600 }}>AI Visibility</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: '#BF9B5C', opacity: 0.5 }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              Module 04 — Powered by PearlOS
            </span>
          </div>
          <h1 className="max-w-3xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.04, letterSpacing: '-0.03em' }}>
            AI Visibility
          </h1>
          <p className="mt-3 max-w-xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontStyle: 'italic', color: '#BF9B5C' }}>
            Know exactly what AI is saying about you.
          </p>
          <p className="mt-5 max-w-[34rem]" style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.75 }}>
            AI visibility loss is silent. Buyers are getting answers about your market and your name may not be in them. AI Visibility monitors six engines continuously — so you always know where your business stands, what competitors are winning, and what to fix.
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

      {/* 6 engines */}
      <section className="py-20 bg-[#0A0A0A]">
        <Container size="lg">
          <div className="mb-10 text-center">
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              Six Engines Monitored
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px"
            style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
            {ENGINES.map((e, i) => (
              <div key={e.name} className="p-5 text-center" style={{ background: i % 2 === 0 ? '#0D0D0D' : '#0F0F0F' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F2EDE4', marginBottom: '0.2rem' }}>{e.name}</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(191,155,92,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{e.note}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-5" style={{ fontSize: '0.8rem', color: 'rgba(242,237,228,0.3)', lineHeight: 1.6 }}>
            Monitoring expands as new AI engines achieve significant market share in buyer discovery.
          </p>
        </Container>
      </section>

      {/* What it tracks */}
      <section className="py-28 bg-[#090909]">
        <Container size="lg">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>What It Tracks</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              Six signals.<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>Complete AI awareness.</span>
            </h2>
            <p className="mt-5" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.48)', lineHeight: 1.75 }}>
              AI Visibility doesn't track impressions or clicks. It tracks the signals that predict whether your business gets recommended — before you lose the recommendation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
            {WHAT_IT_TRACKS.map((item, i) => (
              <div key={item.title} className="p-7" style={{ background: i % 2 === 0 ? '#0D0D0D' : '#0F0F0F' }}>
                <div className="h-px mb-5" style={{ background: 'rgba(191,155,92,0.1)' }} />
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F2EDE4', letterSpacing: '-0.01em', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.83rem', color: 'rgba(242,237,228,0.42)', lineHeight: 1.72 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why monitoring matters */}
      <section className="py-24 bg-[#0B0B0B]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
                <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>Why It Matters</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em', marginBottom: '1.25rem' }}>
                AI visibility loss<br />
                <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>is invisible. Until it isn't.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Traditional analytics tell you when traffic drops — after the damage is done. AI Visibility monitoring tells you when your AI representation changes — while you can still act on it.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.8 }}>
                Buyers who find you through AI recommendations aren't counting in your Google Analytics. They're calling, booking, and converting — and the only way to know whether that channel is growing or shrinking is to monitor it directly.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'AI citation loss is often silent for weeks before it becomes visible in pipeline data.' },
                { label: 'Competitors can gain AI recommendation share in your market without triggering a single SEO ranking change.' },
                { label: 'AI engines update how they represent businesses regularly — and those changes don\'t always favor the incumbent.' },
                { label: 'A single inaccurate AI description can suppress recommendations across all six engines simultaneously.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: '#BF9B5C', flexShrink: 0, marginTop: '0.1rem', fontSize: '0.9rem' }}>→</span>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.65 }}>{item.label}</p>
                </div>
              ))}
            </div>
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
                Visibility data drives every other module.
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.75 }}>
                PearlOS feeds AI Visibility data back into Authority Score, Knowledge Graph, and GEO Engine decisions — so the system is always responding to what AI engines are actually doing, not what was true 90 days ago. This feedback loop is what makes HeyPearl authority compound instead of plateau.
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

      {/* Ecosystem nav */}
      <EcosystemNav
        current="/platform/ai-visibility"
        nextHref="/platform/geo-engine"
        nextLabel="GEO Engine — Amplify and compound your authority"
      />

      {/* CTA */}
      <section className="py-24 bg-[#090909]">
        <Container size="md" className="text-center">
          <h2 className="mb-5 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
            Know what AI<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>is saying about you.</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.45)', lineHeight: 1.75 }}>
            AI Visibility monitoring begins from day one of every PearlOS engagement. Book a strategy call to see your current AI presence.
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
