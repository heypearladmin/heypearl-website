import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { formatDate } from '@/lib/posts';
import type { Post } from '@/lib/posts';

type RelatedArticlesProps = {
  current: Post;
  all: Post[];
};

export function RelatedArticles({ current, all }: RelatedArticlesProps) {
  // Match by same eyebrow/category, exclude current, cap at 3
  const related = all
    .filter((p) => p.slug !== current.slug)
    .sort((a, b) => {
      // same eyebrow first
      const aMatch = a.eyebrow === current.eyebrow ? 1 : 0;
      const bMatch = b.eyebrow === current.eyebrow ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <aside aria-label="Related articles" className="mt-16">
      <div className="mb-6 flex items-center gap-3">
        <Eyebrow>Related articles</Eyebrow>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        {related.map((post) => (
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
              <div className="mt-3 flex items-center gap-3 text-[0.7rem] text-slate/60">
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
    </aside>
  );
}
