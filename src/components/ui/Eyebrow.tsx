import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  tone?: 'plum' | 'magenta' | 'orange' | 'cream' | 'navy';
  showDot?: boolean;
};

const tones = {
  plum: 'text-plum',
  magenta: 'text-magenta',
  orange: 'text-orange',
  cream: 'text-cream',
  navy: 'text-navy',
};

export function Eyebrow({
  children,
  className,
  tone = 'plum',
  showDot = true,
}: EyebrowProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-micro',
        tones[tone],
        className,
      )}
    >
      {showDot && (
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-magenta" />
      )}
      <span>{children}</span>
    </div>
  );
}
