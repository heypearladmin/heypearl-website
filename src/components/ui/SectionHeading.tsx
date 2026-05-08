import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';
import { Eyebrow } from './Eyebrow';

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        align === 'left' && 'max-w-3xl',
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow tone={invert ? 'cream' : 'plum'}>{eyebrow}</Eyebrow>
      )}
      <h2
        className={cn(
          'font-display text-display-md',
          invert ? 'text-cream' : 'text-plum',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-lg leading-relaxed',
            invert ? 'text-cream/75' : 'text-slate',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
