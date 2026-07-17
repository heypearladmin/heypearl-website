import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { RecommendedModules } from '@/components/solutions/RecommendedModules';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'HeyPearl for Service Businesses — AI Authority for Local & Regional Services',
  description:
    'When buyers ask AI who to hire for your service category, is your business the answer? HeyPearl builds the AI authority infrastructure that makes local and regional service businesses the recommended choice.',
  openGraph: {
    title: 'HeyPearl for Service Businesses — Be the Service AI Recommends',
    description: 'The AI authority platform for service businesses losing ground to competitors who built their AI presence first.',
    images: ['/images/og/og-solutions.webp'],
  },
};

const CHALLENGES = [
  {
    num: '01',
    title: "Competitors are showing up in AI answers. You're not.",
    body: "Buyers ask AI who's the best service near me or which provider to call in their city. These queries produce AI-generated recommendations — and if your competitors have AI authority infrastructure and you don't, they win every time.",
  },
  {
    num: '02',
    title: "Reviews and local listings don't translate to AI visibility.",
    body: "You may have hundreds of five-star reviews and a fully claimed Google Business Profile. But AI engines don't pull their recommendations from review platforms — they use entity knowledge graphs, structured data, and authority signals. These are entirely different systems.",
  },
  {
    num: '03',
    title: "AI can't accurately describe what you do or where you serve.",
    body: "Without proper entity architecture, AI engines either don't mention your business or describe it incorrectly — wrong service area, wrong specialty, wrong positioning. Inaccurate AI representation actively suppresses recommendation frequency.",
  },
  {
    num: '04',
    title: "You don't know what AI is saying about you right now.",
    body: "Most service businesses have no idea whether they're being recommended by AI — or what AI says when a buyer asks about their service category. The gap is real, and it's growing every quarter as AI search usage increases.",
  },
];

const MODULES = [
  {
    label: 'Knowledge Graph',
    href: '/platform/knowledge-graph',
    tagline: 'Module 03',
    reason: 'Registers your service business as a verified entity — correctly categorized by service type, geography, and buyer intent so AI engines can recommend you confidently.',
  },
  {
    label: 'Authority Pages',
    href: '/platform/authority-pages',
    tagline: 'Module 01',
    reason: 'Service pages and location pages built to be the source AI pulls from when buyers ask about your category and service area.',
  },
  {
    label: 'GEO Engine',
    href: '/platform/geo-engine',
    tagline: 'Module 05',
    reason: 'Content engineered around the specific questions buyers in your service category are asking AI — built to earn citations, not just traffic.',
  },
  {
    label: 'Authority Score',
    href: '/platform/authority-score',
    tagline: 'Module 02',
    reason: 'Identifies the exact gaps between your current AI visibility and the visibility of competitors who are being recommended in your place.',
  },
];

const FAQS = [
  {
    q: 'Does this work for non-real-estate service businesses?',
    a: 'Yes. HeyPearl works for any service business where buyers use AI to find and vet providers — home services, professional services, wellness, legal, financial, and many others. The AI authority problem is not real-estate-specific.',
  },
  {
    q: 'How is this different from local SEO?',
    a: 'Local SEO optimizes your business to rank in Google Maps and organic search. AI authority optimization makes your business the recommended answer in AI-generated responses — which operate on entirely different mechanisms: entity graphs, structured data, and authority signals, not keywords and backlinks.',
  },
  {
    q: 'Can a small local service business compete with large regional players?',
    a: "Often, yes. Large competitors with high brand recognition may have lower AI authority than their reputation suggests — because their size doesn't automatically translate into AI-ready entity architecture. A small business with the right infrastructure often outperforms a large one in local AI recommendations.",
  },
  {
    q: 'What types of service businesses are the best fit?',
    a: "Service businesses where buyers research and vet providers before making a decision — real estate, financial advisory, legal, medical, home services, coaching, consulting. If buyers ask for recommendations, there's an AI authority opportunity.",
  },
];

export default function ServiceBusinessesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[68vh] flex flex-col justify-center bg-[#090909] overflow-hidden"
        aria-label="Service Businesses hero"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(191,155,92,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(191,155,92,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 left-0 w-[600px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(191,155,92,0.07) 0%, transparent 65%)' }} />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Link href="/solutions" className="text-xs" style={{ color: 'rgba(242,237,228,0.55)' }}>Solutions</Link>
            <span style={{ color: 'rgba(242,237,228,0.2)', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontSize: '0.72rem', color: '#BF9B5C', fontWeight: 600 }}>Service Businesses</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: '#BF9B5C', opacity: 0.5 }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              For Local & Regional Services
            </span>
          </div>
          <h1 className="max-w-3xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.04, letterSpacing: '-0.03em' }}>
            Be the service<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>AI recommends.</span>
          </h1>
          <p className="mt-5 max-w-[34rem]" style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.8 }}>
            When buyers ask AI who to hire, which service to call, who to trust in your category — the businesses with AI authority infrastructure win that recommendation. HeyPearl builds that infrastructure for you.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200">
              Book a Strategy Call <ArrowRight size={14} />
            </a>
            <Link href="/platform" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'rgba(242,237,228,0.60)' }}>
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
              Why great service businesses<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>go invisible to AI.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
            style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
            {CHALLENGES.map((c, i) => (
              <div key={c.num} className="p-7 lg:p-8" style={{ background: i % 2 === 0 ? '#0D0D0D' : '#0F0F0F' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'rgba(191,155,92,0.15)', fontFamily: 'var(--font-playfair), Georgia, serif', lineHeight: 1, marginBottom: '0.75rem' }}>{c.num}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F2EDE4', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.845rem', color: 'rgba(242,237,228,0.60)', lineHeight: 1.72 }}>{c.body}</p>
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
                AI authority built<br />
                <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>for your service category.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.8, marginBottom: '1rem' }}>
                PearlOS applies the P.E.A.R.L. framework to your specific service type, geography, and buyer journey. The result is an AI presence specifically calibrated for the queries buyers in your category are asking.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.8 }}>
                Every layer — entity architecture, authority pages, reputation signals, and GEO content — is built around the buyer questions and competitor gaps specific to your service market. No generic playbook.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { step: '01', label: 'Category entity verification', desc: 'Your business is registered and verified in the service category your buyers use when asking AI — not a generic business category.' },
                { step: '02', label: 'Service-specific Authority Pages', desc: 'Pages built to answer the exact questions buyers ask before hiring in your category — formatted and structured the way AI engines cite.' },
                { step: '03', label: 'Local AI coverage', desc: 'GEO content and entity signals covering your service area — so AI engines recommend you for location-specific buyer queries.' },
                { step: '04', label: 'Competitive gap closure', desc: 'Authority Score identifies which competitors are winning your AI recommendations — and GEO Engine closes those gaps systematically.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(191,155,92,0.6)', flexShrink: 0, marginTop: '0.2rem', letterSpacing: '0.05em' }}>{item.step}</div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#F2EDE4', marginBottom: '0.25rem' }}>{item.label}</div>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Recommended Modules */}
      <RecommendedModules modules={MODULES} />

      {/* FAQ */}
      <section className="py-24 bg-[#0A0A0A]">
        <Container size="lg">
          <div className="mb-12 max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>Questions</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
              What service businesses ask<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>before they start.</span>
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F2EDE4', marginBottom: '0.6rem' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.845rem', color: 'rgba(242,237,228,0.60)', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="py-16 bg-[#090909]">
        <Container size="lg">
          <div className="mb-8">
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>Related Solutions</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/solutions/real-estate-agents', label: 'Real Estate Agents', desc: 'For agents who want to be the recommended choice in their market.' },
              { href: '/solutions/teams', label: 'Real Estate Teams', desc: 'For team leads building unified AI authority across their group.' },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                className="group flex items-center gap-4 p-5 rounded-xl hover:bg-white/[0.02] transition-colors duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex-1">
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'rgba(242,237,228,0.75)', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(242,237,228,0.55)' }}>{item.desc}</div>
                </div>
                <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-50 transition-opacity" style={{ color: '#BF9B5C' }} />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A0A0A]">
        <Container size="md" className="text-center">
          <h2 className="mb-5 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
            Own your category<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>in AI search.</span>
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.60)', lineHeight: 1.75 }}>
            Book a strategy call. We'll audit your current AI visibility and show you exactly what competitors are doing in AI search that you're not — and how to close the gap.
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
