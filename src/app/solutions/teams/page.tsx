import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { RecommendedModules } from '@/components/solutions/RecommendedModules';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'HeyPearl for Real Estate Teams — Unified AI Authority for Team Leads',
  description:
    'Your team has the talent. HeyPearl builds the unified AI authority that makes your team brand the one AI recommends — across every market, every specialty, every team member.',
  openGraph: {
    title: 'HeyPearl for Real Estate Teams — Build the Team Brand AI Recommends',
    description: 'AI authority infrastructure for team leads who want a unified brand presence that amplifies every agent on the team.',
  },
};

const CHALLENGES = [
  {
    num: '01',
    title: 'Your team has no unified AI presence.',
    body: "When buyers ask AI about your team, they may get individual agent recommendations — but nothing about the team brand. The team structure that gives you recruiting and operational advantages doesn't automatically translate to AI authority.",
  },
  {
    num: '02',
    title: 'Individual agent profiles fragment your authority.',
    body: 'Each agent on your team may have separate online presences, separate review profiles, separate social accounts. Without unified AI architecture, this creates fragmented signals that dilute team authority rather than concentrate it.',
  },
  {
    num: '03',
    title: 'Specialty depth goes unclaimed.',
    body: "Teams typically have agents specialized by buyer type, property type, or geography. This specialization should translate to AI recommendation dominance in each niche — but without deliberate AI authority architecture, those niches go unclaimed.",
  },
  {
    num: '04',
    title: "Team growth doesn't compound AI authority.",
    body: "Adding agents should strengthen your AI presence. But without a unified entity framework, new team members create new fragmented signals rather than reinforcing the team brand. Growth dilutes rather than amplifies.",
  },
];

const MODULES = [
  {
    label: 'Knowledge Graph',
    href: '/platform/knowledge-graph',
    tagline: 'Module 03',
    reason: 'Builds a hierarchical entity structure for your team — team brand at the top, individual agents beneath it — so AI engines understand and recommend both the team and its specialists.',
  },
  {
    label: 'Authority Pages',
    href: '/platform/authority-pages',
    tagline: 'Module 01',
    reason: 'Team-level and specialty-level authority pages — the citable infrastructure that AI pulls from when recommending your team for specific buyer profiles.',
  },
  {
    label: 'AI Visibility',
    href: '/platform/ai-visibility',
    tagline: 'Module 04',
    reason: 'Monitors team-level and individual agent visibility across six AI engines — so you can see where your team is winning recommendations and where rival teams are competing.',
  },
  {
    label: 'GEO Engine',
    href: '/platform/geo-engine',
    tagline: 'Module 05',
    reason: 'Specialty-specific content that makes your team the AI-recommended resource for each niche your agents own — buyer type, property type, and geography.',
  },
];

const FAQS = [
  {
    q: 'How does HeyPearl handle teams with different specialties or territories?',
    a: 'PearlOS builds entity architecture at the team level with specialty sub-entities for each focus area. A buyer asking about luxury condos gets your luxury specialist. A buyer asking about first-time buyers gets your FTB specialist — all under the team brand.',
  },
  {
    q: 'Can new agents be added to the AI authority system as the team grows?',
    a: "Yes. The hierarchical entity framework is designed to accommodate team growth. New agents are onboarded into the existing authority structure — they benefit immediately from the team's established AI presence while adding their own specialty signals.",
  },
  {
    q: 'What if some of our agents already have strong individual online presences?',
    a: 'Good news. Established individual authority is a foundation to build on, not a problem to overcome. PearlOS can incorporate existing authority signals into the unified team framework — strengthening the team entity without disrupting what agents have already built.',
  },
  {
    q: 'How does team-level authority differ from individual agent authority?',
    a: 'Team authority targets category-level queries: "best real estate team in [city]," "top team for [buyer type]." Individual authority targets agent-specific queries. Both are needed, and both reinforce each other when built on a unified entity framework.',
  },
];

export default function TeamsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[68vh] flex flex-col justify-center bg-[#090909] overflow-hidden"
        aria-label="Teams hero"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(191,155,92,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(191,155,92,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div aria-hidden className="pointer-events-none absolute top-1/4 right-1/4 w-[600px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(191,155,92,0.06) 0%, transparent 65%)' }} />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Link href="/solutions" className="text-xs" style={{ color: 'rgba(242,237,228,0.35)' }}>Solutions</Link>
            <span style={{ color: 'rgba(242,237,228,0.2)', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontSize: '0.72rem', color: '#BF9B5C', fontWeight: 600 }}>Real Estate Teams</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: '#BF9B5C', opacity: 0.5 }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              For Team Leads
            </span>
          </div>
          <h1 className="max-w-3xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.04, letterSpacing: '-0.03em' }}>
            One team brand.<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>Every AI engine.</span>
          </h1>
          <p className="mt-5 max-w-[34rem]" style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.8 }}>
            Your team's strength is in its specialists and its brand. HeyPearl builds the unified AI authority infrastructure that makes buyers — and the AI they use to find agents — recognize and recommend your team by name.
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
              Why strong teams<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>lose the AI recommendation.</span>
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
                Authority that compounds<br />
                <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>as your team grows.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.8, marginBottom: '1rem' }}>
                PearlOS builds a hierarchical entity structure with your team brand at the center and individual agent entities properly connected beneath it. Every new agent, every new specialty, every new geography reinforces the unified brand rather than fragmenting it.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.8 }}>
                The result is a team AI presence that's stronger than the sum of its parts — where buyers asking for any specialty your team covers find your brand first.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { step: '01', label: 'Team entity framework', desc: 'Your team brand is established as the primary entity — a distinct, verifiable identity that AI engines can recommend at the team level.' },
                { step: '02', label: 'Specialty sub-entities', desc: "Each agent's specialty and territory is registered as a connected sub-entity — so AI can recommend the right specialist for any buyer query." },
                { step: '03', label: 'Unified Authority Pages', desc: 'Team-level and specialty-level authority pages that both earn individual citations and reinforce the parent team entity.' },
                { step: '04', label: 'Compounding monitoring', desc: 'Track team AI visibility at both the brand level and the individual agent level — so you know where authority is compounding and where gaps remain.' },
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
              "A real estate team in Scottsdale saw a 3× increase in AI recommendation frequency across their market — within a single quarter of PearlOS activation."
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
              What team leads ask<br />
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
              { href: '/solutions/brokerages', label: 'Brokerages', desc: 'For brokerage owners building AI authority at the brand level.' },
              { href: '/solutions/real-estate-agents', label: 'Real Estate Agents', desc: 'For independent agents building authority in their market.' },
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
            Build the team brand<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>AI recommends first.</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.45)', lineHeight: 1.75 }}>
            Book a strategy call. We'll audit your team's current AI visibility and show you what a unified authority build looks like for your specific structure.
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
