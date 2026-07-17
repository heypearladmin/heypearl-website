import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Solutions — HeyPearl for Your Business | HeyPearl',
  description:
    'HeyPearl builds the AI authority infrastructure for real estate agents, brokerages, service businesses, teams, and enterprise organizations. Find the solution built for your specific challenges.',
  openGraph: {
    title: 'HeyPearl Solutions — AI Authority for Your Business',
    description: 'The AI authority platform built around your specific business model, team size, and growth goals.',
    images: ['/images/og/og-solutions.webp'],
  },
};

const SOLUTIONS = [
  {
    href: '/solutions/real-estate-agents',
    label: 'Real Estate Agents',
    tagline: 'For independent agents',
    problem: "Buyers are asking AI who to call. Your name isn't in the answer.",
    outcome: 'Become the agent AI recommends for your market and specialty.',
  },
  {
    href: '/solutions/brokerages',
    label: 'Brokerages',
    tagline: 'For brokerage owners',
    problem: 'AI recommends individual agents, not the brokerage behind them.',
    outcome: 'Build authority at the brokerage level — the brand buyers recognize.',
  },
  {
    href: '/solutions/service-businesses',
    label: 'Service Businesses',
    tagline: 'For local & regional services',
    problem: "Your competitors are showing up in AI answers. You're invisible.",
    outcome: 'Make your business the service AI recommends in your category.',
  },
  {
    href: '/solutions/teams',
    label: 'Real Estate Teams',
    tagline: 'For team leads & group structures',
    problem: 'Your team has no unified AI presence. Authority is fragmented.',
    outcome: 'Build a team brand strong enough for AI to recommend by name.',
  },
  {
    href: '/solutions/enterprise',
    label: 'Enterprise',
    tagline: 'For large organizations',
    problem: 'Managing AI authority across regions, brands, and agents is impossible.',
    outcome: 'Centralized AI authority infrastructure, deployed at scale.',
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[62vh] flex flex-col justify-center bg-[#090909] overflow-hidden"
        aria-label="Solutions hero"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(191,155,92,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(191,155,92,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/3 w-[800px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse at top, rgba(191,155,92,0.06) 0%, transparent 65%)' }} />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: '#BF9B5C', opacity: 0.5 }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              Solutions
            </span>
          </div>
          <h1 className="max-w-3xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.04, letterSpacing: '-0.03em' }}>
            Built for your<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>specific business.</span>
          </h1>
          <p className="mt-6 max-w-[36rem]" style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.8 }}>
            The AI authority problem looks different depending on your business model, team size, and market. HeyPearl builds the platform around your specific challenges — not a generic playbook.
          </p>
        </Container>
      </section>

      {/* IA note */}
      <section className="py-16 bg-[#0A0A0A]">
        <Container size="lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px"
            style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
            {[
              { label: 'Platform', sub: 'What we built', href: '/platform', note: 'The operating system and modules' },
              { label: 'Solutions', sub: 'Who it\'s for', href: '/solutions', note: 'Your specific business context', active: true },
              { label: 'Results', sub: 'The proof', href: '/results', note: 'Real clients, real outcomes' },
            ].map((item, i) => (
              <Link key={item.href} href={item.href}
                className="block p-6 group"
                style={{ background: item.active ? 'rgba(191,155,92,0.05)' : (i % 2 === 0 ? '#0D0D0D' : '#0F0F0F'), borderLeft: item.active ? '2px solid rgba(191,155,92,0.4)' : 'none' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.active ? '#BF9B5C' : 'rgba(191,155,92,0.45)', marginBottom: '0.2rem' }}>{item.label}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: item.active ? '#F2EDE4' : 'rgba(242,237,228,0.5)', marginBottom: '0.3rem' }}>{item.sub}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(242,237,228,0.3)' }}>{item.note}</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions grid */}
      <section className="py-28 bg-[#090909]">
        <Container size="lg">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>Find Your Solution</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              The same platform.<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>Configured for your context.</span>
            </h2>
            <p className="mt-5" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.60)', lineHeight: 1.75 }}>
              Every HeyPearl engagement runs on PearlOS. What changes is how we apply the platform to the specific problems your business faces in the AI era.
            </p>
          </div>

          <div className="space-y-px" style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
            {SOLUTIONS.map((sol, i) => (
              <Link key={sol.href} href={sol.href}
                className="group flex flex-col sm:flex-row sm:items-center gap-5 p-7 lg:p-8 hover:bg-white/[0.015] transition-colors duration-200"
                style={{ background: i % 2 === 0 ? '#0D0D0D' : '#0F0F0F' }}>
                <div className="sm:w-52 shrink-0">
                  <div style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(191,155,92,0.55)', marginBottom: '0.2rem' }}>{sol.tagline}</div>
                  <div className="group-hover:text-[#BF9B5C] transition-colors duration-200" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#F2EDE4' }}>{sol.label}</div>
                </div>
                <div className="h-px sm:h-auto sm:w-px self-stretch shrink-0" style={{ background: 'rgba(255,255,255,0.05)' }} />
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.58)', marginBottom: '0.3rem' }}>The problem</div>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.6 }}>{sol.problem}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(191,155,92,0.45)', marginBottom: '0.3rem' }}>The outcome</div>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(242,237,228,0.65)', lineHeight: 1.6 }}>{sol.outcome}</p>
                  </div>
                </div>
                <ArrowUpRight size={14} className="hidden sm:block opacity-0 group-hover:opacity-50 transition-opacity shrink-0" style={{ color: '#BF9B5C' }} />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Platform reminder */}
      <section className="py-20 bg-[#0A0A0A]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
                <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>Powered by PearlOS</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em', marginBottom: '1rem' }}>
                Every solution runs<br />
                <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>on the same platform.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.60)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Whether you're a solo agent or a multi-region enterprise, the underlying infrastructure is the same — PearlOS orchestrating the P.E.A.R.L. framework across five connected modules.
              </p>
              <Link href="/platform" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#BF9B5C' }}>
                Explore the Platform <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: 'Authority Pages', href: '/platform/authority-pages' },
                { label: 'Authority Score', href: '/platform/authority-score' },
                { label: 'Knowledge Graph', href: '/platform/knowledge-graph' },
                { label: 'AI Visibility', href: '/platform/ai-visibility' },
                { label: 'GEO Engine', href: '/platform/geo-engine' },
              ].map((mod) => (
                <Link key={mod.href} href={mod.href}
                  className="group flex items-center justify-between px-5 py-3.5 rounded-lg hover:bg-white/[0.02] transition-colors duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(242,237,228,0.6)' }}>{mod.label}</span>
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-50 transition-opacity" style={{ color: '#BF9B5C' }} />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#090909]">
        <Container size="md" className="text-center">
          <h2 className="mb-5 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
            Not sure which solution<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>fits your situation?</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.60)', lineHeight: 1.75 }}>
            Book a strategy call. We'll review your current AI visibility, identify the gaps, and tell you exactly what an engagement looks like for your business.
          </p>
          <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200">
            See How It Works <ArrowRight size={14} />
          </a>
        </Container>
      </section>
    </>
  );
}
