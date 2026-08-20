import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';
import { DASHBOARD_METRICS, CASE_STUDIES, RECENT_WINS, TESTIMONIALS } from '@/data/results';

export const metadata: Metadata = {
  title: 'Results — Measurable AI Authority Outcomes | HeyPearl',
  description:
    'Real outcomes from real HeyPearl engagements — authority growth, AI citation frequency, share of voice, and business transformation across real estate agents, brokerages, and service businesses.',
  alternates: { canonical: 'https://heypearl.io/results' },
  openGraph: {
    title: 'HeyPearl Results — The Proof Center',
    description: 'Measurable AI authority outcomes from real engagements. Not testimonials. Evidence.',
    images: ['/images/og/og-results.webp'],
  },
};

// ─── Static data ──────────────────────────────────────────────────────────────

const METHODOLOGY_STEPS = [
  {
    num: '01',
    title: 'Baseline Authority Audit',
    desc: 'Every engagement begins with a full Authority Score audit — measuring AI recommendation frequency across six engines, entity verification status, Knowledge Graph completeness, and competitive share of voice in the primary market category.',
  },
  {
    num: '02',
    title: '30-Day Foundation Build',
    desc: 'Entity architecture, Knowledge Graph registration, and schema deployment happen in the first 30 days. This is the infrastructure layer that every subsequent module depends on.',
  },
  {
    num: '03',
    title: '60-Day Authority Deployment',
    desc: 'Authority Pages go live, GEO content begins publishing, and the first AI citation data becomes measurable. AI Visibility monitoring is active across all six engines.',
  },
  {
    num: '04',
    title: '90-Day Review',
    desc: 'Full Authority Score re-measurement against baseline. Recommendation frequency, share of voice, entity accuracy, and citation coverage are all compared to Day 1 numbers. This is when results become visible.',
  },
  {
    num: '05',
    title: 'Ongoing Growth',
    desc: 'Visibility builds monthly as GEO content matures, entity signals strengthen, and AI engines index new authority pages. Post-90-day engagements track continued growth and close emerging competitive gaps.',
  },
];

const KPI_DEFINITIONS = [
  { kpi: 'Authority Score', def: 'A 0–100 composite score measuring how well-positioned a business is to receive AI recommendations — entity clarity, content depth, citation signals, and competitive share of voice.' },
  { kpi: 'AI Recommendation Frequency', def: 'How often a business appears as a recommended answer across a defined set of buyer queries — measured monthly across six AI engines.' },
  { kpi: 'Knowledge Graph Completion', def: 'The percentage of critical entity signals (name, category, location, expertise, schema, cross-platform consistency) that are verified and correctly mapped.' },
  { kpi: 'Share of Voice', def: "A business's percentage of AI-generated recommendations in its market category — the primary measure of AI competitive position." },
  { kpi: 'Entity Accuracy', def: 'Whether AI engines describe a business correctly — right name, service, location, and positioning. Errors and omissions are tracked and corrected.' },
  { kpi: 'Citation Coverage', def: 'The number of distinct buyer queries for which a business is cited as a recommendation — measured by query category, geography, and specialization.' },
];


// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[72vh] flex flex-col justify-center bg-white overflow-hidden"
        aria-label="Results hero"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(194,24,91,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(194,24,91,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div aria-hidden className="pointer-events-none absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block">
          <Image src="/images/new-hero-images/hero-results.jpg" alt="" fill sizes="45vw" className="object-cover opacity-35" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.85) 20%, rgba(255,255,255,0.3) 65%, rgba(255,255,255,0.05) 100%)' }} />
        </div>

        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.5)' }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2185B' }}>
              The Proof Center
            </span>
          </div>
          <h1 className="max-w-4xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', fontWeight: 700, color: '#1E3A66', lineHeight: 1.02, letterSpacing: '-0.03em' }}>
            Measurable authority.<br />
            <span style={{ color: '#C2185B', fontStyle: 'italic' }}>Documented outcomes.</span>
          </h1>
          <p className="mt-6 max-w-[38rem]" style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.8 }}>
            Every claim on this page is backed by client data from real PearlOS engagements. These are not satisfaction scores. They are measurable changes in AI authority — tracked from Day 1 through Day 90 and beyond.
          </p>

          {/* Hero stat strip — populated from DASHBOARD_METRICS */}
          <div className="mt-12 grid grid-cols-2 gap-px max-w-xl"
            style={{ border: '1px solid #E7E3DD', borderRadius: '0.875rem', overflow: 'hidden' }}>
            {DASHBOARD_METRICS.map((m, i) => (
              <div key={i} className="px-4 sm:px-6 py-5" style={{ background: i === 1 ? 'rgba(194,24,91,0.05)' : '#FFFFFF' }}>
                <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#C2185B', lineHeight: 1, whiteSpace: 'nowrap' }}>
                  {m.value}
                </div>
                <div className="mt-1" style={{ fontSize: '0.72rem', color: '#334155', lineHeight: 1.4 }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Dashboard preview images */}
      <section className="py-16 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/10', border: '1px solid rgba(182,146,94,0.15)', boxShadow: '0 24px 48px rgba(30,58,102,0.5)' }}>
              <Image src="/images/results/results-dashboard.webp" alt="Results dashboard" fill sizes="50vw" className="object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/10', border: '1px solid rgba(182,146,94,0.12)', boxShadow: '0 24px 48px rgba(30,58,102,0.5)' }}>
              <Image src="/images/results/results-metrics.webp" alt="Results metrics" fill sizes="50vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* Dashboard */}
      <section className="py-24 bg-[#F8F5F0]" aria-label="Results dashboard">
        <Container size="lg">
          <Reveal className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>Performance Dashboard</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#1E3A66', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              The infrastructure<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>behind every engagement.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DASHBOARD_METRICS.map((m, i) => (
              <div key={i} className="p-6 rounded-xl flex flex-col gap-3"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid #E7E3DD' }}>
                <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: '#C2185B', lineHeight: 1 }}>{m.value}</div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1E3A66', lineHeight: 1.4, marginBottom: '0.2rem' }}>{m.label}</div>
                  <div style={{ fontSize: '0.72rem', color: '#334155' }}>{m.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Authority Score methodology panel */}
          <div className="mt-8 p-7 lg:p-9 rounded-2xl" style={{ background: 'rgba(194,24,91,0.04)', border: '1px solid rgba(182,146,94,0.1)' }}>
            <div className="flex-1">
              <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B', marginBottom: '0.75rem' }}>How Authority Score Works</div>
              <h3 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', fontWeight: 700, color: '#1E3A66', lineHeight: 1.2, marginBottom: '0.75rem' }}>
                From baseline to competitive authority.
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.75 }}>
                Authority Score is a 0–100 composite metric measured at engagement start and re-measured at Day 30, Day 60, and Day 90 against that same baseline. The individual case studies below show each client's actual starting point and measured progress — we don't publish a blended average across engagements until enough of them have completed a full 90-day cycle to support one honestly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Recent Wins */}
      <section id="recent-wins" className="py-20 bg-white" aria-label="Recent wins">
        <Container size="lg">
          <Reveal className="mb-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
                  <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>Recent Wins</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#1E3A66', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
                  What's happening<br />
                  <span style={{ color: '#C2185B', fontStyle: 'italic' }}>in active engagements.</span>
                </h2>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.7, maxWidth: '28rem' }}>
                Specific milestones, observed as they happen. Each win is tied to a real engagement — named by hyperlocal area, not by client.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RECENT_WINS.map((win, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="p-5 rounded-xl flex flex-col gap-3 h-full"
                  style={{ border: '1px solid #E7E3DD', background: '#F8F5F0' }}>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1E3A66', lineHeight: 1.3 }}>{win.handle}</div>
                      <div style={{ fontSize: '0.62rem', color: '#94A3B8', fontWeight: 500, marginTop: '0.15rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{win.segment}</div>
                    </div>
                    <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#C2185B', background: 'rgba(194,24,91,0.08)', border: '1px solid rgba(194,24,91,0.15)', borderRadius: '0.3rem', padding: '0.2rem 0.5rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
                      {win.engine}
                    </span>
                  </div>

                  {/* Win */}
                  <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: 1.65, flex: 1 }}>{win.result}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid rgba(48,72,111,0.08)' }}>
                    <span style={{ fontSize: '0.68rem', color: '#64748B' }}>Day <span style={{ fontWeight: 700, color: '#C2185B' }}>{win.dayFromActivation}</span> from activation</span>
                    <span style={{ fontSize: '0.62rem', color: '#94A3B8' }}>{win.month}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-28 bg-[#F8F5F0]" aria-label="Case studies">
        <Container size="lg">
          <div className="mb-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>Featured Case Studies</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#1E3A66', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              Real clients.<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>Documented outcomes.</span>
            </h2>
            <p className="mt-5" style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.75 }}>
              Client details are anonymized by request. Market context and results are real.
            </p>
          </div>

          <div className="space-y-8">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.id} className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid #E7E3DD', background: '#F8F5F0' }}>
                {/* Card header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-8 py-5"
                  style={{ borderBottom: '1px solid #E7E3DD', background: 'rgba(194,24,91,0.04)' }}>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(182,146,94,0.6)' }}>{cs.label}</span>
                    <span aria-hidden style={{ color: '#CBD5E1' }}>·</span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1E3A66' }}>{cs.handle}</span>
                    <span aria-hidden style={{ color: '#CBD5E1' }}>·</span>
                    <span style={{ fontSize: '0.62rem', color: '#64748B', fontWeight: 500 }}>{cs.city}</span>
                    <span aria-hidden style={{ color: '#CBD5E1' }}>·</span>
                    <span style={{ fontSize: '0.62rem', color: 'rgba(182,146,94,0.6)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{cs.segment}</span>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 500 }}>
                      Timeline: <span style={{ color: '#C2185B', fontWeight: 700 }}>{cs.timeline}</span>
                    </span>
                    <span style={{ fontSize: '0.62rem', color: '#94A3B8' }}>Updated {cs.updatedAt}</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  {/* Left: narrative */}
                  <div className="p-8 space-y-6" style={{ background: '#F8F5F0' }}>
                    <div>
                      <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '0.5rem' }}>The Challenge</div>
                      <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.75 }}>{cs.challenge}</p>
                    </div>
                    <div className="h-px" style={{ background: 'rgba(48,72,111,0.35)' }} />
                    <div>
                      <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '0.5rem' }}>The Solution</div>
                      <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.75 }}>{cs.solution}</p>
                    </div>
                    <div className="h-px" style={{ background: 'rgba(48,72,111,0.35)' }} />
                    <div>
                      <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '0.5rem' }}>Modules Used</div>
                      <div className="flex flex-wrap gap-2">
                        {cs.modules.map((m) => (
                          <span key={m} style={{ fontSize: '0.68rem', fontWeight: 600, color: '#C2185B', background: 'rgba(194,24,91,0.08)', border: '1px solid rgba(182,146,94,0.2)', borderRadius: '0.375rem', padding: '0.2rem 0.6rem' }}>{m}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: results */}
                  <div className="p-8 flex flex-col gap-6" style={{ background: '#FFFFFF' }}>
                    <div>
                      <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(182,146,94,0.55)', marginBottom: '1rem' }}>Measured Results</div>
                      <div className="space-y-4">
                        {cs.results.map((r, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#C2185B', lineHeight: 1, flexShrink: 0, width: '5rem' }}>{r.metric}</div>
                            <div style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.65, paddingTop: '0.25rem' }}>{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="h-px mb-5" style={{ background: 'rgba(48,72,111,0.35)' }} />
                      <blockquote>
                        <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: '#334155', lineHeight: 1.7, marginBottom: '0.5rem' }}>"{cs.quote}"</p>
                        <footer style={{ fontSize: '0.68rem', color: '#64748B' }}>— {cs.handle}, {cs.city}</footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Before / After */}
      <section className="py-24 bg-[#F8F5F0]" aria-label="Before and after">
        <Container size="lg">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>Before vs. After</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#1E3A66', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              What changes.<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>What stays the same.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid #E7E3DD' }}>
            {/* Before */}
            <div className="p-8" style={{ background: '#FFFFFF' }}>
              <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#64748B', marginBottom: '1.5rem' }}>Before PearlOS</div>
              <div className="space-y-4">
                {[
                  'AI engines cannot confidently identify or categorize the business',
                  'Buyer queries in the primary market return competitor names',
                  'Entity signals are inconsistent across citation sources',
                  'No measurement of AI recommendation frequency',
                  'Authority compounds for competitors while yours stagnates',
                  'AI visibility loss is silent — you find out when leads drop',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span style={{ color: 'rgba(245,241,232,0.2)', flexShrink: 0, marginTop: '0.15rem' }}>—</span>
                    <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.65 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="p-8" style={{ background: '#FFFFFF' }}>
              <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B', marginBottom: '1.5rem' }}>After 90 Days</div>
              <div className="space-y-4">
                {[
                  'Verified entity — correctly categorized across all six AI engines',
                  'Named as the primary AI recommendation across most or all tracked buyer queries in your category',
                  'Knowledge Graph complete, NAP consistent, schema active',
                  'AI Visibility monitoring running — changes detected within the cycle',
                  'Visibility building monthly as content and signals mature',
                  'Clear sight line into share of voice and competitive position',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span style={{ color: '#C2185B', flexShrink: 0, marginTop: '0.15rem' }}>→</span>
                    <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.65 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline bar */}
          <div className="mt-8 p-6 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #E7E3DD' }}>
            <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B', marginBottom: '1rem' }}>Typical Engagement Timeline</div>
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-[5px] left-[calc(12.5%)] right-[calc(12.5%)] h-px" style={{ background: 'rgba(182,146,94,0.25)' }} aria-hidden="true" />
              <div className="relative flex items-start">
                {[
                  { day: 'Day 0', label: 'Authority Score audit' },
                  { day: 'Day 30', label: 'Entity & Knowledge Graph complete' },
                  { day: 'Day 60', label: 'Authority Pages live + first citations' },
                  { day: 'Day 90', label: '90-day review — results documented' },
                ].map((step, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center text-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full relative z-10" style={{ background: i === 0 ? 'rgba(255,255,255,0.25)' : '#C2185B', boxShadow: i > 0 ? '0 0 0 3px rgba(194,24,91,0.15)' : 'none' }} />
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: i === 0 ? '#94A3B8' : '#C2185B' }}>{step.day}</div>
                    <div style={{ fontSize: '0.62rem', color: '#64748B', lineHeight: 1.4 }}>{step.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Methodology */}
      <section className="py-28 bg-white" aria-label="Methodology">
        <Container size="lg">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>Methodology</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#1E3A66', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              How we measure.<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>What we hold ourselves to.</span>
            </h2>
            <p className="mt-5" style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.75 }}>
              Every result reported here is measured against a baseline established on Day 0. We don't report directional trends — we report numbers, and we show where they started.
            </p>
          </div>
          <div className="space-y-px rounded-2xl overflow-hidden" style={{ border: '1px solid #E7E3DD' }}>
            {METHODOLOGY_STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="flex gap-6 p-7 lg:p-8" style={{ background: i % 2 === 0 ? '#FFFFFF' : '#F8F5F0' }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(182,146,94,0.55)', flexShrink: 0, paddingTop: '0.1rem' }}>{step.num}</div>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1E3A66', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>{step.title}</h3>
                    <p style={{ fontSize: '0.845rem', color: '#334155', lineHeight: 1.72 }}>{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* KPI Definitions */}
      <section className="py-20 bg-[#F8F5F0]" aria-label="KPI definitions">
        <Container size="lg">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>What the Numbers Mean</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#1E3A66', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
              Six KPIs.<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>Each one defined.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid #E7E3DD' }}>
            {KPI_DEFINITIONS.map((item, i) => (
              <div key={item.kpi} className="p-6" style={{ background: i % 2 === 0 ? '#FFFFFF' : '#F8F5F0' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#C2185B', marginBottom: '0.5rem', letterSpacing: '-0.005em' }}>{item.kpi}</div>
                <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: 1.7 }}>{item.def}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white" aria-label="Client perspectives">
        <Container size="lg">
          <div className="mb-12 max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>Client Perspectives</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#1E3A66', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
              The metrics are the proof.<br />
              <span style={{ color: '#C2185B', fontStyle: 'italic' }}>These are the stories behind them.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <blockquote key={i} className="p-7 rounded-xl flex flex-col gap-5"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid #E7E3DD' }}>
                <div style={{ fontSize: '1.5rem', color: 'rgba(182,146,94,0.3)', lineHeight: 1, fontFamily: 'Georgia, serif' }}>"</div>
                <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.75, fontStyle: 'italic', flex: 1 }}>{t.quote}</p>
                <footer>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1E3A66' }}>{t.handle}</div>
                  <div style={{ fontSize: '0.68rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.15rem' }}>{t.segment} · {t.city}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-[#F8F5F0]">
        <Container size="lg">
          <div className="mb-10">
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C2185B' }}>What to Explore Next</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                href: '/platform',
                label: 'The Platform',
                desc: 'Understand PearlOS and the five modules that produce these outcomes.',
                cta: 'Explore the Platform',
              },
              {
                href: '/solutions',
                label: 'Solutions',
                desc: 'Find the solution built for your specific business model and goals.',
                cta: 'Find Your Solution',
              },
              {
                href: '/resources',
                label: 'Authority Library',
                desc: 'The educational framework behind the P.E.A.R.L. authority system.',
                cta: 'Read the Library',
              },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                className="group flex flex-col gap-4 p-6 rounded-xl hover:bg-white/[0.02] transition-colors duration-200"
                style={{ border: '1px solid #E7E3DD' }}>
                <div className="flex items-center justify-between">
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155' }}>{item.label}</div>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-50 transition-opacity" style={{ color: '#C2185B' }} />
                </div>
                <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: 1.65, flex: 1 }}>{item.desc}</p>
                <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#C2185B' }}>{item.cta} →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white">
        <Container size="md" className="text-center">
          <h2 className="mb-5 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#1E3A66', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
            These are other businesses'<br />results.
            <span style={{ display: 'block', color: '#C2185B', fontStyle: 'italic', marginTop: '0.2rem' }}>Yours are next.</span>
          </h2>
          <p className="mb-10 max-w-md mx-auto" style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.8 }}>
            Book a strategy call. We'll run a live Authority Score audit on your business and show you exactly where you stand — before you commit to anything.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-9 py-4 text-sm font-semibold bg-[#C2185B] hover:bg-[#D62F73] text-white transition-colors duration-200">
              Book a Strategy Call <ArrowRight size={14} />
            </a>
            <Link href="/platform" className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#334155' }}>
              Explore the Platform <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
