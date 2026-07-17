import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { RecommendedModules } from '@/components/solutions/RecommendedModules';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'HeyPearl for Brokerages — AI Authority at the Brokerage Level',
  description:
    'AI recommends agents, not brokerages — unless you build the authority to change that. HeyPearl builds the brokerage-level AI infrastructure that makes your brand the one buyers recognize and trust.',
  openGraph: {
    title: 'HeyPearl for Brokerages — Build the Brand AI Recommends',
    description: 'AI authority infrastructure for brokerage owners who want their brand to lead the conversation, not just the agents beneath it.',
  },
};

const CHALLENGES = [
  {
    num: '01',
    title: 'AI recommends agents — not brokerages.',
    body: "When buyers ask AI who to work with, they're often recommended individual agents. The brokerage behind the agent is invisible — even if your brand has decades of market leadership. Brand equity doesn't automatically translate to AI authority.",
  },
  {
    num: '02',
    title: "Your agents' authority doesn't reinforce your brand.",
    body: "Each agent builds their own online presence independently. Without unified AI authority architecture, 30 individual agent profiles produce 30 fragmented signals — none of which strengthen the brokerage entity AI engines need to recognize and recommend.",
  },
  {
    num: '03',
    title: 'New agents choose brokerages based on brand strength.',
    body: 'Recruitment increasingly depends on the strength and visibility of the brokerage brand. A brokerage with demonstrable AI authority — one that agents know will amplify their own visibility — has a clear advantage in the recruiting conversation.',
  },
  {
    num: '04',
    title: 'Competitors with less history are winning AI recommendations.',
    body: "A newer competitor with the right AI authority infrastructure can outperform a long-established brokerage in AI-generated answers. AI engines don't factor in years in business — they factor in signal clarity, entity verification, and authority depth.",
  },
];

const MODULES = [
  {
    label: 'Knowledge Graph',
    href: '/platform/knowledge-graph',
    tagline: 'Module 03',
    reason: 'Registers your brokerage as a verified entity — correctly categorized by brand, geography, and service area so AI engines recommend you at the brokerage level, not just individual agents.',
  },
  {
    label: 'Authority Pages',
    href: '/platform/authority-pages',
    tagline: 'Module 01',
    reason: 'Brokerage-level authority pages that make your brand the infrastructure AI pulls from — market pages, agent roster pages, and brand pages built for AI citation.',
  },
  {
    label: 'Authority Score',
    href: '/platform/authority-score',
    tagline: 'Module 02',
    reason: "Measures your brokerage's AI visibility gap against category competitors — and shows exactly which signals to close first for the fastest authority gain.",
  },
  {
    label: 'AI Visibility',
    href: '/platform/ai-visibility',
    tagline: 'Module 04',
    reason: 'Monitors how all six AI engines represent your brokerage brand — with alerts when competitive positioning changes and insight into which competitors are gaining ground.',
  },
];

const FAQS = [
  {
    q: 'Can HeyPearl build authority for both the brokerage brand and individual agents?',
    a: 'Yes. PearlOS is designed to build hierarchical authority — where individual agent authority reinforces the parent brokerage brand, and brokerage brand authority amplifies individual agents. The system coordinates both layers.',
  },
  {
    q: 'We already have strong SEO. Why do we need this?',
    a: 'SEO and AI authority are distinct mechanisms. A brokerage with strong Google rankings may have very low AI recommendation frequency — because AI engines use entity signals, knowledge graphs, and structured citation data, not keyword density or link profiles.',
  },
  {
    q: 'How does HeyPearl handle brokerages with multiple offices or service areas?',
    a: 'PearlOS supports multi-location entity architecture — each office or service area gets its own entity signals that roll up to the parent brokerage entity. AI engines can then recommend the right location for geographically specific buyer questions.',
  },
  {
    q: 'Can this help with agent recruitment?',
    a: "Indirectly, yes. A brokerage with demonstrable AI authority — that appears in AI recommendations for buyer queries in your market — has a concrete, measurable story to tell prospective agents about brand value. That's increasingly a differentiator.",
  },
];

export default function BrokeragesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[68vh] flex flex-col justify-center bg-[#090909] overflow-hidden"
        aria-label="Brokerages hero"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(191,155,92,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(191,155,92,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 left-1/4 w-[700px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse at bottom, rgba(191,155,92,0.06) 0%, transparent 65%)' }} />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Link href="/solutions" className="text-xs" style={{ color: 'rgba(242,237,228,0.35)' }}>Solutions</Link>
            <span style={{ color: 'rgba(242,237,228,0.2)', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontSize: '0.72rem', color: '#BF9B5C', fontWeight: 600 }}>Brokerages</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: '#BF9B5C', opacity: 0.5 }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              For Brokerage Owners
            </span>
          </div>
          <h1 className="max-w-3xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.04, letterSpacing: '-0.03em' }}>
            The brand buyers<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>AI knows to trust.</span>
          </h1>
          <p className="mt-5 max-w-[34rem]" style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.8 }}>
            AI recommends individual agents by default — unless you've built the brokerage-level authority to change that. HeyPearl builds the infrastructure that makes your brand the one buyers hear about first.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200">
              Book a Strategy Call <ArrowRight size={14} />
            </a>
            <Link href="/platform" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'rgba(242,237,228,0.45)' }}>
              Explore the Platform <ArrowUpRight size={13} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Challenges */}
      <section className="py-28 bg-[#0A0A0A]">
        <Container size="lg">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>The Challenge</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              Why strong brokerages<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>lose the AI conversation.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
            style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
            {CHALLENGES.map((c, i) => (
              <div key={c.num} className="p-7 lg:p-8" style={{ background: i % 2 === 0 ? '#0D0D0D' : '#0F0F0F' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'rgba(191,155,92,0.15)', fontFamily: 'var(--font-playfair), Georgia, serif', lineHeight: 1, marginBottom: '0.75rem' }}>{c.num}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F2EDE4', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.845rem', color: 'rgba(242,237,228,0.45)', lineHeight: 1.72 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it solves */}
      <section className="py-28 bg-[#090909]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
                <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>How HeyPearl Solves It</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em', marginBottom: '1.25rem' }}>
                Brokerage-level authority<br />
                <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>that agents amplify.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.8, marginBottom: '1rem' }}>
                PearlOS builds authority at two levels simultaneously: the brokerage entity and the individual agent entities beneath it. When both are properly structured, each agent's authority reinforces the parent brand — and the brand amplifies every agent.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.8 }}>
                AI engines begin recommending the brokerage itself for category-level queries: "best brokerage in [city]," "top real estate company for luxury homes," "which brokerage has specialists in [area]."
              </p>
            </div>
            <div className="space-y-4">
              {[
                { step: '01', label: 'Brokerage entity foundation', desc: 'Your brokerage is registered as a distinct, verified entity — brand name, location, service areas, and market categories all correctly mapped.' },
                { step: '02', label: 'Multi-level authority architecture', desc: 'Authority Pages built at both the brokerage level and the agent level — each reinforcing the other in AI knowledge structures.' },
                { step: '03', label: 'Category authority content', desc: 'Content that makes your brokerage the most cited resource in your category — not just a list of agents with profile pages.' },
                { step: '04', label: 'Brand-level AI monitoring', desc: 'Track how AI engines represent your brand separately from individual agents — with competitive intelligence on rival brokerages.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(191,155,92,0.6)', flexShrink: 0, marginTop: '0.2rem', letterSpacing: '0.05em' }}>{item.step}</div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#F2EDE4', marginBottom: '0.25rem' }}>{item.label}</div>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(242,237,228,0.42)', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Recommended Modules */}
      <RecommendedModules modules={MODULES} />

      {/* Proof */}
      <section className="py-24 bg-[#0A0A0A]">
        <Container size="lg">
          <div className="p-8 lg:p-10 rounded-2xl" style={{ background: 'rgba(191,155,92,0.04)', border: '1px solid rgba(191,155,92,0.12)' }}>
            <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C', marginBottom: '1rem' }}>Client Result</div>
            <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontStyle: 'italic', color: '#F2EDE4', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              "An independent brokerage in Austin became the #1 AI-cited brokerage across 6 engines tested — within 90 days of PearlOS activation."
            </p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(242,237,228,0.3)' }}>Client details anonymized. Results represent real engagements — outcomes vary by market and engagement scope.</p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#090909]">
        <Container size="lg">
          <div className="mb-12 max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>Questions</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
              What brokerages ask<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>before they start.</span>
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F2EDE4', marginBottom: '0.6rem' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.845rem', color: 'rgba(242,237,228,0.48)', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="py-16 bg-[#0A0A0A]">
        <Container size="lg">
          <div className="mb-8">
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>Related Solutions</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/solutions/real-estate-agents', label: 'Real Estate Agents', desc: 'For independent agents building AI authority in their market.' },
              { href: '/solutions/enterprise', label: 'Enterprise', desc: 'Multi-region and multi-brand AI authority at scale.' },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                className="group flex items-center gap-4 p-5 rounded-xl hover:bg-white/[0.02] transition-colors duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex-1">
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'rgba(242,237,228,0.75)', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(242,237,228,0.35)' }}>{item.desc}</div>
                </div>
                <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-50 transition-opacity" style={{ color: '#BF9B5C' }} />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#090909]">
        <Container size="md" className="text-center">
          <h2 className="mb-5 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
            Make your brokerage<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>the one AI recommends.</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.45)', lineHeight: 1.75 }}>
            Book a strategy call. We'll audit your brokerage's current AI visibility and show you exactly what it takes to make your brand the AI-recommended choice in your market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200">
              Book a Strategy Call <ArrowRight size={14} />
            </a>
            <Link href="/platform" className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(242,237,228,0.55)' }}>
              Explore the Platform <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
