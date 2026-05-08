import { cn } from '@/lib/utils';

type PearlMarkProps = {
  variant?: 'default' | 'inverse';
  className?: string;
};

/**
 * Inline P.E.A.R.L. system mark.
 * Five graduated horizontal layers stacked into a stylized P letterform.
 * Pure inline SVG so it renders reliably regardless of asset state.
 *
 * NOT a literal pearl. Layers represent: Process · Efficiency · Automation · Revenue · Leverage.
 */
export function PearlMark({ variant = 'default', className }: PearlMarkProps) {
  const isInverse = variant === 'inverse';

  // Color palette (cream tones for inverse, full brand spectrum for default)
  const colors = isInverse
    ? ['#FFF9ED', '#FED0D1', '#FF914D', '#D34681', '#FFF9ED']
    : ['#0E0E0E', '#4A4640', '#D34681', '#FF914D', '#0E0E0E'];

  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="HeyPearl mark"
      className={cn('block', className)}
    >
      {/* Five graduated horizontal layers forming a P silhouette */}
      <rect x="14" y="10" width="36" height="6" rx="2" fill={colors[0]} />
      <rect x="14" y="20" width="32" height="6" rx="2" fill={colors[1]} />
      <rect x="14" y="30" width="28" height="6" rx="2" fill={colors[2]} />
      <rect x="14" y="40" width="14" height="6" rx="2" fill={colors[3]} />
      <rect x="14" y="50" width="14" height="6" rx="2" fill={colors[4]} />
    </svg>
  );
}
