import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LinkButton } from '@/components/ui/Button';
import { site } from '@/lib/site';
import { posts, formatDate } from '@/lib/posts';
import { slugify } from '@/lib/slugify';
import { getFaqEnrichment } from '@/lib/faq-content';
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, Clock, ExternalLink } from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

type FaqEntry = {
  q: string;
  a: string;
  postSlug: string;
  postTitle: string;
  postEyebrow: string;
  postPublishedAt: string;
};

function getAllFaqs(): FaqEntry[] {
  const faqs: FaqEntry[] = [];
  for (const post of posts) {
    for (const item of post.faq) {
      faqs.push({
        q: item.q,
        a: item.a,
        postSlug: post.slug,
        postTitle: post.h1,
        postEyebrow: post.eyebrow,
        postPublishedAt: post.publishedAt,
      });
    }
  }
  return faqs;
}

function findFaq(slug: string): FaqEntry | undefined {
  return getAllFaqs().find((f) => slugify(f.q) === slug);
}

export async function generateStaticParams() {
  return getAllFaqs().map((f) => ({ slug: slugify(f.q) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const faq = findFaq(slug);
  if (!faq) return {};

  const canonical = `${site.url}/faq/${slug}`;
  const enrichment = getFaqEnrichment(faq.q);
  const description = enrichment
    ? faq.a.slice(0, 155) + '…'
    : faq.a.slice(0, 160);

  return {
    title: `${faq.q} | Hey Pearl`,
    description,
    alternates: { canonical },
    authors: [{ name: site.founder.name, url: site.founder.site }],
    openGraph: {
      title: `${faq.q} | Hey Pearl`,
      description,
      type: 'article',
      publishedTime: faq.postPublishedAt,
      authors: [site.founder.name],
    },
    twitter: {
      card: 'summary',
      title: `${faq.q} | Hey Pearl`,
      description,
    },
  };
}

/* ── Lightweight markdown renderer (subset) ── */
function renderBody(md: string): React.ReactNode[] {
  const lines = md.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="mt-7 mb-2 font-display text-lg text-plum">
          {inlineFmt(line.slice(4))}
        </h3>,
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="mt-10 mb-3 font-display text-xl sm:text-2xl text-plum">
          {inlineFmt(line.slice(3))}
        </h2>,
      );
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="my-5 border-l-4 border-orange pl-5 italic text-slate/80 text-[0.95rem] leading-relaxed">
          {inlineFmt(line.slice(2))}
        </blockquote>,
      );
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 flex flex-col gap-2 pl-5 list-disc text-slate leading-relaxed text-[0.95rem]">
          {items.map((item, j) => <li key={j}>{inlineFmt(item)}</li>)}
        </ul>,
      );
      continue;
    } else if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-4 flex flex-col gap-2 pl-5 list-decimal text-slate leading-relaxed text-[0.95rem]">
          {items.map((item, j) => <li key={j}>{inlineFmt(item)}</li>)}
        </ol>,
      );
      continue;
    } else if (line.trim() === '') {
      // skip blank
    } else {
      elements.push(
        <p key={i} className="mt-4 text-slate leading-relaxed text-[0.95rem] sm:text-base">
          {inlineFmt(line)}
        </p>,
      );
    }
    i++;
  }
  return elements;
}

function inlineFmt(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1]) parts.push(<strong key={match.index} className="font-semibold text-plum">{match[1]}</strong>);
    else if (match[2]) parts.push(<em key={match.index}>{match[2]}</em>);
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : <>{parts}</>;
}

export default async function FaqPage({ params }: Props) {
  const { slug } = await params;
  const faq = findFaq(slug);
  if (!faq) notFound();

  const enrichment = getFaqEnrichment(faq.q);
  const allFaqs = getAllFaqs();

  // Related questions: questions named in enrichment, or fallback same-post FAQs
  const relatedFaqs = enrichment?.relatedQuestions
    ? enrichment.relatedQuestions
        .map((q) => allFaqs.find((f) => slugify(f.q) === slugify(q)))
        .filter(Boolean)
        .slice(0, 4) as FaqEntry[]
    : allFaqs
        .filter((f) => f.postSlug === faq.postSlug && slugify(f.q) !== slug)
        .slice(0, 4);

  // Related articles: same eyebrow category, exclude parent post
  const relatedArticles = posts
    .filter((p) => p.slug !== faq.postSlug)
    .sort((a, b) => (a.eyebrow === faq.postEyebrow ? -1 : 1) - (b.eyebrow === faq.postEyebrow ? -1 : 1))
    .slice(0, 3);

  const lastUpdated = enrichment?.lastUpdated ?? formatDate(faq.postPublishedAt).split(' ').slice(0, 2).join(' ');

  /* ── JSON-LD ── */
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: enrichment ? faq.a : faq.a,
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: faq.q,
    description: faq.a.slice(0, 160),
    datePublished: faq.postPublishedAt,
    dateModified: faq.postPublishedAt,
    author: {
      '@type': 'Person',
      name: site.founder.name,
      url: site.founder.site,
      jobTitle: site.founder.role,
    },
    publisher: {
      '@type': 'Organization',
      name: site.legalName,
      url: site.url,
    },
    url: `${site.url}/faq/${slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${site.url}/faq/${slug}` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${site.url}/insights` },
      { '@type': 'ListItem', position: 3, name: faq.postTitle, item: `${site.url}/insights/${faq.postSlug}` },
      { '@type': 'ListItem', position: 4, name: faq.q, item: `${site.url}/faq/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-cream min-h-screen">

        {/* ── Hero strip ── */}
        <header className="bg-plum text-cream py-12 sm:py-14">
          <Container size="md">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-cream/50">
                <li><Link href="/" className="hover:text-cream transition">Home</Link></li>
                <li aria-hidden className="text-cream/25">/</li>
                <li><Link href="/insights" className="hover:text-cream transition">Insights</Link></li>
                <li aria-hidden className="text-cream/25">/</li>
                <li>
                  <Link href={`/insights/${faq.postSlug}`} className="hover:text-cream transition">
                    {faq.postEyebrow}
                  </Link>
                </li>
                <li aria-hidden className="text-cream/25">/</li>
                <li className="text-cream/80">FAQ</li>
              </ol>
            </nav>

            <Eyebrow tone="cream">{faq.postEyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-display-sm text-cream max-w-3xl leading-tight">
              {faq.q}
            </h1>

            {/* Author + date */}
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-cream/60">
              <span className="flex items-center gap-2">
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-cream/20 flex-shrink-0">
                  <Image
                    src={site.founder.photo}
                    alt={site.founder.name}
                    fill
                    sizes="24px"
                    className="object-cover object-top"
                  />
                </div>
                {site.founder.name}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                Last updated: {lastUpdated}
              </span>
            </div>
          </Container>
        </header>

        <Container size="md" className="py-12 sm:py-16">

          {/* ── Quick Answer ── */}
          <aside aria-label="Quick answer" className="rounded-2xl border-l-4 border-magenta bg-white shadow-soft px-6 py-5 mb-6">
            <p className="text-[0.65rem] tracking-micro uppercase text-magenta font-medium mb-2">
              Quick Answer
            </p>
            <p className="text-base sm:text-[1.0625rem] text-slate leading-relaxed font-medium">
              {faq.a}
            </p>
          </aside>

          {/* ── Full article banner (top) ── */}
          <Link
            href={`/insights/${faq.postSlug}`}
            className="group flex items-center justify-between gap-4 rounded-2xl bg-plum text-cream px-6 py-4 mb-10 hover:bg-plum/90 transition-colors"
          >
            <div>
              <p className="text-[0.6rem] tracking-micro uppercase text-cream/50 mb-1">Full article</p>
              <p className="text-sm font-medium leading-snug group-hover:text-cream/90 transition-colors line-clamp-1">
                {faq.postTitle}
              </p>
            </div>
            <ArrowRight size={18} className="flex-shrink-0 text-cream/60 group-hover:text-cream group-hover:translate-x-0.5 transition-all" />
          </Link>

          {/* ── Key Takeaways ── */}
          {enrichment?.takeaways && enrichment.takeaways.length > 0 && (
            <section aria-label="Key takeaways" className="rounded-2xl bg-lavender border border-plum/10 px-6 py-6 mb-10">
              <p className="text-[0.65rem] tracking-micro uppercase text-plum/60 font-medium mb-4">
                Key Takeaways
              </p>
              <ul className="flex flex-col gap-3">
                {enrichment.takeaways.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-magenta flex-shrink-0 mt-0.5" />
                    <span className="text-slate text-sm leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Expanded article body ── */}
          {enrichment?.body && (
            <article className="mb-10">
              {renderBody(enrichment.body)}
            </article>
          )}

          {/* ── Comparison table ── */}
          {enrichment?.comparisonTable && (
            <section className="mb-10" aria-label="Comparison table">
              <div className="overflow-x-auto rounded-2xl border border-plum/10 shadow-soft">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-plum text-cream">
                      {enrichment.comparisonTable.headers.map((h) => (
                        <th
                          key={h}
                          className="px-5 py-3 text-left text-[0.72rem] tracking-micro uppercase font-medium whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {enrichment.comparisonTable.rows.map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-cream'}
                      >
                        {enrichment.comparisonTable!.headers.map((h) => (
                          <td key={h} className="px-5 py-3 text-slate leading-relaxed border-t border-plum/5">
                            {row[h] ?? '—'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* ── Full article card (bottom) ── */}
          <Link
            href={`/insights/${faq.postSlug}`}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-plum/10 bg-white px-6 py-5 mb-12 hover:border-magenta/30 hover:shadow-soft transition-all duration-300"
          >
            <div>
              <p className="text-[0.6rem] tracking-micro uppercase text-slate/40 mb-1">Read the full article</p>
              <p className="text-sm font-semibold text-plum group-hover:text-magenta transition-colors leading-snug">
                {faq.postTitle}
              </p>
              <p className="text-xs text-slate/50 mt-1">{faq.postEyebrow}</p>
            </div>
            <ArrowRight size={16} className="flex-shrink-0 text-slate/30 group-hover:text-magenta group-hover:translate-x-0.5 transition-all" />
          </Link>

          {/* ── Related Questions ── */}
          {relatedFaqs.length > 0 && (
            <section aria-label="Related questions" className="mb-12">
              <h2 className="font-display text-xl sm:text-2xl text-plum mb-6">
                Related Questions
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedFaqs.map((rf) => (
                  <Link
                    key={slugify(rf.q)}
                    href={`/faq/${slugify(rf.q)}`}
                    className="group flex items-start justify-between gap-4 rounded-2xl border border-plum/10 bg-white p-5 hover:border-magenta/30 hover:shadow-soft transition-all duration-300"
                  >
                    <span className="text-sm font-medium text-plum group-hover:text-magenta transition-colors leading-snug">
                      {rf.q}
                    </span>
                    <ArrowRight size={14} className="flex-shrink-0 mt-0.5 text-slate/40 group-hover:text-magenta transition-colors" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── Sources ── */}
          {enrichment?.sources && enrichment.sources.length > 0 && (
            <section aria-label="Sources" className="mb-12">
              <h2 className="font-display text-lg text-plum mb-4">Sources</h2>
              <ul className="flex flex-col gap-2">
                {enrichment.sources.map((src) => (
                  <li key={src.url} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-magenta flex-shrink-0" />
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate hover:text-plum transition inline-flex items-center gap-1.5"
                    >
                      {src.label}
                      <ExternalLink size={11} className="text-slate/40" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Related Articles ── */}
          {relatedArticles.length > 0 && (
            <section aria-label="Related articles" className="mb-12">
              <h2 className="font-display text-xl sm:text-2xl text-plum mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {relatedArticles.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/insights/${post.slug}`}
                    className="group block rounded-2xl border border-plum/10 bg-white overflow-hidden hover:shadow-soft hover:border-magenta/20 transition-all duration-300"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.h1}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <Eyebrow tone="magenta" className="mb-2">{post.eyebrow}</Eyebrow>
                      <p className="font-display text-sm text-plum leading-snug line-clamp-2 group-hover:text-magenta transition-colors">
                        {post.h1}
                      </p>
                      <p className="mt-2 text-xs text-slate/60 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-3 flex items-center gap-3 text-[0.68rem] text-slate/50">
                        <span className="flex items-center gap-1">
                          <Calendar size={10} />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={10} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── Single CTA ── */}
          <div className="rounded-2xl bg-lavender border border-plum/10 p-6 sm:p-8">
            <Eyebrow>Hey Pearl</Eyebrow>
            <h2 className="mt-3 font-display text-xl text-plum">
              Need help with AI visibility?
            </h2>
            <p className="mt-2 text-slate text-sm leading-relaxed max-w-lg">
              Hey Pearl builds the authority infrastructure that gets your business cited and recommended by AI engines — schema, entity SEO, editorial content, and reputation signals.
            </p>
            <div className="mt-5">
              <LinkButton href="/contact" variant="secondary" size="sm">
                Book a consultation
              </LinkButton>
            </div>
          </div>

        </Container>
      </div>
    </>
  );
}
