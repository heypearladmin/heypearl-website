import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { RecommendedModules } from '@/components/solutions/RecommendedModules';
import { site } from '@/lib/site';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'HeyPearl for Enterprise — AI Authority at Scale',
  description:
    'Centralized AI authority infrastructure for large real estate organizations managing multiple regions, brands, and agents. HeyPearl builds and monitors AI presence across your entire operation.',
  openGraph: {
    title: 'HeyPearl for Enterprise — Scale AI Authority Across Your Organization',
    description: 'The AI authority platform for large organizations that need centralized AI visibility management across regions, brands, and agents.',
    images: ['/images/og/og-solutions.webp'],
  },
};

const CHALLENGES = [
  {
    num: '01',
    title: 'Managing AI authority across regions is impossible without infrastructure.',
    body: 'Each region or office develops its own fragmented approach to online presence. Without centralized AI authority architecture, you have hundreds of agents each creating inconsistent signals that weaken the parent brand rather than reinforce it.',
  },
  {
    num: '02',
    title: "Brand consistency doesn't translate to AI consistency.",
    body: "Your brand guidelines ensure visual and messaging consistency — but AI engines build their knowledge of your organization from entity signals, structured data, and citation patterns that brand guidelines don't cover. The gap between your brand and your AI representation can be massive.",
  },
  {
    num: '03',
    title: 'AI visibility blind spots are organization-wide risks.',
    body: 'When an enterprise has no AI monitoring, a significant inaccuracy or competitive displacement in one region goes undetected for months. At scale, AI representation errors compound and are significantly harder to correct the longer they persist.',
  },
  {
    num: '04',
    title: "Individual-level AI authority doesn't scale without a system.",
    body: 'Asking each agent to manage their own AI presence produces inconsistent results and enormous operational overhead. A scalable AI authority system requires centralized infrastructure that individual agents and teams can operate within — not depend on independently.',
  },
];

const MODULES = [
  {
    label: 'PearlOS',
    href: '/platform/pearlos',
    tagline: 'The Operating System',
    reason: 'The enterprise-grade orchestration layer that coordinates AI authority across regions, brands, and agents — running the P.E.A.R.L. framework at organizational scale.',
  },
  {
    label: 'Authority Score',
    href: '/platform/authority-score',
    tagline: 'Module 02',
    reason: 'Organization-wide AI visibility measurement — by region, by brand, by agent — so leadership knows where authority is strongest and where gaps are growing.',
  },
  {
    label: 'Knowledge Graph',
    href: '/platform/knowledge-graph',
    tagline: 'Module 03',
    reason: 'Multi-level entity architecture that maps your organizational structure into AI knowledge graphs — parent brand, regional brands, and individual agents all properly connected.',
  },
  {
    label: 'AI Visibility',
    href: '/platform/ai-visibility',
    tagline: 'Module 04',
    reason: 'Continuous monitoring across all six AI engines — with organization-wide dashboards, regional alerts, and competitive intelligence that keeps leadership informed without requiring manual investigation.',
  },
];

const CAPABILITIES = [
  { title: 'Multi-level entity architecture', desc: 'Hierarchical entity structure from parent organization to regional brand to individual agent — properly connected so authority flows both up and down the structure.' },
  { title: 'Centralized AI monitoring', desc: 'Organization-wide AI Visibility monitoring across six engines — with regional drill-down, agent-level data, and executive reporting.' },
  { title: 'Brand consistency enforcement', desc: 'AI authority standards deployed consistently across all regions and agents — preventing brand fragmentation at the entity level, not just the visual level.' },
  { title: 'Regional competitive intelligence', desc: 'Know which competitors are gaining AI recommendation share in each of your markets — before it shows up in pipeline data.' },
  { title: 'Scalable authority deployment', desc: 'Systems and frameworks that can onboard new regions, new agents, and new markets without rebuilding from scratch each time.' },
  { title: 'Executive AI authority reporting', desc: 'Quarterly authority reports that translate AI visibility data into strategic intelligence — for leadership teams that need to track AI presence as a business metric.' },
];

const FAQS = [
  {
    q: 'How does HeyPearl handle organizations with multiple brands?',
    a: 'PearlOS is designed for multi-brand environments. Each brand gets its own entity architecture that operates independently while connecting to the parent organization structure. Brand-level authority compounds without bleeding into adjacent brands.',
  },
  {
    q: 'Can HeyPearl work with our existing marketing infrastructure and vendors?',
    a: "Yes. HeyPearl operates as an AI authority layer — complementary to your existing website infrastructure, content teams, and marketing technology stack. We build the AI-specific components that existing vendors typically don't address.",
  },
  {
    q: 'What does enterprise engagement look like operationally?',
    a: 'Enterprise engagements include a dedicated strategy engagement, phased regional rollout, centralized PearlOS dashboard access, and quarterly strategic reviews. Scope is customized to your organizational complexity and geographic footprint.',
  },
  {
    q: 'How do we measure ROI at the enterprise level?',
    a: 'AI Visibility monitoring provides the primary metrics: recommendation frequency by region, share of voice by category, and citation accuracy across six engines. These are tracked quarterly against baselines established at engagement start.',
  },
];

export default function EnterprisePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[68vh] flex flex-col justify-center bg-[#07142F] overflow-hidden"
        aria-label="Enterprise hero"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(194,24,91,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(194,24,91,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[800px] h-[600px]"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(194,24,91,0.06) 0%, transparent 65%)' }} />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Link href="/solutions" className="text-xs" style={{ color: '#C9D3E3' }}>Solutions</Link>
            <span style={{ color: '#98A6BE', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontSize: '0.72rem', color: '#C2185B', fontWeight: 600 }}>Enterprise</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: '#C2185B', opacity: 0.5 }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2185B' }}>
              For Large Organizations
            </span>
          </div>
          <h1 className="max-w-3xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 700, color: '#F8F6F2', lineHeight: 1.04, letterSpacing: '-0.03em' }}>
            AI authority<br />
            <span style={{ color: '#C2185B', fontStyle: 'italic' }}>at organizational scale.</span>
          </h1>
          <p className="mt-5 max-w-[34rem]" style={{ fontSize: '1rem', color: '#C9D3E3', lineHeight: 1.8 }}>
            Managing AI authority across regions, brands, and hundreds of agents requires infrastructure, not individual effort. HeyPearl builds the centralized AI authority system that large organizations need — and the monitoring to know it's working.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold bg-[#C2185B] hover:bg-[#D62F73] text-[#07142F] transition-colors duration-200">
              Talk to Our Team <ArrowRight size={14} />
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
              Why large organizations<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>face the biggest AI gaps.</span>
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

      {/* Capabilities */}
      <section className="py-28 bg-[#07142F]">
        <Container size="lg">
          <Reveal>
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>Enterprise Capabilities</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F8F6F2', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              Built for organizations<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>that can't afford blind spots.</span>
            </h2>
          </div>
          </Reveal>
          <Reveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ border: '1px solid rgba(48,72,111,0.6)', borderRadius: '1rem', overflow: 'hidden' }}>
            {CAPABILITIES.map((item, i) => (
              <div key={item.title} className="p-7" style={{ background: i % 2 === 0 ? '#07142F' : '#07142F' }}>
                <div className="h-px mb-5" style={{ background: 'rgba(182,146,94,0.1)' }} />
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8F6F2', letterSpacing: '-0.01em', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.83rem', color: '#C9D3E3', lineHeight: 1.72 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          </Reveal>
        </Container>
      </section>

      {/* Recommended Modules */}
      <RecommendedModules
        modules={MODULES}
        headline={<>The full platform.<br /><span style={{ color: '#C2185B', fontStyle: 'italic' }}>Deployed at enterprise scale.</span></>}
      />

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
              What enterprise teams ask<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>before they engage.</span>
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
              { href: '/solutions/brokerages', label: 'Brokerages', desc: 'For brokerage owners building AI authority at the brand level.' },
              { href: '/solutions/teams', label: 'Real Estate Teams', desc: 'For team leads building unified AI authority across their group.' },
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
            Ready to build AI authority<br />
            <span style={{ color: '#C2185B', fontStyle: 'italic' }}>across your organization?</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '0.95rem', color: '#C9D3E3', lineHeight: 1.75 }}>
            Enterprise engagements start with a strategic assessment of your organization's AI visibility gaps. Talk to our team about scope, structure, and what a phased rollout looks like.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold bg-[#C2185B] hover:bg-[#D62F73] text-[#07142F] transition-colors duration-200">
              Talk to Our Team <ArrowRight size={14} />
            </a>
            <Link href="/platform/pearlos" className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid #30486F', color: '#C9D3E3' }}>
              Learn about PearlOS <ArrowRight size={14} />
            </Link>
          </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
