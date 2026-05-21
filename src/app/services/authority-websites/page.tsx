import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { site } from '@/lib/site';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Authority Websites — Editorial, AI-Friendly Builds',
  description:
    'Editorial websites engineered to be cited, indexed, and surfaced by AI. Cinematic design with authority architecture built in.',
  openGraph: { images: ['/images/og-authority-websites.jpg'] },
  twitter: { images: ['/images/og-authority-websites.jpg'] },
};

const principles = [
  {
    title: 'Editorial Design Language',
    body: 'A premium, magazine-grade aesthetic that builds trust before a single line of copy is read.',
  },
  {
    title: 'Authority Page Architecture',
    body: 'Pillar pages, topic clusters, and entity-rich content built so AI understands exactly who you are.',
  },
  {
    title: 'AI-Friendly Schema',
    body: 'Structured data, machine-readable signals, and sitemaps optimized for AI Overviews and answer engines.',
  },
  {
    title: 'Performance & Accessibility',
    body: 'Fast, accessible, and thoughtfully built. The kind of quality AI rewards and humans feel.',
  },
  {
    title: 'Conversion Infrastructure',
    body: 'Booking, lead capture, and PearlOS workflows woven into the architecture from day one.',
  },
  {
    title: 'Long-Term Compounding',
    body: 'Designed so every additional page deepens authority instead of starting over.',
  },
];

export default function AuthorityWebsitesPage() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: 'Authority Websites',
            url: `${site.url}/services/authority-websites`,
            description:
              'Editorial websites engineered to be cited, indexed, and surfaced by AI. Cinematic design with authority architecture built in.',
            category: 'Website Design & Development',
          }),
          breadcrumbSchema([
            { name: 'Home', url: site.url },
            { name: 'Services', url: `${site.url}/services` },
            { name: 'Authority Websites', url: `${site.url}/services/authority-websites` },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Authority Websites"
        title={
          <>
            Editorial websites,{' '}
            <span className="italic font-light text-magenta">
              built to be cited.
            </span>
          </>
        }
        description="Cinematic, editorial websites engineered to be discovered, indexed, and surfaced by AI. Premium design with authority architecture built in from the first sketch."
        image="/images/authority-website-preview.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <LinkButton
            href={site.strategyCallUrl}
            external
            variant="primary"
            size="lg"
            withArrow
          >
            Schedule a Strategy Call
          </LinkButton>
          <LinkButton href="/services" variant="secondary" size="lg">
            All services
          </LinkButton>
        </div>
      </PageHero>

      {/* Editorial preview band */}
      <section className="pt-20">
        <Container size="xl">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              <figure className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-plum/5 shadow-soft">
                <Image
                  src="/images/authority-website-preview.jpg"
                  alt="Authority website on laptop"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-plum/30 via-transparent to-transparent"
                />
                <figcaption className="absolute bottom-5 left-5 text-[0.65rem] tracking-micro uppercase text-cream">
                  Editorial layout · Desktop
                </figcaption>
              </figure>
              <figure className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-plum/5 shadow-soft">
                <Image
                  src="/images/authority-website-tablet.jpg"
                  alt="Authority website on tablet"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-plum/30 via-transparent to-transparent"
                />
                <figcaption className="absolute bottom-5 left-5 text-[0.65rem] tracking-micro uppercase text-cream">
                  Editorial layout · Tablet
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-24">
        <Container size="xl">
          <Reveal>
            <SectionHeading
              eyebrow="Build Principles"
              title="What makes a website an authority website."
              description="Most websites are brochures. Authority websites are infrastructure. The difference shows up in everything from the first hero to the last citation."
            />
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl bg-white border border-plum/5 shadow-soft p-8">
                  <div className="text-[0.65rem] tracking-micro uppercase text-magenta">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-3 font-display text-xl text-plum">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 bg-lavender relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src="/images/authority-architecture.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-lavender/60 via-lavender/40 to-lavender/55" />
        </div>
        <Container size="xl" className="relative">
          <div className="grid lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-5">
              <Eyebrow>The Build</Eyebrow>
              <h2 className="mt-4 font-display text-display-md text-plum">
                A four phase build that ships sharper than what most teams ship in a year.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <ol className="flex flex-col gap-6">
                {[
                  ['Strategy & Architecture', 'Authority mapping, entity strategy, and editorial structure.'],
                  ['Editorial Design', 'Cinematic, premium visual system. Custom, not template.'],
                  ['Engineering & Schema', 'Next.js 14, performance, accessibility, AI-ready schema.'],
                  ['Launch & Compounding', 'Go-live, then ongoing authority expansion through GEO.'],
                ].map(([title, body], i) => (
                  <li
                    key={title}
                    className="flex gap-5 border-b border-plum/10 pb-6 last:border-0"
                  >
                    <div className="font-display text-3xl text-magenta">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <div className="font-display text-xl text-plum">
                        {title}
                      </div>
                      <p className="mt-2 text-slate text-sm leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
