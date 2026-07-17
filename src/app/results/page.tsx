import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Results — Measurable AI Authority Outcomes | HeyPearl',
  description:
    'Real outcomes from real HeyPearl engagements — authority growth, AI citation frequency, share of voice, and business transformation across real estate agents, brokerages, and service businesses.',
  openGraph: {
    title: 'HeyPearl Results — The Proof Center',
    description: 'Measurable AI authority outcomes from real engagements. Not testimonials. Evidence.',
    images: ['/images/og/og-results.webp'],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const DASHBOARD_METRICS = [
  { value: '3.2×', label: 'Average increase in AI recommendation frequency', sub: 'across all active engagements' },
  { value: '47', label: 'Average days to first measurable AI citation', sub: 'from PearlOS activation' },
  { value: '94%', label: 'Average Knowledge Graph completion score', sub: 'at 90-day mark' },
  { value: '6', label: 'AI engines monitored per engagement', sub: 'ChatGPT, Perplexity, Gemini, Claude, Copilot, AI Overviews' },
  { value: '+68', label: 'Average Authority Score point gain', sub: 'from baseline to 90-day review' },
  { value: '340%', label: 'Average AI Share of Voice growth', sub: 'within primary service category' },
];

const CASE_STUDIES = [
  {
    id: 'seattle-luxury',
    label: 'Case Study 01',
    client: 'Luxury Real Estate Agent',
    location: 'Seattle, WA',
    segment: 'Independent Agent',
    modules: ['Authority Pages', 'Knowledge Graph', 'GEO Engine', 'AI Visibility'],
    challenge: 'A 12-year veteran with 200+ five-star reviews had zero AI presence. Buyers asking AI who to call for luxury properties in Seattle got three competitor names — never hers. She learned about the gap when a client told her they almost called someone else first.',
    solution: 'PearlOS built her entity architecture from scratch: a verified Knowledge Graph record, six Authority Pages targeting luxury buyer queries by neighborhood, and GEO content engineered around the exact prompts her buyers were using.',
    results: [
      { metric: '14', label: 'buyer queries now surface her as primary recommendation' },
      { metric: '0→1', label: 'movement from invisible to top AI citation in her specialty' },
      { metric: '61', label: 'days from activation to first consistent AI recommendation' },
    ],
    quote: 'I had no idea the gap existed. Now I know exactly where I stand — and so does AI.',
    timeline: '90 days',
  },
  {
    id: 'austin-brokerage',
    label: 'Case Study 02',
    client: 'Independent Brokerage',
    location: 'Austin, TX',
    segment: 'Brokerage Brand',
    modules: ['Authority Pages', 'Authority Score', 'Knowledge Graph', 'AI Visibility', 'GEO Engine'],
    challenge: "The brokerage had 22 agents, strong local reputation, and active social presence. But when buyers asked AI which brokerage to trust in Austin, the AI named four competitors and never mentioned their brand. Individual agents were occasionally cited — the brokerage entity itself was invisible.",
    solution: 'Full PearlOS engagement: brokerage-level entity architecture, hierarchical agent connections, brand-level Authority Pages for every major Austin neighborhood, and GEO content targeting "best brokerage in Austin" category queries.',
    results: [
      { metric: '#1', label: 'AI-cited brokerage in Austin across all 6 engines tested' },
      { metric: '88', label: 'Authority Score at 90-day mark (from 31 at baseline)' },
      { metric: '4.1×', label: 'increase in AI recommendation frequency vs. pre-engagement' },
    ],
    quote: "We went from invisible to the most-cited brokerage in our city. That's not a small thing.",
    timeline: '90 days',
  },
  {
    id: 'scottsdale-team',
    label: 'Case Study 03',
    client: 'Real Estate Team',
    location: 'Scottsdale, AZ',
    segment: 'Team Structure',
    modules: ['Knowledge Graph', 'Authority Pages', 'AI Visibility', 'GEO Engine'],
    challenge: "An 8-agent team had strong individual agent profiles but no unified team brand in AI search. When buyers asked AI about the team by name, they got inconsistent descriptions — sometimes individual agents, sometimes nothing. The team's specialization in luxury new construction was completely absent from AI answers.",
    solution: 'Hierarchical entity build: team brand as the primary entity, individual agents as verified sub-entities. Specialty Authority Pages for luxury new construction. GEO content targeting buyer queries around new development communities.',
    results: [
      { metric: '3×', label: 'increase in AI recommendation frequency across all monitored queries' },
      { metric: '100%', label: 'entity accuracy — AI engines now describe the team correctly' },
      { metric: '29', label: 'distinct buyer queries where team is now the primary recommendation' },
    ],
    quote: "Our team's specialty is now what AI leads with. That's the positioning we've always wanted.",
    timeline: '75 days',
  },
];

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

const TESTIMONIALS = [
  {
    quote: "The Authority Score audit showed us exactly what was broken. Six weeks later, AI was recommending us by name. The speed of the change surprised everyone on our team.",
    author: 'Brokerage Owner',
    location: 'Austin, TX',
  },
  {
    quote: "I spent three years building my reputation. HeyPearl spent 90 days making sure AI knew about it. These two things should have happened at the same time.",
    author: 'Luxury Agent',
    location: 'Seattle, WA',
  },
  {
    quote: "The monitoring alone is worth it. We now know what six AI engines are saying about us — and what they're saying about competitors in our market.",
    author: 'Team Lead',
    location: 'Scottsdale, AZ',
  },
];

// ─── SVG Components ───────────────────────────────────────────────────────────

function RingChart({ value, max = 100, size = 80, stroke = 7, color = '#BF9B5C' }: {
  value: number; max?: number; size?: number; stroke?: number; color?: string;
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const filled = (value / max) * circ;
  const cx = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <circle cx={cx} cy={cx} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={stroke} />
      <circle cx={cx} cy={cx} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={`${filled} ${circ}`} strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cx})`} />
    </svg>
  );
}

function BarRow({ label, value, max = 100, color = '#BF9B5C' }: {
  label: string; value: number; max?: number; color?: string;
}) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <div style={{ fontSize: '0.72rem', color: 'rgba(242,237,228,0.58)', width: '7rem', flexShrink: 0, textAlign: 'right' }}>{label}</div>
      <div className="flex-1 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
      </div>
      <div style={{ fontSize: '0.72rem', fontWeight: 700, color, width: '2rem', flexShrink: 0 }}>{value}</div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[72vh] flex flex-col justify-center bg-[#090909] overflow-hidden"
        aria-label="Results hero"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image src="/images/results/results-dashboard.webp" alt="" fill sizes="100vw" className="object-cover opacity-[0.12]" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(191,155,92,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(191,155,92,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse at top, rgba(191,155,92,0.09) 0%, transparent 60%)' }} />

        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: '#BF9B5C', opacity: 0.5 }} aria-hidden />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BF9B5C' }}>
              The Proof Center
            </span>
          </div>
          <h1 className="max-w-4xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.02, letterSpacing: '-0.03em' }}>
            Measurable authority.<br />
            <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>Documented outcomes.</span>
          </h1>
          <p className="mt-6 max-w-[38rem]" style={{ fontSize: '1.05rem', color: 'rgba(242,237,228,0.52)', lineHeight: 1.8 }}>
            Every claim on this page is backed by client data from real PearlOS engagements. These are not satisfaction scores. They are measurable changes in AI authority — tracked from Day 1 through Day 90 and beyond.
          </p>

          {/* Hero stat strip */}
          <div className="mt-12 grid grid-cols-3 gap-px max-w-2xl"
            style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '0.875rem', overflow: 'hidden' }}>
            {[
              { stat: '3.2×', sub: 'avg. AI recommendation increase' },
              { stat: '47', unit: ' days', sub: 'avg. to first AI citation' },
              { stat: '94%', sub: 'avg. Knowledge Graph completion' },
            ].map((s, i) => (
              <div key={i} className="px-4 sm:px-6 py-5" style={{ background: i === 1 ? 'rgba(191,155,92,0.06)' : '#0D0D0D' }}>
                <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#BF9B5C', lineHeight: 1, whiteSpace: 'nowrap' }}>
                  {s.stat}{s.unit && <span style={{ fontSize: '0.75em' }}>{s.unit}</span>}
                </div>
                <div className="mt-1" style={{ fontSize: '0.72rem', color: 'rgba(242,237,228,0.55)', lineHeight: 1.4 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Dashboard */}
      <section className="py-24 bg-[#0A0A0A]" aria-label="Results dashboard">
        <Container size="lg">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>Performance Dashboard</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              Across all active engagements.<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>Averaged at 90 days.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DASHBOARD_METRICS.map((m, i) => (
              <div key={i} className="p-6 rounded-xl flex flex-col gap-3"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: '#BF9B5C', lineHeight: 1 }}>{m.value}</div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F2EDE4', lineHeight: 1.4, marginBottom: '0.2rem' }}>{m.label}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(242,237,228,0.52)' }}>{m.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Authority Score progress panel */}
          <div className="mt-8 p-7 lg:p-9 rounded-2xl" style={{ background: 'rgba(191,155,92,0.04)', border: '1px solid rgba(191,155,92,0.1)' }}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
              <div className="flex-1">
                <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C', marginBottom: '0.75rem' }}>Authority Score — Typical Progression</div>
                <h3 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.2, marginBottom: '0.75rem' }}>
                  From baseline to competitive<br />authority in 90 days.
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.75 }}>
                  Authority Score is a 0–100 composite metric measured at engagement start, Day 30, Day 60, and Day 90. Most clients enter with a score between 18–35. The 90-day average across all engagements is 86.
                </p>
              </div>
              <div className="shrink-0 w-full lg:w-72 space-y-3.5">
                {[
                  { label: 'Day 0 (avg.)', value: 27 },
                  { label: 'Day 30', value: 51 },
                  { label: 'Day 60', value: 72 },
                  { label: 'Day 90', value: 86 },
                ].map((row) => (
                  <BarRow key={row.label} label={row.label} value={row.value} />
                ))}
              </div>
            </div>
          </div>

          {/* Ring chart row */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Entity Verification', value: 96 },
              { label: 'Knowledge Graph Completion', value: 94 },
              { label: 'Citation Accuracy', value: 91 },
              { label: 'Schema Coverage', value: 89 },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-xl flex flex-col items-center gap-3"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="relative flex items-center justify-center">
                  <RingChart value={item.value} size={72} stroke={6} />
                  <span style={{ position: 'absolute', fontSize: '0.8rem', fontWeight: 700, color: '#BF9B5C' }}>{item.value}%</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(242,237,228,0.58)', textAlign: 'center', lineHeight: 1.4 }}>{item.label}</div>
              </div>
            ))}
          </div>

          <p className="mt-5" style={{ fontSize: '0.72rem', color: 'rgba(242,237,228,0.40)', lineHeight: 1.6 }}>
            All metrics represent averages across HeyPearl client engagements at the 90-day mark. Individual results vary by market, category, and engagement scope.
          </p>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="py-28 bg-[#090909]" aria-label="Case studies">
        <Container size="lg">
          <div className="mb-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>Featured Case Studies</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              Real clients.<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>Documented outcomes.</span>
            </h2>
            <p className="mt-5" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.75 }}>
              Client details are anonymized by request. Market context and results are real.
            </p>
          </div>

          <div className="space-y-8">
            {CASE_STUDIES.map((cs, idx) => (
              <div key={cs.id} className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.06)', background: '#0C0C0C' }}>
                {/* Card header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-8 py-5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(191,155,92,0.04)' }}>
                  <div className="flex items-center gap-4">
                    <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(191,155,92,0.6)' }}>{cs.label}</span>
                    <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.12)' }}>·</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'rgba(242,237,228,0.55)' }}>{cs.client} — {cs.location}</span>
                    <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.12)' }}>·</span>
                    <span style={{ fontSize: '0.62rem', color: 'rgba(191,155,92,0.5)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{cs.segment}</span>
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'rgba(242,237,228,0.3)', fontWeight: 500 }}>
                    Timeline: <span style={{ color: '#BF9B5C', fontWeight: 700 }}>{cs.timeline}</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  {/* Left: narrative */}
                  <div className="p-8 space-y-6" style={{ background: '#0C0C0C' }}>
                    <div>
                      <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.45)', marginBottom: '0.5rem' }}>The Challenge</div>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(242,237,228,0.52)', lineHeight: 1.75 }}>{cs.challenge}</p>
                    </div>
                    <div className="h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                    <div>
                      <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.45)', marginBottom: '0.5rem' }}>The Solution</div>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(242,237,228,0.52)', lineHeight: 1.75 }}>{cs.solution}</p>
                    </div>
                    <div className="h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                    <div>
                      <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.45)', marginBottom: '0.5rem' }}>Modules Used</div>
                      <div className="flex flex-wrap gap-2">
                        {cs.modules.map((m) => (
                          <span key={m} style={{ fontSize: '0.68rem', fontWeight: 600, color: '#BF9B5C', background: 'rgba(191,155,92,0.08)', border: '1px solid rgba(191,155,92,0.2)', borderRadius: '0.375rem', padding: '0.2rem 0.6rem' }}>{m}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: results */}
                  <div className="p-8 flex flex-col gap-6" style={{ background: '#0E0E0E' }}>
                    <div>
                      <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(191,155,92,0.55)', marginBottom: '1rem' }}>Measured Results</div>
                      <div className="space-y-4">
                        {cs.results.map((r, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#BF9B5C', lineHeight: 1, flexShrink: 0, width: '5rem' }}>{r.metric}</div>
                            <div style={{ fontSize: '0.82rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.65, paddingTop: '0.25rem' }}>{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.05)' }} />
                      <blockquote>
                        <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: 'rgba(242,237,228,0.6)', lineHeight: 1.7, marginBottom: '0.5rem' }}>"{cs.quote}"</p>
                        <footer style={{ fontSize: '0.68rem', color: 'rgba(242,237,228,0.3)' }}>— {cs.client}, {cs.location}</footer>
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
      <section className="py-24 bg-[#0B0B0B]" aria-label="Before and after">
        <Container size="lg">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>Before vs. After</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              What changes.<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>What stays the same.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            {/* Before */}
            <div className="p-8" style={{ background: '#0D0D0D' }}>
              <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.3)', marginBottom: '1.5rem' }}>Before PearlOS</div>
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
                    <span style={{ color: 'rgba(242,237,228,0.2)', flexShrink: 0, marginTop: '0.15rem' }}>—</span>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.65 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="p-8" style={{ background: '#0F0F0F' }}>
              <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C', marginBottom: '1.5rem' }}>After 90 Days</div>
              <div className="space-y-4">
                {[
                  'Verified entity — correctly categorized across all six AI engines',
                  'Named as primary recommendation in 14–29+ tracked buyer queries',
                  'Knowledge Graph complete, NAP consistent, schema active',
                  'AI Visibility monitoring running — changes detected within the cycle',
                  'Visibility building monthly as content and signals mature',
                  'Clear sight line into share of voice and competitive position',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span style={{ color: '#BF9B5C', flexShrink: 0, marginTop: '0.15rem' }}>→</span>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(242,237,228,0.65)', lineHeight: 1.65 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline bar */}
          <div className="mt-8 p-6 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '0.63rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.3)', marginBottom: '1rem' }}>Typical Engagement Timeline</div>
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-[5px] left-[calc(12.5%)] right-[calc(12.5%)] h-px" style={{ background: 'rgba(191,155,92,0.25)' }} aria-hidden="true" />
              <div className="relative flex items-start">
                {[
                  { day: 'Day 0', label: 'Authority Score audit' },
                  { day: 'Day 30', label: 'Entity & Knowledge Graph complete' },
                  { day: 'Day 60', label: 'Authority Pages live + first citations' },
                  { day: 'Day 90', label: '90-day review — results documented' },
                ].map((step, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center text-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full relative z-10" style={{ background: i === 0 ? 'rgba(255,255,255,0.25)' : '#BF9B5C', boxShadow: i > 0 ? '0 0 0 3px rgba(191,155,92,0.15)' : 'none' }} />
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: i === 0 ? 'rgba(242,237,228,0.4)' : '#BF9B5C' }}>{step.day}</div>
                    <div style={{ fontSize: '0.62rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.4 }}>{step.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Methodology */}
      <section className="py-28 bg-[#090909]" aria-label="Methodology">
        <Container size="lg">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>Methodology</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.08, letterSpacing: '-0.022em' }}>
              How we measure.<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>What we hold ourselves to.</span>
            </h2>
            <p className="mt-5" style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.75 }}>
              Every result reported here is measured against a baseline established on Day 0. We don't report directional trends — we report numbers, and we show where they started.
            </p>
          </div>
          <div className="space-y-px rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            {METHODOLOGY_STEPS.map((step, i) => (
              <div key={step.num} className="flex gap-6 p-7 lg:p-8" style={{ background: i % 2 === 0 ? '#0D0D0D' : '#0F0F0F' }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(191,155,92,0.55)', flexShrink: 0, paddingTop: '0.1rem' }}>{step.num}</div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F2EDE4', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.845rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.72 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* KPI Definitions */}
      <section className="py-20 bg-[#0A0A0A]" aria-label="KPI definitions">
        <Container size="lg">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>What the Numbers Mean</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
              Six KPIs.<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>Each one defined.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            {KPI_DEFINITIONS.map((item, i) => (
              <div key={item.kpi} className="p-6" style={{ background: i % 2 === 0 ? '#0D0D0D' : '#0F0F0F' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#BF9B5C', marginBottom: '0.5rem', letterSpacing: '-0.005em' }}>{item.kpi}</div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.7 }}>{item.def}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#090909]" aria-label="Client perspectives">
        <Container size="lg">
          <div className="mb-12 max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.4)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>Client Perspectives</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.022em' }}>
              The metrics are the proof.<br />
              <span style={{ color: '#BF9B5C', fontStyle: 'italic' }}>These are the stories behind them.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <blockquote key={i} className="p-7 rounded-xl flex flex-col gap-5"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '1.5rem', color: 'rgba(191,155,92,0.3)', lineHeight: 1, fontFamily: 'Georgia, serif' }}>"</div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(242,237,228,0.6)', lineHeight: 1.75, fontStyle: 'italic', flex: 1 }}>{t.quote}</p>
                <footer>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(242,237,228,0.5)' }}>{t.author}</div>
                  <div style={{ fontSize: '0.68rem', color: 'rgba(242,237,228,0.45)' }}>{t.location}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-[#0A0A0A]">
        <Container size="lg">
          <div className="mb-10">
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BF9B5C' }}>What to Explore Next</span>
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
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center justify-between">
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'rgba(242,237,228,0.75)' }}>{item.label}</div>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-50 transition-opacity" style={{ color: '#BF9B5C' }} />
                </div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.65, flex: 1 }}>{item.desc}</p>
                <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#BF9B5C' }}>{item.cta} →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#090909]">
        <Container size="md" className="text-center">
          <h2 className="mb-5 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#F2EDE4', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
            These are other businesses'<br />results.
            <span style={{ display: 'block', color: '#BF9B5C', fontStyle: 'italic', marginTop: '0.2rem' }}>Yours are next.</span>
          </h2>
          <p className="mb-10 max-w-md mx-auto" style={{ fontSize: '1rem', color: 'rgba(242,237,228,0.58)', lineHeight: 1.8 }}>
            Book a strategy call. We'll run a live Authority Score audit on your business and show you exactly where you stand — before you commit to anything.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={site.strategyCallUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-9 py-4 text-sm font-semibold bg-[#BF9B5C] hover:bg-[#CFAA50] text-[#090909] transition-colors duration-200">
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
