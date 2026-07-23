import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { RecommendedModules } from '@/components/solutions/RecommendedModules';
import { site } from '@/lib/site';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'HeyPearl for Real Estate Agents — AI Authority for Independent Agents',
  description:
    'Buyers are asking AI who to call. HeyPearl builds the AI authority infrastructure that makes your name the agent AI recommends — for your market, your specialty, your territory.',
  openGraph: {
    title: 'HeyPearl for Real Estate Agents — Become the Agent AI Recommends',
    description: 'The AI authority platform built for independent agents who want to own their market before competitors do.',
    images: ['/images/og/og-solutions.webp'],
  },
};

const CHALLENGES = [
  {
    num: '01',
    title: "You're invisible in AI search.",
    body: "When buyers ask ChatGPT or Perplexity who's the best agent in your city, your name doesn't appear. Competitors who have built AI authority are being recommended in your territory — and you don't know it.",
  },
  {
    num: '02',
    title: "Your online presence doesn't translate to AI.",
    body: "You may have hundreds of reviews and years of experience. But AI engines don't read your Zillow profile the way a human would. Without structured entity signals and authority architecture, that track record is invisible.",
  },
  {
    num: '03',
    title: 'Referral pipelines are unpredictable.',
    body: 'Referrals are great — when they happen. AI recommendation is the new referral network: always-on, query-specific, and growing every quarter as more buyers start their search by asking AI.',
  },
  {
    num: '04',
    title: "You can't out-spend a big team or brokerage.",
    body: 'Paid ads and portal listings favor volume. AI authority favors depth. A solo agent with the right AI infrastructure can out-rank a 20-person team in AI-generated answers — because authority compounds, not just spend.',
  },
];

const OUTCOMES = [
  { metric: 'Named', label: 'by AI when buyers ask for agents in your specialty or territory' },
  { metric: 'Cited', label: 'as a trusted source in AI-generated answers about your market' },
  { metric: 'Found', label: 'before your competitors — not by spending more, but by building deeper' },
];

const MODULES = [
  {
    label: 'Authority Pages',
    href: '/platform/authority-pages',
    tagline: 'Module 01',
    reason: 'The pages AI pulls from when recommending agents in your market. Built around your specialty, territory, and buyer questions.',
  },
  {
    label: 'Knowledge Graph',
    href: '/platform/knowledge-graph',
    tagline: 'Module 03',
    reason: 'Registers you as a verified agent entity in AI knowledge bases — so AI engines can associate you with the right market, specialty, and buyer profile.',
  },
  {
    label: 'GEO Engine',
    href: '/platform/geo-engine',
    tagline: 'Module 05',
    reason: 'Builds the content and signals that make your business the answer to the specific questions buyers are asking AI about your market.',
  },
  {
    label: 'AI Visibility',
    href: '/platform/ai-visibility',
    tagline: 'Module 04',
    reason: "Monitors all six major AI engines to show exactly where you're being recommended — and where competitors are winning instead.",
  },
];

const FAQS = [
  {
    q: 'How long does it take to start showing up in AI recommendations?',
    a: 'Most agents see measurable AI visibility improvement within 60–90 days. Entity architecture and Knowledge Graph work happens in the first 30 days; Authority Pages and GEO content begin producing citations in months two and three.',
  },
  {
    q: 'Do I need to be in a major market?',
    a: 'No. AI recommendation opportunity is often strongest in mid-size and suburban markets where established agents have less AI authority infrastructure than their reputation warrants. Smaller markets can be won faster.',
  },
  {
    q: 'Does this replace my existing marketing?',
    a: 'No — HeyPearl is an AI authority layer, not a replacement for your existing presence. It works alongside your website, social media, and portals by ensuring AI engines can find, verify, and recommend you from those signals.',
  },
  {
    q: 'What makes HeyPearl different from SEO?',
    a: "SEO optimizes for Google ranking pages. HeyPearl optimizes for AI citation — a fundamentally different mechanism. AI engines don't rank; they recommend based on entity confidence and authority signals that traditional SEO doesn't address.",
  },
];

export default function RealEstateAgentsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[68vh] flex flex-col justify-center bg-[#07142F] overflow-hidden"
        aria-label="Real Estate Agents hero"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(194,24,91,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(194,24,91,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[700px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(194,24,91,0.07) 0%, transparent 65%)' }} />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Link href="/solutions" className="text-xs" style={{ color: '#C9D3E3' }}>Solutions</Link>
            <span style={{ color: '#98A6BE', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontSize: '0.72rem', color: '#C2185B', fontWeight: 600 }}>Real Estate Agents</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: '#C2185B', opacity: 0.5 }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2185B' }}>
              For Independent Agents
            </span>
          </div>
          <h1 className="max-w-3xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 700, color: '#F8F6F2', lineHeight: 1.04, letterSpacing: '-0.03em' }}>
            Buyers are asking AI<br />
            <span style={{ color: '#C2185B', fontStyle: 'italic' }}>who to call.</span>
          </h1>
          <p className="mt-5 max-w-[34rem]" style={{ fontSize: '1rem', color: '#C9D3E3', lineHeight: 1.8 }}>
            Right now, buyers in your market are asking ChatGPT, Perplexity, and Gemini who to hire. The agents AI recommends will win those relationships. HeyPearl makes sure that agent is you.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold bg-[#C2185B] hover:bg-[#D62F73] text-[#07142F] transition-colors duration-200">
              Book a Strategy Call <ArrowRight size={14} />
            </a>
            <Link href="/platform" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: '#C9D3E3' }}>
              Explore the Platform <ArrowUpRight size={13} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Challenges */}
      <section className="py-28 bg-[#07142F]">
        <Container size="lg">
          <Reveal>
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>The Challenge</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F8F6F2', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              Why great agents<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>go invisible to AI.</span>
            </h2>
          </div>
          </Reveal>
          <Reveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
            style={{ border: '1px solid rgba(48,72,111,0.6)', borderRadius: '1rem', overflow: 'hidden' }}>
            {CHALLENGES.map((c, i) => (
              <div key={c.num} className="p-7 lg:p-8" style={{ background: i % 2 === 0 ? '#07142F' : '#07142F' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'rgba(182,146,94,0.15)', fontFamily: 'var(--font-playfair), Georgia, serif', lineHeight: 1, marginBottom: '0.75rem' }}>{c.num}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8F6F2', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.845rem', color: '#C9D3E3', lineHeight: 1.72 }}>{c.body}</p>
              </div>
            ))}
          </div>
          </Reveal>
        </Container>
      </section>

      {/* How it solves */}
      <section className="py-28 bg-[#07142F]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
                <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>How HeyPearl Solves It</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, color: '#F8F6F2', lineHeight: 1.1, letterSpacing: '-0.022em', marginBottom: '1.25rem' }}>
                One system that makes<br />
                <span style={{ color: '#C2185B', fontStyle: 'italic' }}>you the authority AI trusts.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#98A6BE', lineHeight: 1.8, marginBottom: '1rem' }}>
                PearlOS runs the P.E.A.R.L. framework across your specific market and specialty. It builds the entity architecture, authority pages, and content signals that AI engines use to identify and recommend trusted agents.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#98A6BE', lineHeight: 1.8 }}>
                The difference: HeyPearl doesn't optimize your website for Google — it engineers your AI presence from the ground up, targeting the exact buyer questions your future clients are already asking.
              </p>
            </div>
            </Reveal>
            <div className="space-y-4">
              {[
                { step: '01', label: 'Authority Score audit', desc: 'We measure your current AI visibility across six engines and identify exactly where the gaps are in your market.' },
                { step: '02', label: 'Entity & Knowledge Graph', desc: 'Your business is registered as a verified, unambiguous entity — correctly categorized by market, specialty, and geography.' },
                { step: '03', label: 'Authority Pages', desc: 'The citable infrastructure AI pulls from: market pages, specialty pages, FAQ content designed to answer the questions buyers are asking.' },
                { step: '04', label: 'GEO content layer', desc: 'Content engineered to be cited — not just read. Built to earn recommendations, not traffic.' },
                { step: '05', label: 'AI Visibility monitoring', desc: "Continuous monitoring so you always know where you stand, who's gaining on you, and what to do next." },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                <div className="flex gap-4 p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid #30486F' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#C2185B', flexShrink: 0, marginTop: '0.2rem', letterSpacing: '0.05em' }}>{item.step}</div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#F8F6F2', marginBottom: '0.25rem' }}>{item.label}</div>
                    <p style={{ fontSize: '0.82rem', color: '#C9D3E3', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Recommended Modules */}
      <RecommendedModules modules={MODULES} />

      {/* Outcomes */}
      <section className="py-24 bg-[#07142F]">
        <Container size="lg">
          <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>What You Get</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F8F6F2', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              Authority that compounds.<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>Not ads that expire.</span>
            </h2>
          </div>
          </Reveal>
          <Reveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px"
            style={{ border: '1px solid rgba(48,72,111,0.6)', borderRadius: '1rem', overflow: 'hidden' }}>
            {OUTCOMES.map((o, i) => (
              <div key={i} className="p-8 text-center" style={{ background: i % 2 === 0 ? '#07142F' : '#07142F' }}>
                <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2.5rem', fontWeight: 700, color: '#C2185B', lineHeight: 1, marginBottom: '0.75rem' }}>{o.metric}</div>
                <p style={{ fontSize: '0.875rem', color: '#98A6BE', lineHeight: 1.6 }}>{o.label}</p>
              </div>
            ))}
          </div>
          </Reveal>

          <Reveal delay={0.15}>
          <div className="mt-8 p-6 rounded-xl" style={{ background: 'rgba(194,24,91,0.04)', border: '1px solid rgba(182,146,94,0.1)' }}>
            <p style={{ fontSize: '0.875rem', color: '#98A6BE', lineHeight: 1.7, fontStyle: 'italic' }}>
              "A luxury agent in Seattle was being recommended by 14 AI queries that previously returned competitors. Within 90 days of PearlOS activation, those queries consistently named them as the primary recommendation."
            </p>
            <p className="mt-3" style={{ fontSize: '0.75rem', color: '#98A6BE' }}>Client details anonymized. Results represent real engagements — outcomes vary by market and engagement scope.</p>
          </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#07142F]">
        <Container size="lg">
          <Reveal>
          <div className="mb-12 max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>Questions</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#F8F6F2', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
              What agents ask<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>before they start.</span>
            </h2>
          </div>
          </Reveal>
          <div className="space-y-4 max-w-3xl">
            {FAQS.map((faq, i) => (
              <Reveal key={i} delay={i * 0.08}>
              <div className="p-6 rounded-xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid #30486F' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8F6F2', marginBottom: '0.6rem' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.845rem', color: '#C9D3E3', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="py-16 bg-[#07142F]">
        <Container size="lg">
          <div className="mb-8">
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>Related Solutions</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/solutions/brokerages', label: 'Brokerages', desc: 'Build authority at the brokerage level — the brand AI recommends.' },
              { href: '/solutions/teams', label: 'Real Estate Teams', desc: 'Unified AI authority for team leads and group structures.' },
            ].map((item, i) => (
              <Reveal key={item.href} delay={i * 0.08}>
              <Link href={item.href}
                className="group flex items-center gap-4 p-5 rounded-xl hover:bg-white/[0.02] transition-colors duration-200"
                style={{ border: '1px solid #30486F' }}>
                <div className="flex-1">
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#C9D3E3', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.8rem', color: '#C9D3E3' }}>{item.desc}</div>
                </div>
                <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-50 transition-opacity" style={{ color: '#C2185B' }} />
              </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#07142F]">
        <Container size="md" className="text-center">
          <Reveal>
          <h2 className="mb-5 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#F8F6F2', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
            Become the agent<br />
            <span style={{ color: '#C2185B', fontStyle: 'italic' }}>AI recommends.</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '0.95rem', color: '#C9D3E3', lineHeight: 1.75 }}>
            Book a strategy call. We'll audit your current AI visibility and show you exactly what it takes to become the recommended agent in your market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold bg-[#C2185B] hover:bg-[#D62F73] text-[#07142F] transition-colors duration-200">
              Book a Strategy Call <ArrowRight size={14} />
            </a>
            <Link href="/platform" className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid #30486F', color: '#C9D3E3' }}>
              Explore the Platform <ArrowRight size={14} />
            </Link>
          </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
