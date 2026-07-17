import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { posts } from '@/lib/posts';
import { slugify } from '@/lib/slugify';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQ — AI Authority Questions Answered | HeyPearl',
  description:
    'Answers to the most common questions about AI Authority Infrastructure, generative engine optimization, entity SEO, and how to make your business the one AI recommends.',
  openGraph: {
    title: 'FAQ — AI Authority Questions Answered | HeyPearl',
    description:
      'Answers to the most common questions about AI Authority Infrastructure — how AI recommends businesses, what GEO is, and how to build entity architecture.',
    images: ['/images/og/og-default.webp'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: posts.flatMap((post) =>
    post.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
};

type FaqGroup = {
  postSlug: string;
  postTitle: string;
  eyebrow: string;
  items: { q: string; a: string; slug: string }[];
};

function buildGroups(): FaqGroup[] {
  return posts
    .filter((p) => p.faq.length > 0)
    .map((p) => ({
      postSlug: p.slug,
      postTitle: p.h1,
      eyebrow: p.eyebrow,
      items: p.faq.map((f) => ({ q: f.q, a: f.a, slug: slugify(f.q) })),
    }));
}

const bg = '#F7F4EF';
const text = '#1C1917';
const secondary = 'rgba(28,25,23,0.5)';
const gold = '#BF9B5C';
const border = 'rgba(28,25,23,0.07)';
const card = '#FFFFFF';

export default function FaqIndexPage() {
  const groups = buildGroups();
  const totalQuestions = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ background: bg, minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ borderBottom: `1px solid ${border}`, paddingTop: '5rem', paddingBottom: '4rem' }}>
          <Container size="lg">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.5)' }} aria-hidden />
                <span style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: gold }}>
                  Frequently Asked Questions
                </span>
              </div>
              <h1
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                  fontWeight: 700,
                  color: text,
                  lineHeight: 1.08,
                  letterSpacing: '-0.022em',
                  marginBottom: '1.5rem',
                }}
              >
                Every question about<br />
                <span style={{ color: gold, fontStyle: 'italic' }}>AI Authority — answered.</span>
              </h1>
              <p style={{ fontSize: '1.05rem', color: secondary, lineHeight: 1.75, maxWidth: '38rem' }}>
                {totalQuestions} questions sourced from the AI Authority Library — covering GEO, entity SEO,
                structured data, reputation signals, and how to make your business the one AI recommends.
              </p>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-8 mt-10">
              {[
                { value: String(totalQuestions), label: 'Questions answered' },
                { value: String(groups.length), label: 'Topic areas' },
                { value: '100%', label: 'Free — open access' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: text, letterSpacing: '-0.02em' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 500, color: secondary, marginTop: '0.125rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ groups */}
        <section style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
          <Container size="lg">
            <div className="space-y-12">
              {groups.map((group) => (
                <div key={group.postSlug}>
                  {/* Group header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: secondary, marginBottom: '0.3rem' }}>
                        {group.eyebrow}
                      </div>
                      <h2
                        style={{
                          fontFamily: 'var(--font-playfair), Georgia, serif',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: text,
                          letterSpacing: '-0.015em',
                        }}
                      >
                        {group.postTitle}
                      </h2>
                    </div>
                    <Link
                      href={`/resources/${group.postSlug}`}
                      className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold hover:opacity-70 transition-opacity"
                      style={{ color: gold }}
                    >
                      Read full article
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>

                  {/* Questions */}
                  <div style={{ border: `1px solid ${border}`, borderRadius: '0.875rem', overflow: 'hidden', background: card }}>
                    {group.items.map((item, i) => (
                      <Link
                        key={item.slug}
                        href={`/faq/${item.slug}`}
                        className="group flex items-start justify-between gap-6 p-6 hover:bg-[#F7F4EF] transition-colors duration-150"
                        style={{ borderBottom: i < group.items.length - 1 ? `1px solid ${border}` : undefined }}
                      >
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p
                            className="group-hover:text-[#BF9B5C] transition-colors duration-200"
                            style={{ fontSize: '0.95rem', fontWeight: 600, color: text, lineHeight: 1.45, marginBottom: '0.4rem' }}
                          >
                            {item.q}
                          </p>
                          <p style={{ fontSize: '0.82rem', color: secondary, lineHeight: 1.65 }} className="line-clamp-2">
                            {item.a}
                          </p>
                        </div>
                        <ArrowUpRight
                          size={14}
                          className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-60 transition-opacity"
                          style={{ color: gold }}
                        />
                      </Link>
                    ))}
                  </div>

                  {/* Mobile article link */}
                  <div className="sm:hidden mt-3 text-right">
                    <Link
                      href={`/resources/${group.postSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold"
                      style={{ color: gold }}
                    >
                      Read full article
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section style={{ borderTop: `1px solid ${border}`, background: '#090909', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <Container size="md">
            <div className="text-center">
              <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: gold, marginBottom: '1.25rem' }}>
                Ready to Apply This
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  fontWeight: 700,
                  color: '#F2EDE4',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                These are the answers.<br />
                <span style={{ color: gold, fontStyle: 'italic' }}>We build the infrastructure.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.7, maxWidth: '28rem', margin: '0 auto 2.5rem' }}>
                Book a Strategy Call and we'll audit your current AI visibility, identify the gaps,
                and show you what it takes to become the recommended choice in your market.
              </p>
              <Link
                href={site.strategyCallUrl}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-opacity hover:opacity-85"
                style={{ background: gold, color: '#090909', fontSize: '0.88rem', letterSpacing: '-0.01em' }}
              >
                Book a Strategy Call
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </Container>
        </section>

      </div>
    </>
  );
}
