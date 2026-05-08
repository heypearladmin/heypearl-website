import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PricingTier } from '@/lib/pricing';

type PricingCardProps = {
  tier: PricingTier;
  href?: string;
  ctaLabel?: string;
};

export function PricingCard({
  tier,
  href = '/contact',
  ctaLabel = 'Schedule a strategy call',
}: PricingCardProps) {
  const isHighlight = tier.highlight;

  return (
    <article
      className={cn(
        'group relative h-full flex flex-col rounded-3xl p-8 sm:p-10 border transition-all duration-500',
        isHighlight
          ? 'bg-plum text-cream border-plum shadow-glow'
          : 'bg-white text-plum border-plum/5 shadow-soft hover:shadow-lift',
      )}
    >
      {isHighlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-magenta-gradient px-4 py-1 text-[0.65rem] tracking-micro uppercase text-cream shadow-soft">
          Most Chosen
        </div>
      )}

      <div className="flex items-center justify-between gap-4">
        <div
          className={cn(
            'text-[0.65rem] tracking-micro uppercase',
            isHighlight ? 'text-cream/70' : 'text-magenta',
          )}
        >
          {tier.family} · {tier.position}
        </div>
        <div
          className={cn(
            'text-[0.65rem] tracking-micro uppercase',
            isHighlight ? 'text-cream/60' : 'text-slate',
          )}
        >
          {tier.positioning}
        </div>
      </div>

      <h3
        className={cn(
          'mt-6 font-display text-2xl sm:text-3xl',
          isHighlight ? 'text-cream' : 'text-plum',
        )}
      >
        {tier.name}
      </h3>

      <p
        className={cn(
          'mt-3 text-sm leading-relaxed',
          isHighlight ? 'text-cream/75' : 'text-slate',
        )}
      >
        {tier.description}
      </p>

      <div className="mt-8 flex items-baseline gap-1">
        <span
          className={cn(
            'font-display text-5xl',
            isHighlight ? 'text-cream' : 'text-plum',
          )}
        >
          ${tier.price.toLocaleString()}
        </span>
        <span
          className={cn(
            'text-sm',
            isHighlight ? 'text-cream/70' : 'text-slate',
          )}
        >
          /{tier.cadence}
        </span>
      </div>

      <ul className="mt-8 flex flex-col gap-3 flex-1">
        {tier.features.map((f) => (
          <li
            key={f}
            className={cn(
              'flex items-start gap-3 text-sm',
              isHighlight ? 'text-cream/85' : 'text-slate',
            )}
          >
            <Check
              size={16}
              className={cn(
                'mt-0.5 shrink-0',
                isHighlight ? 'text-orange' : 'text-magenta',
              )}
            />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={cn(
          'mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300',
          isHighlight
            ? 'bg-cream text-plum hover:bg-blush'
            : 'bg-plum text-cream hover:bg-navy',
        )}
      >
        {ctaLabel}
        <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
