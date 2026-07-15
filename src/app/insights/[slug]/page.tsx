import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LinkButton } from '@/components/ui/Button';
import { QuickAnswer } from '@/components/blog/QuickAnswer';
import { TableOfContents, extractToc } from '@/components/blog/TableOfContents';
import { slugify } from '@/lib/slugify';
import { FAQCard } from '@/components/blog/FAQCard';
import { RelatedArticles } from '@/components/blog/RelatedArticles';
import { site } from '@/lib/site';
import { getPost, posts, formatDate } from '@/lib/posts';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const canonical = `${site.url}/insights/${slug}`;
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical },
    authors: [{ name: site.founder.name, url: site.founder.site }],
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [site.founder.name],
      images: [{ url: `${site.url}${post.image}`, width: 1600, height: 900, alt: post.h1 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.metaDescription,
      images: [`${site.url}${post.image}`],
    },
  };
}

/* ------------------------------------------------------------------ */
/* Markdown renderer — adds id anchors on headings for ToC linking     */
/* ------------------------------------------------------------------ */
function renderMarkdown(md: string): React.ReactNode[] {
  const lines = md.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('### ')) {
      const text = line.slice(4);
      const id = slugify(text.replace(/\*\*/g, ''));
      elements.push(
        <h3 key={i} id={id} className="mt-8 mb-3 font-display text-xl text-plum scroll-mt-24">
          {inlineFormat(text)}
        </h3>,
      );
    } else if (line.startsWith('## ')) {
      const text = line.slice(3);
      const id = slugify(text.replace(/\*\*/g, ''));
      elements.push(
        <h2 key={i} id={id} className="mt-12 mb-4 font-display text-2xl sm:text-3xl text-plum scroll-mt-24">
          {inlineFormat(text)}
        </h2>,
      );
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="my-6 border-l-4 border-orange pl-5 italic text-slate/80 text-base leading-relaxed">
          {inlineFormat(line.slice(2))}
        </blockquote>,
      );
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-5 flex flex-col gap-2 pl-5 list-disc text-slate leading-relaxed">
          {items.map((item, j) => <li key={j}>{inlineFormat(item)}</li>)}
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
        <ol key={`ol-${i}`} className="my-5 flex flex-col gap-2 pl-5 list-decimal text-slate leading-relaxed">
          {items.map((item, j) => <li key={j}>{inlineFormat(item)}</li>)}
        </ol>,
      );
      continue;
    } else if (line.startsWith('```')) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={`code-${i}`} className="my-6 overflow-x-auto rounded-xl bg-plum/95 px-5 py-4 text-sm text-cream/90 leading-relaxed">
          <code>{codeLines.join('\n')}</code>
        </pre>,
      );
    } else if (line.startsWith('**Note:**') || line.startsWith('**Tip:**') || line.startsWith('**Important:**')) {
      elements.push(
        <div key={i} className="my-5 rounded-xl bg-lavender border border-plum/10 px-5 py-4 text-sm text-slate leading-relaxed">
          {inlineFormat(line)}
        </div>,
      );
    } else if (line.trim() === '') {
      // skip blank lines
    } else {
      elements.push(
        <p key={i} className="mt-5 text-slate leading-relaxed text-base sm:text-[1.0625rem]">
          {inlineFormat(line)}
        </p>,
      );
    }
    i++;
  }
  return elements;
}

function inlineFormat(text: string): React.ReactNode {
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

export default async function InsightPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const toc = extractToc(post.content);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.h1,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
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
      logo: { '@type': 'ImageObject', url: `${site.url}/images/og-default.jpg` },
    },
    image: { '@type': 'ImageObject', url: `${site.url}${post.image}`, width: 1600, height: 900 },
    url: `${site.url}/insights/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${site.url}/insights/${post.slug}` },
  };

  const faqSchema = post.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${site.url}/insights` },
      { '@type': 'ListItem', position: 3, name: post.h1, item: `${site.url}/insights/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ── */}
      <header className="relative overflow-hidden bg-plum text-cream">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src={post.image}
            alt={post.h1}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-plum/50 via-plum/60 to-plum/85" />
        </div>
        <Container size="lg" className="relative pt-12 pb-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-cream/60">
              <li>
                <Link href="/insights" className="inline-flex items-center gap-1.5 hover:text-cream transition">
                  <ArrowLeft size={12} />
                  Insights
                </Link>
              </li>
              <li aria-hidden className="text-cream/30">/</li>
              <li className="text-cream/80 line-clamp-1">{post.eyebrow}</li>
            </ol>
          </nav>

          <Eyebrow tone="cream">{post.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-display-md text-cream max-w-3xl leading-tight">
            {post.h1}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-cream/70">
            <span className="flex items-center gap-2">
              <User size={13} />
              {site.founder.name}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={13} />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </span>
            <span className="flex items-center gap-2">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>
        </Container>
      </header>

      {/* ── Body ── */}
      <div className="py-12 sm:py-16 bg-cream">
        <Container size="lg">
          <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-14 xl:gap-20">

            {/* Main column */}
            <article>
              {/* Quick Answer */}
              <QuickAnswer answer={post.quickAnswer} question={post.h1} />

              {/* Mobile ToC */}
              <div className="lg:hidden mb-8">
                <TableOfContents items={toc} />
              </div>

              {/* Excerpt pull-quote */}
              <p className="text-lg sm:text-xl text-slate leading-relaxed font-medium border-l-4 border-magenta pl-5 mb-10">
                {post.excerpt}
              </p>

              {/* Main content */}
              <div className="prose-article">
                {renderMarkdown(post.content)}
              </div>

              {/* Conclusion */}
              {post.conclusion && (
                <div className="mt-12 rounded-2xl bg-lavender border border-plum/10 p-6 sm:p-8">
                  {renderMarkdown(post.conclusion)}
                </div>
              )}

              {/* Internal links */}
              {post.internalLinks.length > 0 && (
                <div className="mt-12 rounded-2xl bg-plum text-cream p-6 sm:p-8">
                  <p className="text-[0.65rem] tracking-micro uppercase text-cream/60 mb-4">
                    Related from Hey Pearl
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {post.internalLinks.map((link) => (
                      <LinkButton key={link.href} href={link.href} variant="inverse" size="sm" withArrow>
                        {link.label}
                      </LinkButton>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ */}
              {post.faq.length > 0 && (
                <section aria-label="Frequently asked questions" className="mt-16">
                  <h2 className="font-display text-2xl sm:text-3xl text-plum mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {post.faq.map((item, i) => (
                      <FAQCard
                        key={i}
                        q={item.q}
                        a={item.a}
                        postSlug={post.slug}
                        index={i}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Related articles */}
              <RelatedArticles current={post} all={posts} />

              {/* Single subtle CTA */}
              <div className="mt-16 rounded-3xl bg-lavender border border-plum/10 p-8 sm:p-10 text-center">
                <Eyebrow>Ready to be found?</Eyebrow>
                <h2 className="mt-3 font-display text-display-sm text-plum">
                  Build the authority AI engines trust.
                </h2>
                <p className="mt-3 text-slate max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                  Hey Pearl builds the authority infrastructure that gets your business cited, recommended, and remembered by AI search engines.
                </p>
                <div className="mt-8">
                  <LinkButton href="/contact" variant="secondary" size="lg">
                    Get in touch
                  </LinkButton>
                </div>
              </div>
            </article>

            {/* Desktop sticky sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents items={toc} />

                {/* Author card */}
                <div className="mt-10 rounded-2xl border border-plum/10 bg-white p-5">
                  <p className="text-[0.65rem] tracking-micro uppercase text-slate/50 mb-3">Author</p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-plum/10">
                      <Image
                        src={site.founder.photo}
                        alt={site.founder.name}
                        fill
                        sizes="40px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-plum">{site.founder.name}</p>
                      <p className="text-xs text-slate/60">{site.founder.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-slate/70 leading-relaxed">
                    Founder of Hey Pearl Agency LLC. Building authority infrastructure for the AI search era.
                  </p>
                </div>
              </div>
            </aside>

          </div>
        </Container>
      </div>
    </>
  );
}
