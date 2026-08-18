import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Linkedin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LinkButton } from '@/components/ui/Button';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Misti Bruton — Founder of HeyPearl | AI Authority Infrastructure",
  description:
    "Misti Bruton is the founder and CEO of HeyPearl and creator of PearlOS. She helps experienced Realtors stop chasing cold leads and become the obvious AI-recommended choice in their market.",
  alternates: { canonical: 'https://heypearl.io/about/founder' },
  openGraph: {
    title: "Misti Bruton — Founder of HeyPearl | AI Authority Infrastructure",
    description:
      "Operator, brand builder, and category creator. Misti Bruton founded HeyPearl to solve the AI discovery problem facing real estate professionals — and every business competing in local markets.",
    images: ['/images/og/og-about.webp'],
  },
  twitter: { images: ['/images/og/og-about.webp'] },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Misti Bruton',
  jobTitle: 'Founder & CEO',
  worksFor: {
    '@type': 'Organization',
    name: 'Hey Pearl Agency LLC',
    url: 'https://heypearl.io',
  },
  url: 'https://heypearl.io/about/founder',
  sameAs: [
    'https://www.linkedin.com/in/mistibruton/',
    'https://www.mistibruton.com/',
    'https://instagram.com/themistibruton',
    'https://facebook.com/mistibrutonceo',
    'https://youtube.com/@themistibruton',
  ],
  description:
    "Misti Bruton is the founder and CEO of HeyPearl and creator of PearlOS. She helps experienced Realtors and local businesses become the obvious choice in AI search — through entity architecture, reputation signals, and authority infrastructure.",
  knowsAbout: [
    'AI Authority Infrastructure',
    'Generative Engine Optimization',
    'AI Search Optimization',
    'Real Estate Marketing',
    'Local Authority Building',
    'Marketing Automation',
    'Entity SEO',
    'Reputation Signals',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: "St. Edward's University",
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Braunfels',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
};

const pillars = [
  {
    label: 'Generative Engine Optimization',
    body:
      'When someone asks ChatGPT, Gemini, or Perplexity who to call — they should find your client. GEO is the practice of making that happen through entity architecture, structured data, and citation-worthy content.',
    href: '/platform/geo-engine',
  },
  {
    label: 'AI Search Optimization',
    body:
      'Traditional SEO optimized for blue links. AI Search Optimization ensures your brand is the one AI engines quote, cite, and recommend when buyers and sellers ask questions in natural language.',
    href: '/platform/ai-visibility',
  },
  {
    label: 'Authority Marketing',
    body:
      'Authority is earned through consistent signals — reviews, citations, expert content, schema, and structured presence across the web. HeyPearl builds the infrastructure that accumulates those signals automatically.',
    href: '/platform/authority-score',
  },
  {
    label: 'Marketing Automation',
    body:
      'PearlOS connects visibility to revenue. CRM workflows, AI inbox systems, and lead nurture sequences that convert AI discovery into conversations — and conversations into closed business.',
    href: '/platform/pearlos',
  },
];

const timeline = [
  {
    period: 'The Operator Years',
    body:
      "Misti spent years inside real estate operations — scaling brokerages, building brand systems, and leading teams through major market shifts. She learned firsthand what separates agents who wait for referrals from agents who are impossible to ignore.",
  },
  {
    period: 'The Shift Nobody Saw Coming',
    body:
      "When AI search began replacing the traditional Google results page, Misti recognized what most marketers missed: buyers and sellers weren't just Googling differently — they were asking AI. And AI wasn't recommending the loudest brands. It was recommending the most authoritative ones.",
  },
  {
    period: 'Building the Infrastructure',
    body:
      "HeyPearl began as Misti's answer to a question she kept asking: why do the most experienced, most capable Realtors lose to less-qualified agents who simply show up better online? The answer was infrastructure. Not ads. Not social posts. Infrastructure.",
  },
  {
    period: 'Category Creator',
    body:
      "Misti coined the term AI Authority Infrastructure to describe the systematic, compounding approach HeyPearl takes. Not a tactic. Not a campaign. A permanent operating layer that makes businesses the obvious answer when AI is asked who to trust.",
  },
];

export default function FounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section
        className="relative -mt-24 sm:-mt-28 min-h-[60vh] flex flex-col justify-center bg-white overflow-hidden"
        aria-label="Misti Bruton founder hero"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(194,24,91,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(194,24,91,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-16">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 mb-8 text-xs font-medium text-[#64748B] hover:text-[#C2185B] transition-colors"
          >
            <ArrowLeft size={12} />
            Back to About
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Portrait */}
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/5] w-full max-w-sm rounded-[2rem] overflow-hidden border border-[#E7E3DD] shadow-xl bg-white">
                  <Image
                    src={site.founder.photo}
                    alt="Misti Bruton, Founder and CEO of HeyPearl"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 35vw, 80vw"
                    priority
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(30,58,102,0.5) 0%, transparent 45%)' }}
                  />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.65)', marginBottom: '3px' }}>
                      Founder &amp; CEO
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-playfair), Georgia, serif',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                      }}
                    >
                      Misti Bruton
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>
                      HeyPearl · New Braunfels, TX
                    </div>
                  </div>
                </div>

                {/* LinkedIn badge */}
                <a
                  href={site.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:flex absolute -right-6 top-8 items-center gap-2 rounded-xl px-3.5 py-2.5 transition-shadow hover:shadow-lg"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E7E3DD',
                    boxShadow: '0 8px 24px rgba(30,58,102,0.1)',
                    color: '#0077B5',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                  }}
                  aria-label="Misti Bruton on LinkedIn"
                >
                  <Linkedin size={14} />
                  Connect on LinkedIn
                </a>
              </div>
            </Reveal>

            {/* Headline copy */}
            <Reveal delay={0.1} className="lg:col-span-7">
              <Eyebrow>Misti&apos;s Story</Eyebrow>
              <h1
                className="mt-4"
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
                  fontWeight: 700,
                  color: '#1E3A66',
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                }}
              >
                She built the thing{' '}
                <span style={{ color: '#C2185B', fontStyle: 'italic' }}>
                  she always wanted as a client.
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: '#334155' }}>
                Misti Bruton is the founder and CEO of HeyPearl and the creator of PearlOS — the first AI Authority Infrastructure built specifically for real estate professionals and local businesses competing in the age of AI search.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#64748B' }}>
                Her mission: help experienced Realtors stop chasing cold leads and become the obvious, AI-recommended choice in their market.
              </p>

              {/* Social links */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200"
                  style={{ background: '#0077B5', color: '#FFFFFF' }}
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <LinkButton href={site.strategyCallUrl} external variant="primary" size="md" withArrow>
                  Book a Strategy Call
                </LinkButton>
                <a
                  href={site.founder.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 hover:border-[#C2185B] hover:text-[#C2185B]"
                  style={{ border: '1px solid #E7E3DD', color: '#334155' }}
                >
                  mistibruton.com
                  <ArrowRight size={13} />
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Story timeline */}
      <section className="py-24 bg-[#F8F5F0]" aria-label="Misti's story">
        <Container size="lg">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.5)' }} aria-hidden />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2185B' }}>
                The Story
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                color: '#1E3A66',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                maxWidth: '36rem',
                marginBottom: '3rem',
              }}
            >
              From the operator's chair to building the infrastructure.
            </h2>
          </Reveal>

          <div className="relative">
            {/* Vertical rule */}
            <div
              aria-hidden
              className="hidden md:block absolute left-[11px] top-2 bottom-2 w-px"
              style={{ background: 'rgba(194,24,91,0.12)' }}
            />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <div className="md:flex gap-8 items-start">
                    <div
                      className="hidden md:flex shrink-0 w-6 h-6 rounded-full items-center justify-center mt-1"
                      style={{ background: '#C2185B' }}
                      aria-hidden
                    >
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="rounded-2xl bg-white border border-[#E7E3DD] p-7 flex-1">
                      <div
                        style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C2185B', marginBottom: '0.5rem' }}
                      >
                        {item.period}
                      </div>
                      <p style={{ fontSize: '0.9375rem', color: '#334155', lineHeight: 1.75 }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What she built — expertise pillars */}
      <section className="py-24 bg-white" aria-label="Areas of expertise">
        <Container size="lg">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.5)' }} aria-hidden />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2185B' }}>
                The Work
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 700,
                color: '#1E3A66',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                marginBottom: '0.75rem',
              }}
            >
              What Misti actually builds.
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#64748B', lineHeight: 1.75, maxWidth: '38rem', marginBottom: '3rem' }}>
              Each pillar of HeyPearl reflects a discipline Misti has studied, practiced, and systematized for the operators and agents she works with.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link
                  href={p.href}
                  className="group flex flex-col gap-3 h-full rounded-2xl border border-[#E7E3DD] bg-[#F8F5F0] p-7 transition-shadow hover:shadow-md hover:border-[#C2185B]/20"
                >
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C2185B' }}>
                    Expertise
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#1E3A66',
                      lineHeight: 1.3,
                    }}
                  >
                    {p.label}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.7, flex: 1 }}>
                    {p.body}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#C2185B] mt-1">
                    Learn more <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Photo / editorial band */}
      <section className="py-16 bg-[#F8F5F0]">
        <Container size="lg">
          <Reveal>
            <div className="relative aspect-[16/6] w-full rounded-[2rem] overflow-hidden border border-[#E7E3DD]">
              <Image
                src="/images/misti-speaking.jpg"
                alt="Misti Bruton speaking at a real estate industry event"
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, rgba(30,58,102,0.6) 0%, rgba(30,58,102,0.1) 60%, transparent 100%)' }}
              />
              <div className="absolute inset-0 flex flex-col justify-center px-10 sm:px-14 max-w-lg">
                <blockquote>
                  <p
                    style={{
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                      fontStyle: 'italic',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      lineHeight: 1.45,
                      marginBottom: '0.75rem',
                    }}
                  >
                    &ldquo;The most capable Realtors shouldn&apos;t have to chase cold leads. They should be the obvious answer — in every search, on every platform, from every AI.&rdquo;
                  </p>
                  <footer style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                    — Misti Bruton, Founder &amp; CEO, HeyPearl
                  </footer>
                </blockquote>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Vision section */}
      <section className="py-24 bg-white" aria-label="Misti's vision">
        <Container size="md">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(182,146,94,0.5)' }} aria-hidden />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2185B' }}>
                The Vision
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 700,
                color: '#1E3A66',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem',
              }}
            >
              Long-term authority over short-term noise.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: '#334155' }}>
              <p>
                Most marketing for real estate agents treats visibility as a campaign — something you buy for 90 days and then watch decay. Misti built HeyPearl on the opposite belief: that authority compounds. Every review earned, every citation built, every page indexed makes the next one easier.
              </p>
              <p>
                Her vision is an industry where the most experienced, most knowledgeable agents — the ones buyers and sellers actually need — are the ones AI engines surface first. Not because they outspent anyone. Because they built the infrastructure that earns that recommendation permanently.
              </p>
              <p>
                That infrastructure is HeyPearl. The operational layer beneath it is{' '}
                <Link href="/platform/pearlos" className="text-[#C2185B] font-medium hover:underline">
                  PearlOS
                </Link>
                . Together, they form a system that converts AI visibility into closed business — without the churn, the cold calls, or the ad spend treadmill.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="mt-10 rounded-2xl p-8"
              style={{ background: '#F8F5F0', border: '1px solid #E7E3DD' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Linkedin size={16} style={{ color: '#0077B5' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748B' }}>
                  Follow Misti on LinkedIn
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.7, marginBottom: '1rem' }}>
                Misti shares insights on AI search, GEO, authority building, and the future of real estate marketing. 500+ connections and growing.
              </p>
              <a
                href={site.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200 hover:opacity-90"
                style={{ background: '#0077B5', color: '#FFFFFF' }}
              >
                <Linkedin size={14} />
                Connect on LinkedIn
                <ArrowRight size={13} />
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-[#F8F5F0]" aria-label="Related pages">
        <Container size="lg">
          <Reveal>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '1.25rem' }}>
              Explore HeyPearl
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Platform Overview', href: '/platform/pearlos' },
                { label: 'Recent Client Wins', href: '/results/recent-wins' },
                { label: 'Case Studies', href: '/results/case-studies' },
                { label: 'GEO Engine', href: '/platform/geo-engine' },
                { label: 'Authority Score', href: '/platform/authority-score' },
                { label: 'About HeyPearl', href: '/about' },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#C2185B] hover:border-[#C2185B]"
                  style={{ border: '1px solid #E7E3DD', color: '#334155', background: '#FFFFFF' }}
                >
                  {label}
                  <ArrowRight size={12} />
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
