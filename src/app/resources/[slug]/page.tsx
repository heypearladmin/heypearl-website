import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowUpRight, BookOpen } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { TableOfContents } from '@/components/resources/TableOfContents';
import { getArticle, getAllSlugs, ARTICLE_META } from '@/lib/resources';
import { site } from '@/lib/site';

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — HeyPearl AI Authority Library`,
    description: article.excerpt,
  };
}

const bg = '#F7F4EF';
const text = '#1C1917';
const secondary = 'rgba(28,25,23,0.5)';
const gold = '#BF9B5C';
const border = 'rgba(28,25,23,0.07)';
const card = '#FFFFFF';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const relatedArticles = article.relatedSlugs
    .map(s => ARTICLE_META.find(a => a.slug === s))
    .filter(Boolean) as typeof ARTICLE_META;

  return (
    <div style={{ background: bg, minHeight: '100vh' }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${border}` }}>
        <Container size="xl">
          <nav aria-label="Breadcrumb">
            <div className="flex items-center gap-2 py-3" style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: secondary }}>
              <Link href="/resources" className="flex items-center gap-1.5 hover:text-[#1C1917] transition-colors">
                <ArrowLeft size={11} />
                Library
              </Link>
              <span style={{ color: 'rgba(28,25,23,0.2)' }}>/</span>
              <span style={{ color: gold }}>{article.category}</span>
            </div>
          </nav>
        </Container>
      </div>

      {/* Article Header */}
      <header style={{ borderBottom: `1px solid ${border}`, paddingTop: '3.5rem', paddingBottom: '2.5rem' }}>
        <Container size="lg">
          <div className="max-w-3xl">
            <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: gold, marginBottom: '1rem' }}>
              {article.category}
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.85rem, 4vw, 3rem)',
                fontWeight: 700,
                color: text,
                lineHeight: 1.1,
                letterSpacing: '-0.022em',
                marginBottom: '1.25rem',
              }}
            >
              {article.headline}
            </h1>
            <div className="flex flex-wrap items-center gap-4" style={{ fontSize: '0.78rem', color: secondary }}>
              <div className="flex items-center gap-1.5">
                <Clock size={12} />
                <span>{article.readTime} min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={12} />
                <span>Updated {article.lastUpdated}</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Quick Answer */}
      <section style={{ borderBottom: `1px solid ${border}`, background: 'rgba(191,155,92,0.04)', paddingTop: '1.75rem', paddingBottom: '1.75rem' }}>
        <Container size="lg">
          <div className="max-w-3xl flex gap-4">
            <div style={{ width: '3px', background: gold, borderRadius: '999px', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: gold, marginBottom: '0.5rem' }}>
                Quick Answer
              </div>
              <p style={{ fontSize: '0.95rem', color: text, lineHeight: 1.75, fontWeight: 500 }}>
                {article.quickAnswer}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Takeaways */}
      <section style={{ borderBottom: `1px solid ${border}`, paddingTop: '1.75rem', paddingBottom: '1.75rem' }}>
        <Container size="lg">
          <div className="max-w-3xl">
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: secondary, marginBottom: '0.875rem' }}>
              Key Takeaways
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {article.keyTakeaways.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ width: '1.25rem', height: '1.25rem', background: 'rgba(191,155,92,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.1rem' }}>
                    <span style={{ fontSize: '0.55rem', fontWeight: 800, color: gold }}>{String(i + 1)}</span>
                  </span>
                  <span style={{ fontSize: '0.88rem', color: text, lineHeight: 1.65 }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Article Body + Sticky TOC */}
      <div style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <Container size="xl">
          <div className="flex gap-12 items-start">

            {/* Body */}
            <article className="flex-1 min-w-0 max-w-3xl">
              {article.body}
            </article>

            {/* Sticky TOC */}
            <aside
              className="hidden lg:block flex-shrink-0 sticky"
              style={{ top: '6rem', width: '13rem', paddingTop: '0.25rem' }}
            >
              <TableOfContents entries={article.toc} />

              {/* CTA in sidebar */}
              <div
                className="mt-8 p-5 rounded-xl"
                style={{ background: '#090909', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: gold, marginBottom: '0.625rem' }}>
                  Ready to Build?
                </div>
                <p style={{ fontSize: '0.78rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  Get a free AI Authority audit and see where your business stands.
                </p>
                <Link
                  href={site.strategyCallUrl}
                  className="flex items-center gap-1.5 text-[#090909] font-semibold rounded-full px-4 py-2 transition-opacity hover:opacity-85"
                  style={{ background: gold, fontSize: '0.75rem', justifyContent: 'center' }}
                >
                  Book a Call
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </aside>

          </div>
        </Container>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section style={{ borderTop: `1px solid ${border}`, paddingTop: '3.5rem', paddingBottom: '4rem' }}>
          <Container size="lg">
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: secondary, marginBottom: '1.5rem' }}>
              Related Guides
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ border: `1px solid ${border}`, borderRadius: '0.875rem', overflow: 'hidden' }}>
              {relatedArticles.map(related => (
                <Link
                  key={related.slug}
                  href={`/resources/${related.slug}`}
                  className="group block p-6 transition-colors duration-150 hover:bg-[#F0EBE3]"
                  style={{ background: card }}
                >
                  <div style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: secondary, marginBottom: '0.375rem' }}>
                    {related.category}
                  </div>
                  <h3
                    className="group-hover:text-[#BF9B5C] transition-colors"
                    style={{ fontSize: '0.93rem', fontWeight: 700, color: text, lineHeight: 1.35, marginBottom: '0.5rem' }}
                  >
                    {related.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <Clock size={10} style={{ color: secondary }} />
                    <span style={{ fontSize: '0.7rem', color: secondary }}>{related.readTime} min</span>
                    <ArrowUpRight size={11} className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: gold }} />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Bottom CTA */}
      <section style={{ borderTop: `1px solid ${border}`, background: '#090909', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Container size="md">
          <div className="text-center">
            <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: gold, marginBottom: '1rem' }}>
              From Understanding to Action
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 700,
                color: '#F2EDE4',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              See where your AI Authority stands today.
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(242,237,228,0.45)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '26rem', margin: '0 auto 2rem' }}>
              Book a Strategy Call and get a free baseline audit of your AI visibility across the six major AI search engines.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={site.strategyCallUrl}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold transition-opacity hover:opacity-85"
                style={{ background: gold, color: '#090909', fontSize: '0.875rem' }}
              >
                Book a Strategy Call
                <ArrowUpRight size={13} />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold transition-opacity hover:opacity-70"
                style={{ background: 'transparent', color: 'rgba(242,237,228,0.6)', fontSize: '0.875rem', border: '1px solid rgba(242,237,228,0.15)' }}
              >
                <BookOpen size={13} />
                Browse All Guides
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
