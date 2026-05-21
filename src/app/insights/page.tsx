import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { LinkButton } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema, breadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Insights — Editorial on the AI Search Era',
  description:
    'Editorial insights, frameworks, and dispatches from HeyPearl on authority infrastructure and the AI search era.',
  openGraph: { images: ['/images/og-default.jpg'] },
  twitter: { images: ['/images/og-default.jpg'] },
};

const upcoming = [
  {
    eyebrow: 'GEO Foundations',
    title: 'Why SEO alone no longer earns visibility',
    description:
      'A field guide to the structural shift inside Google AI Overviews and what it means for operators.',
    image: '/images/insights-article-1.jpg',
  },
  {
    eyebrow: 'Authority Architecture',
    title: 'Topic clusters in the age of answer engines',
    description:
      'How entity-rich content earns AI citations across ChatGPT, Gemini, and Perplexity.',
    image: '/images/insights-article-2.jpg',
  },
  {
    eyebrow: 'Local Authority',
    title: 'The local AI summary stack',
    description:
      'A practical look at the signals AI is now using to decide which local business gets the first mention.',
    image: '/images/insights-article-3.jpg',
  },
  {
    eyebrow: 'Operations',
    title: 'PearlOS and the case for operational infrastructure',
    description:
      'Why visibility without operations is leakage, and how PearlOS closes the loop.',
    image: '/images/insights-article-4.jpg',
  },
];

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', url: site.url },
            { name: 'Insights', url: `${site.url}/insights` },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Editorial dispatches{' '}
            <span className="italic font-light text-magenta">
              from the AI search era.
            </span>
          </>
        }
        description="A reading room for operators thinking seriously about authority infrastructure. The full archive is opening soon."
        image="/images/insights-hero.jpg"
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
          <LinkButton href="/contact" variant="secondary" size="lg">
            Get notified at launch
          </LinkButton>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container size="xl">
          <Reveal>
            <div className="rounded-3xl bg-lavender border border-plum/10 p-8 sm:p-10">
              <Eyebrow>Coming Soon</Eyebrow>
              <h2 className="mt-3 font-display text-display-sm text-plum">
                The HeyPearl reading room.
              </h2>
              <p className="mt-3 text-slate max-w-2xl">
                We are publishing field-tested frameworks, AI search experiments, and operator interviews. Sign up through Contact to be notified when each piece drops.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {upcoming.map((u, i) => (
              <Reveal key={u.title} delay={i * 0.05}>
                <article className="group rounded-3xl bg-white border border-plum/5 shadow-soft overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={u.image}
                      alt={u.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-plum/30 via-transparent to-transparent"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <Eyebrow tone="magenta">{u.eyebrow}</Eyebrow>
                    <h3 className="mt-4 font-display text-2xl text-plum leading-snug">
                      {u.title}
                    </h3>
                    <p className="mt-3 text-slate leading-relaxed text-sm">
                      {u.description}
                    </p>
                    <div className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-plum/60">
                      Coming soon
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-12 text-center text-sm text-slate">
              Want early access?{' '}
              <Link
                href="/contact"
                className="font-medium text-plum link-underline"
              >
                Reach out
              </Link>{' '}
              and we will add you to the launch list.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
