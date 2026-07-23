import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Get Started — HeyPearl',
  description:
    'Every engagement begins with a strategy conversation. We\'ll understand your business, evaluate your AI visibility, and determine whether HeyPearl is the right fit.',
  openGraph: {
    title: 'Get Started — HeyPearl',
    description: 'Every engagement begins with a strategy conversation. Learn what it\'s like to work with HeyPearl.',
  },
};

const navy   = '#07142F';
const soft   = '#14284A';
const card   = '#1D355D';
const cream  = '#F8F6F2';
const dim    = '#C9D3E3';
const dimmer = '#98A6BE';
const mg     = '#C2185B';
const gold   = '#B6925E';
const border = '#30486F';

const STEPS = [
  {
    num: '01',
    title: 'Understand Your Business',
    body: 'We learn about your company, the market you serve, your growth goals, and where you currently stand in AI search. No assumptions — just a real conversation.',
  },
  {
    num: '02',
    title: 'Evaluate Your AI Authority',
    body: 'We review how AI engines currently understand and represent your business. We identify what\'s missing, what\'s misrepresented, and where the biggest opportunities are.',
  },
  {
    num: '03',
    title: 'Recommend the Right Solution',
    body: 'If HeyPearl is a good fit, we\'ll recommend the most appropriate engagement based on your business, your market, and your goals — not a generic package.',
  },
  {
    num: '04',
    title: 'Build Your Authority System',
    body: 'Together we implement the right combination of AI Authority Infrastructure, Platform modules, and PearlOS to make you the business AI recommends.',
  },
];

const AUDIENCES = [
  {
    label: 'Real Estate Agents',
    body: 'AI is reshaping how buyers and sellers find agents. We build the authority signals that get you cited and recommended — not just ranked.',
  },
  {
    label: 'Brokerages',
    body: 'Multi-brand authority is complex. We architect entity structures that let every agent and office build independently while strengthening the brokerage brand.',
  },
  {
    label: 'Service Businesses',
    body: 'Local and regional service providers need hyper-specific AI visibility. We build the geo-authority systems that put you in front of the right markets.',
  },
  {
    label: 'Enterprise Teams',
    body: 'Large organizations require custom infrastructure. We architect authority systems at scale — across markets, brands, and product lines.',
  },
];

const FAQS = [
  {
    q: 'How long is the strategy call?',
    a: 'Typically 30–45 minutes. It\'s a focused conversation, not a sales pitch. We come prepared with observations about your current AI visibility.',
  },
  {
    q: 'Who will I speak with?',
    a: 'You\'ll speak directly with our team — not a junior rep or automated intake system. Every strategy conversation is handled by someone with deep knowledge of AI Authority Infrastructure.',
  },
  {
    q: 'Is there any obligation after the call?',
    a: 'None. The strategy call is designed to determine mutual fit. If HeyPearl isn\'t the right solution for your situation, we\'ll tell you — and point you toward what is.',
  },
  {
    q: 'How do you determine pricing?',
    a: 'Every engagement is built around what your business actually needs. Pricing reflects the scope of your authority system — not a one-size-fits-all package. We discuss this transparently during the strategy call.',
  },
  {
    q: 'What happens after the strategy call?',
    a: 'If we\'re aligned, we\'ll send a tailored proposal. If we need more information, we\'ll schedule a follow-up. Either way, you\'ll leave with a clear picture of your AI Authority opportunity.',
  },
];

export default function GetStartedPage() {
  return (
    <main style={{ background: navy, minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ borderBottom: `1px solid ${border}`, paddingTop: '8rem', paddingBottom: '6rem' }}
      >
        {/* Subtle grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(194,24,91,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(194,24,91,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px]"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(194,24,91,0.07) 0%, transparent 65%)' }}
        />

        <Container size="lg" className="relative z-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block h-px w-8" style={{ background: mg, opacity: 0.5 }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: mg }}>
                Get Started
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1
              className="max-w-3xl"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(2.75rem, 6vw, 5rem)',
                fontWeight: 700,
                color: cream,
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem',
              }}
            >
              Let&apos;s Build Your<br />
              <span style={{ color: mg, fontStyle: 'italic' }}>AI Authority.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p
              className="max-w-xl"
              style={{ fontSize: '1.15rem', color: dim, lineHeight: 1.75, marginBottom: '2.5rem' }}
            >
              Every engagement begins with a strategy conversation. We&apos;ll understand your business,
              evaluate your visibility in AI search, and determine whether HeyPearl is the right fit.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={site.strategyCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{ background: mg, color: '#fff', fontSize: '0.9rem' }}
              >
                Book a Strategy Call
                <ArrowRight size={15} />
              </a>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-colors hover:border-white/20"
                style={{ border: `1px solid ${border}`, color: dim, fontSize: '0.9rem' }}
              >
                Explore the Platform
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Why Start With Strategy ── */}
      <section style={{ borderBottom: `1px solid ${border}`, paddingTop: '5rem', paddingBottom: '5rem', background: soft }}>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <div>
                <p style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: mg, marginBottom: '1rem' }}>
                  Why Strategy First
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    fontWeight: 700,
                    color: cream,
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    marginBottom: '1.25rem',
                  }}
                >
                  Every business faces a different AI authority challenge.
                </h2>
                <p style={{ fontSize: '1rem', color: dim, lineHeight: 1.8 }}>
                  A real estate agent in a competitive metro has completely different visibility gaps than
                  a regional service business or an enterprise with dozens of locations. One-size-fits-all
                  infrastructure doesn&apos;t exist — and pretending it does would waste your time and ours.
                </p>
              </div>
            </Reveal>

            <div className="space-y-5">
              {[
                { title: 'Different industries', body: 'AI engines weight signals differently by category. What builds authority for a law firm differs from what builds it for a brokerage.' },
                { title: 'Different competitive landscapes', body: 'Some markets are wide open. Others are intensely contested. Strategy determines where effort creates the most leverage.' },
                { title: 'Different authority gaps', body: 'Some businesses are missing entity architecture. Others need reputation depth. Most need both — but in different proportions.' },
                { title: 'Different AI visibility opportunities', body: 'We identify where each client\'s business is being misrepresented, underrepresented, or simply absent from AI outputs.' },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.07}>
                  <div
                    className="flex items-start gap-4 p-5 rounded-xl border"
                    style={{ background: 'rgba(255,255,255,0.04)', borderColor: border }}
                  >
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(194,24,91,0.15)' }}>
                      <Check size={11} color={mg} strokeWidth={2.5} />
                    </span>
                    <div>
                      <p style={{ fontWeight: 600, color: cream, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{item.title}</p>
                      <p style={{ color: dim, fontSize: '0.85rem', lineHeight: 1.65 }}>{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Strategy Call Timeline ── */}
      <section style={{ borderBottom: `1px solid ${border}`, paddingTop: '5rem', paddingBottom: '5rem', background: navy }}>
        <Container size="lg">
          <Reveal>
            <div className="text-center mb-14">
              <p style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: mg, marginBottom: '0.75rem' }}>
                The Process
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontWeight: 700,
                  color: cream,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                What Happens During the Strategy Call
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            {/* Vertical connector line */}
            <div
              aria-hidden
              className="hidden lg:block absolute left-[2.75rem] top-10 bottom-10 w-px"
              style={{ background: `linear-gradient(to bottom, transparent, ${border}, ${border}, transparent)` }}
            />

            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <Reveal key={step.num} delay={i * 0.08}>
                  <div
                    className="relative flex items-start gap-6 p-7 rounded-2xl border lg:pl-24"
                    style={{ background: card, borderColor: border }}
                  >
                    {/* Step number bubble */}
                    <div
                      className="hidden lg:flex absolute left-0 top-7 w-[5.5rem] justify-center"
                    >
                      <span
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{ background: 'rgba(194,24,91,0.12)', color: mg, border: `1px solid rgba(194,24,91,0.25)` }}
                      >
                        {i + 1}
                      </span>
                    </div>

                    <div className="lg:hidden">
                      <span
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{ background: 'rgba(194,24,91,0.12)', color: mg, border: `1px solid rgba(194,24,91,0.25)` }}
                      >
                        {i + 1}
                      </span>
                    </div>

                    <div className="flex-1">
                      <p
                        style={{
                          fontFamily: 'var(--font-playfair), Georgia, serif',
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: cream,
                          marginBottom: '0.5rem',
                        }}
                      >
                        {step.title}
                      </p>
                      <p style={{ color: dim, fontSize: '0.9rem', lineHeight: 1.75 }}>{step.body}</p>
                    </div>

                    <div
                      aria-hidden
                      className="hidden lg:block flex-shrink-0 self-center text-right"
                      style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', fontWeight: 700, color: 'rgba(182,146,94,0.15)', lineHeight: 1 }}
                    >
                      {step.num}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Who We Work With ── */}
      <section style={{ borderBottom: `1px solid ${border}`, paddingTop: '5rem', paddingBottom: '5rem', background: soft }}>
        <Container size="lg">
          <Reveal>
            <div className="mb-12">
              <p style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: mg, marginBottom: '0.75rem' }}>
                Who We Work With
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontWeight: 700,
                  color: cream,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                HeyPearl adapts to your business model.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.07}>
                <div
                  className="p-7 rounded-2xl border h-full"
                  style={{ background: card, borderColor: border }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px flex-1" style={{ background: `linear-gradient(to right, ${gold}, transparent)`, opacity: 0.5 }} aria-hidden />
                    <p style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: gold }}>
                      {a.label}
                    </p>
                  </div>
                  <p style={{ color: dim, fontSize: '0.9rem', lineHeight: 1.75 }}>{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why No Public Pricing ── */}
      <section style={{ borderBottom: `1px solid ${border}`, paddingTop: '5rem', paddingBottom: '5rem', background: navy }}>
        <Container size="md">
          <Reveal>
            <div
              className="rounded-2xl p-10 md:p-14 border text-center"
              style={{ background: card, borderColor: border }}
            >
              <p style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: gold, marginBottom: '1rem' }}>
                On Pricing
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 700,
                  color: cream,
                  lineHeight: 1.2,
                  letterSpacing: '-0.018em',
                }}
              >
                Why we don&apos;t publish one-size-fits-all pricing.
              </h2>
              <p className="mx-auto" style={{ fontSize: '1rem', color: dim, lineHeight: 1.8, maxWidth: '38rem', marginBottom: '1.5rem' }}>
                AI Authority Infrastructure is not a product you select from a menu. Every engagement is
                tailored to your business — your market, your gaps, your goals. Publishing fixed packages
                would force us to fit your unique situation into a box that wasn&apos;t built for you.
              </p>
              <p className="mx-auto" style={{ fontSize: '1rem', color: dim, lineHeight: 1.8, maxWidth: '38rem' }}>
                The strategy call exists so recommendations are grounded in your actual needs — not assumptions.
                We&apos;d rather give you an honest answer than a premature price tag.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── FAQs ── */}
      <section style={{ borderBottom: `1px solid ${border}`, paddingTop: '5rem', paddingBottom: '5rem', background: soft }}>
        <Container size="lg">
          <Reveal>
            <div className="mb-12">
              <p style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: mg, marginBottom: '0.75rem' }}>
                Questions
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontWeight: 700,
                  color: cream,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                Before the call.
              </h2>
            </div>
          </Reveal>

          <div className="divide-y" style={{ borderTop: `1px solid ${border}` }}>
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.06}>
                <div className="py-7">
                  <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700, fontSize: '1.05rem', color: cream, marginBottom: '0.6rem' }}>
                    {faq.q}
                  </p>
                  <p style={{ color: dim, fontSize: '0.9rem', lineHeight: 1.75, maxWidth: '52rem' }}>{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: navy }}>
        <Container size="md">
          <Reveal>
            <div className="text-center">
              <p style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: mg, marginBottom: '1.25rem' }}>
                Begin Here
              </p>
              <h2
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                  fontWeight: 700,
                  color: cream,
                  lineHeight: 1.1,
                  letterSpacing: '-0.022em',
                }}
              >
                Ready to Become the Authority<br />
                <span style={{ color: mg, fontStyle: 'italic' }}>AI Recommends?</span>
              </h2>
              <p style={{ fontSize: '1.05rem', color: dimmer, lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '28rem', margin: '0 auto 2.5rem' }}>
                Let&apos;s start with a conversation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={site.strategyCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-9 py-4 rounded-lg font-semibold transition-opacity hover:opacity-90"
                  style={{ background: mg, color: '#fff', fontSize: '0.95rem' }}
                >
                  Book a Strategy Call
                  <ArrowRight size={15} />
                </a>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-colors"
                  style={{ border: `1px solid ${border}`, color: dim, fontSize: '0.9rem' }}
                >
                  Explore the Platform
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

    </main>
  );
}
