import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { slugify } from '@/lib/slugify';

type FAQCardProps = {
  q: string;
  a: string;
  postSlug: string;
  index: number;
};

export function FAQCard({ q, a, postSlug, index }: FAQCardProps) {
  const faqSlug = slugify(q);

  return (
    <Link
      href={`/faq/${faqSlug}`}
      className="group rounded-2xl border border-plum/10 bg-white p-6 sm:p-7 flex flex-col gap-3 hover:border-magenta/30 hover:shadow-soft transition-all duration-300"
      aria-label={`Read full answer: ${q}`}
    >
      <h3 className="font-display text-lg text-plum leading-snug group-hover:text-magenta transition-colors">{q}</h3>
      <p className="text-slate text-sm leading-relaxed line-clamp-2">{a}</p>
      <span className="inline-flex items-center gap-2 text-sm font-medium text-magenta group-hover:gap-3 transition-all">
        Read full answer
        <ArrowRight size={13} />
      </span>
    </Link>
  );
}
