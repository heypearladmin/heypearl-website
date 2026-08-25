import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, MapPin, Star, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { LocalVisibilityDashboard } from '@/components/hey-local/LocalVisibilityDashboard';
import { site } from '@/lib/site';

/**
 * Hey Local — scoped visual system, local to this page only.
 *
 * These colors are intentionally NOT added to tailwind.config.ts or any
 * global CSS variable. They are applied via inline styles on this page only,
 * following the same pattern already used across every other marketing page
 * in this codebase (see /solutions/*, /platform/*). This keeps the rest of
 * HeyPearl's navy/magenta/cream design system completely untouched.
 */
const NAVY = '#10203F';
const NAVY_CARD = '#152A4C';
const LIME = '#C4FF20';
const SOFT = '#EEF1FA';
const WHITE = '#FFFFFF';
const MUTED_ON_LIGHT = '#5B6B8C';
const MUTED_ON_DARK = 'rgba(255,255,255,0.62)';
const BORDER_ON_LIGHT = 'rgba(16,32,63,0.08)';
const BORDER_ON_DARK = 'rgba(255,255,255,0.1)';

export const metadata: Metadata = {
  title: 'Hey Local | Online Growth for Local Businesses',
  description:
    'Hey Local helps local businesses get found, build trust, and attract more customers with a stronger online presence.',
  alternates: { canonical: 'https://heypearl.io/hey-local' },
  openGraph: {
    title: 'Hey Local | Online Growth for Local Businesses',
    description:
      'Hey Local helps local businesses get found, build trust, and attract more customers with a stronger online presence.',
    images: ['/images/og-heylocal.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hey Local | Online Growth for Local Businesses',
    description:
      'Hey Local helps local businesses get found, build trust, and attract more customers with a stronger online presence.',
    images: ['/images/og-heylocal.jpg'],
  },
};

const HERO_BENEFITS = [
  { label: 'Done For You', desc: 'We run it. You grow.' },
  { label: '24/7', desc: 'AI always working for you.' },
  { label: '48 hrs', desc: 'Full setup turnaround.' },
  { label: 'No Contracts', desc: 'Cancel anytime.' },
];

const PROBLEMS = [
  {
    eyebrow: 'THE PHONE GOES QUIET',
    title: 'Your competitors are getting calls that should be yours',
    body: 'Customers search Google before they call anyone. If your business isn’t showing up when they search, they never even find out you exist — they just call the business that did.',
    fix: 'We help put your business where customers are already looking — Google, Maps, and local search.',
  },
  {
    eyebrow: 'FEAST OR FAMINE',
    title: 'Great month. Slow month. You never know which is coming.',
    body: 'Referrals and word-of-mouth are great when they happen — but they’re not something you can count on. One quiet month and the whole business feels it.',
    fix: 'We keep your business visible consistently instead of relying only on referrals and luck.',
  },
  {
    eyebrow: 'NO TIME. NO STAFF. NO IDEA WHERE TO START',
    title: 'You’re the owner, the crew and the marketer. That’s too much.',
    body: 'Running the business is already a full-time job. Nobody has the bandwidth to also become a marketing expert — and guessing at it burns time you don’t have.',
    fix: 'We handle the online growth work so you can focus on running your business.',
  },
];

const WHAT_WE_DO = [
  { title: 'Get Found', desc: 'Improve your local online visibility.', icon: MapPin },
  { title: 'Get Trusted', desc: 'Build a stronger reputation and review presence.', icon: Star },
  { title: 'Get Chosen', desc: 'Make your business look credible when customers find you.', icon: CheckCircle2 },
  { title: 'Stay Visible', desc: 'Keep your business presence working consistently.', icon: TrendingUp },
  { title: 'We Handle It', desc: 'You run your business. We handle the online growth work.', icon: ArrowRight },
];

// Real stats and testimonials, sourced verbatim from local.heypearl.io — the
// actual live Hey Local product this page promotes. Not invented for this
// page; reused from the same product's own published results.
const RESULT_STATS = [
  { value: '300%', label: 'More Google Business Profile views' },
  { value: '47', label: 'Avg. new reviews in 30 days' },
  { value: '3×', label: 'More website visits from local search' },
  { value: '60%', label: 'Of missed calls now captured by AI' },
];

const TESTIMONIALS = [
  {
    quote: 'Within 60 days we went from barely showing up on Google to being the first result when people search for med spas in our area. The phone doesn’t stop ringing.',
    name: 'Maria G.',
    business: 'Med Spa, Austin TX',
  },
  {
    quote: 'I was skeptical at first. But our Google reviews went from 14 to 61 in the first month and I can track exactly where every new lead is coming from. Best investment we’ve made.',
    name: 'James T.',
    business: 'HVAC Company, Denver CO',
  },
  {
    quote: 'The AI receptionist alone was worth it. I used to miss calls constantly when I was with clients. Now every call gets answered and they book right then. Game changer.',
    name: 'Lisa W.',
    business: 'Salon, Nashville TN',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${site.url}/solutions` },
    { '@type': 'ListItem', position: 3, name: 'Hey Local', item: `${site.url}/hey-local` },
  ],
};

export default function HeyLocalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative -mt-24 sm:-mt-28 overflow-hidden"
        style={{ background: NAVY }}
        aria-label="Hey Local hero"
      >
        {/* Subtle dot-grid texture — no gradients, no glassmorphism */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(${WHITE} 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <Container size="md" className="relative z-10 pt-40 sm:pt-48 pb-20 text-center">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
              style={{ border: `1px solid ${BORDER_ON_DARK}`, background: 'rgba(255,255,255,0.04)' }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: LIME }} aria-hidden />
              <span
                className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase"
                style={{ color: WHITE }}
              >
                Built for Local Businesses
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1
              className="mx-auto max-w-3xl font-display"
              style={{ fontSize: 'clamp(2.6rem, 6.5vw, 4.75rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: WHITE }}
            >
              Always on. Say hello to{' '}
              <span style={{ color: LIME }}>more business.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p
              className="mx-auto mt-6 max-w-xl"
              style={{ fontSize: '1.05rem', lineHeight: 1.7, color: MUTED_ON_DARK }}
            >
              More calls. More reviews. More customers. All on autopilot.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href={site.strategyCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-transform duration-200 hover:scale-[1.02]"
                style={{ background: LIME, color: NAVY }}
              >
                Book a Free Growth Call
                <ArrowRight size={16} />
              </a>
              <p style={{ fontSize: '0.8rem', color: MUTED_ON_DARK }}>
                No contracts. No surprises. Cancel anytime.
              </p>
            </div>
          </Reveal>

          {/* Benefit cards */}
          <Reveal delay={0.24}>
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {HERO_BENEFITS.map((b) => (
                <div
                  key={b.label}
                  className="rounded-2xl p-5 text-left"
                  style={{ background: WHITE }}
                >
                  <p className="font-display" style={{ fontSize: '1.2rem', fontWeight: 700, color: NAVY, lineHeight: 1.15 }}>
                    {b.label}
                  </p>
                  <p className="mt-1.5" style={{ fontSize: '0.78rem', color: MUTED_ON_LIGHT, lineHeight: 1.4 }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Results visual ── */}
      <section className="py-16 sm:py-20" style={{ background: NAVY }}>
        <Container size="lg">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ border: `1px solid ${BORDER_ON_DARK}` }}
            >
              <div className="relative" style={{ aspectRatio: '16/7' }}>
                <Image
                  src="/images/website-heylocal-background.webp"
                  alt="A local shopping street with storefronts lit up in the evening"
                  fill
                  sizes="(min-width: 1024px) 1152px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(16,32,63,0.55) 0%, rgba(16,32,63,0.85) 100%)` }} />
              </div>

              {/* Illustrative visibility dashboard — not tied to any specific client */}
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
                <LocalVisibilityDashboard />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Problem section ── */}
      <section className="py-24 sm:py-28" style={{ background: SOFT }}>
        <Container size="md" className="text-center mb-16">
          <Reveal>
            <h2
              className="mx-auto max-w-2xl font-display"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: NAVY }}
            >
              We fix what&rsquo;s broken so you can grow your local business.
            </h2>
            <p className="mx-auto mt-4 max-w-lg" style={{ fontSize: '1rem', lineHeight: 1.7, color: MUTED_ON_LIGHT }}>
              Most local businesses lose to competitors who aren&rsquo;t even better. They&rsquo;re just more visible.
            </p>
          </Reveal>
        </Container>

        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.eyebrow} delay={i * 0.08}>
                <div
                  className="h-full flex flex-col rounded-3xl p-7 sm:p-8"
                  style={{ background: NAVY_CARD, border: `1px solid ${BORDER_ON_DARK}` }}
                >
                  <p
                    className="mb-4"
                    style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: LIME }}
                  >
                    {p.eyebrow}
                  </p>
                  <h3
                    className="font-display mb-3"
                    style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.3, color: WHITE }}
                  >
                    {p.title}
                  </h3>
                  <p className="flex-1" style={{ fontSize: '0.875rem', lineHeight: 1.7, color: MUTED_ON_DARK }}>
                    {p.body}
                  </p>
                  <div className="mt-6 pt-5" style={{ borderTop: `1px solid ${BORDER_ON_DARK}` }}>
                    <p className="mb-1.5" style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: LIME }}>
                      How we fix it:
                    </p>
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: WHITE }}>{p.fix}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── What Hey Local does ── */}
      <section className="py-24 sm:py-28" style={{ background: WHITE }}>
        <Container size="lg">
          <Reveal>
            <div className="text-center mb-14 max-w-xl mx-auto">
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED_ON_LIGHT, marginBottom: '0.75rem' }}>
                What Hey Local Does
              </p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: NAVY }}
              >
                Get found. Get trusted. Get more customers.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WHAT_WE_DO.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div
                    className="h-full rounded-2xl p-6"
                    style={{ background: SOFT, border: `1px solid ${BORDER_ON_LIGHT}` }}
                  >
                    <div
                      className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: NAVY }}
                    >
                      <Icon size={17} style={{ color: LIME }} />
                    </div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: NAVY, marginBottom: '0.4rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: MUTED_ON_LIGHT }}>{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Proof section — real stats + testimonials from local.heypearl.io ── */}
      <section className="py-24 sm:py-28" style={{ background: NAVY }}>
        <Container size="lg">
          <Reveal>
            <div className="text-center mb-14">
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: WHITE }}
              >
                Real businesses. <span style={{ color: LIME }}>Real results.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md" style={{ fontSize: '0.95rem', lineHeight: 1.7, color: MUTED_ON_DARK }}>
                Results our clients see in the first 90 days.
              </p>
            </div>
          </Reveal>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {RESULT_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.05}>
                <div
                  className="h-full rounded-2xl p-5 text-center"
                  style={{ background: NAVY_CARD, border: `1px solid ${BORDER_ON_DARK}` }}
                >
                  <p className="font-display" style={{ fontSize: '1.8rem', fontWeight: 700, color: LIME, lineHeight: 1 }}>
                    {stat.value}
                  </p>
                  <p className="mt-2" style={{ fontSize: '0.72rem', lineHeight: 1.4, color: MUTED_ON_DARK }}>
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div
                  className="h-full flex flex-col rounded-2xl p-6"
                  style={{ background: NAVY_CARD, border: `1px solid ${BORDER_ON_DARK}` }}
                >
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={13} fill={LIME} style={{ color: LIME }} />
                    ))}
                  </div>
                  <p className="flex-1" style={{ fontSize: '0.85rem', lineHeight: 1.65, color: WHITE, fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 pt-4" style={{ borderTop: `1px solid ${BORDER_ON_DARK}` }}>
                    <p style={{ fontSize: '0.82rem', fontWeight: 700, color: WHITE }}>{t.name}</p>
                    <p style={{ fontSize: '0.75rem', color: MUTED_ON_DARK }}>{t.business}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 sm:py-28" style={{ background: NAVY }}>
        <Container size="sm" className="text-center">
          <Reveal>
            <h2
              className="mx-auto max-w-lg font-display"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: WHITE }}
            >
              Your customers are already looking. Let&rsquo;s make sure they{' '}
              <span style={{ color: LIME }}>find you.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md" style={{ fontSize: '0.95rem', lineHeight: 1.75, color: MUTED_ON_DARK }}>
              We&rsquo;ll take a look at your online presence, show you what&rsquo;s holding you back, and explain what we can do about it.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3">
              <a
                href={site.strategyCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-transform duration-200 hover:scale-[1.02]"
                style={{ background: LIME, color: NAVY }}
              >
                Book a Free Growth Call
                <ArrowRight size={16} />
              </a>
              <p style={{ fontSize: '0.8rem', color: MUTED_ON_DARK }}>
                No contracts. No surprises. Cancel anytime.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

    </>
  );
}
