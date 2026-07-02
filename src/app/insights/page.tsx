import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { LinkButton } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { site } from '@/lib/site';
import { posts, formatDate } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Insights — Editorial on the AI Search Era',
  description:
    'Field-tested frameworks, AI search experiments, and operator intelligence from Hey Pearl on authority infrastructure and the AI search era.',
};

// All published articles, newest first (posts array is already sorted desc)
const published = posts;

// Featured = most recent article
const featured = published[0];
const rest = published.slice(1);

export default function InsightsPage() {
  return (
    <>
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
        description="Field-tested frameworks, AI search experiments, and operator intelligence. A reading room for businesses taking authority infrastructure seriously."
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
            Get in touch
          </LinkButton>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container size="xl">

          {/* Featured article */}
          {featured && (
            <Reveal>
              <Link
                href={`/insights/${featured.slug}`}
                className="group block rounded-3xl bg-plum text-cream overflow-hidden shadow-glow mb-10 relative"
              >
                <div className="absolute inset-0">
                  <Image
                    src={featured.image}
                    alt={featured.h1}
                    fill
                    sizes="100vw"
                    className="object-cover opacity-25 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-plum/95 via-plum/80 to-plum/50" />
                </div>
                <div className="relative grid lg:grid-cols-2 gap-8 p-8 sm:p-12">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-magenta px-3 py-1 text-[0.65rem] tracking-micro uppercase text-cream font-medium">
                        New
                      </span>
                      <Eyebrow tone="cream">{featured.eyebrow}</Eyebrow>
                    </div>
                    <h2 className="font-display text-display-sm text-cream leading-tight">
                      {featured.h1}
                    </h2>
                    <p className="mt-4 text-cream/75 leading-relaxed max-w-xl">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-cream/60">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {formatDate(featured.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {featured.readTime}
                      </span>
                    </div>
                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cream group-hover:text-magenta transition-colors">
                      Read the article
                      <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Article grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => {
              // "New" on the 2 most-recent grid cards (featured card already carries New)
              const isNew = i < 2;
              return (
                <Reveal key={post.slug} delay={i * 0.04}>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="group block rounded-3xl bg-white border border-plum/5 shadow-soft hover:shadow-lift transition-all duration-500 overflow-hidden h-full flex flex-col"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.h1}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-plum/30 via-transparent to-transparent"
                      />
                      {isNew && (
                        <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-magenta px-2.5 py-1 text-[0.6rem] tracking-micro uppercase text-cream font-medium">
                          New
                        </span>
                      )}
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                      <Eyebrow tone="magenta">{post.eyebrow}</Eyebrow>
                      <h3 className="mt-3 font-display text-xl text-plum leading-snug">
                        {post.h1}
                      </h3>
                      <p className="mt-3 text-slate leading-relaxed text-sm flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-slate/60">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-plum/60 group-hover:text-plum transition-colors">
                        Read
                        <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* CTA strip */}
          <Reveal delay={0.15}>
            <div className="mt-16 rounded-3xl bg-lavender border border-plum/10 p-8 sm:p-10 text-center">
              <Eyebrow>Authority Infrastructure</Eyebrow>
              <h2 className="mt-3 font-display text-display-sm text-plum">
                Want to be the business AI recommends?
              </h2>
              <p className="mt-3 text-slate max-w-xl mx-auto">
                Hey Pearl builds the systems, signals, and content that get your business cited, recommended, and trusted by AI search engines.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
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
                  See our services
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
