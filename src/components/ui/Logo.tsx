import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  variant?: 'default' | 'inverse';
  className?: string;
  href?: string;
};

/**
 * HeyPearl wordmark.
 * Renders the actual logo PNG (`/images/logo.png` or `/images/logo-inverse.png`).
 *
 * P.E.A.R.L. = Process · Efficiency · Automation · Revenue · Leverage.
 */
export function Logo({ variant = 'default', className, href = '/' }: LogoProps) {
  const isInverse = variant === 'inverse';
  const src = isInverse ? '/images/heypearl-logo-light.png' : '/images/logo.png';

  return (
    <Link
      href={href}
      aria-label="HeyPearl home"
      className={cn(
        'group inline-flex items-center transition-opacity duration-300 hover:opacity-90',
        className,
      )}
    >
      <Image
        src={src}
        alt="HeyPearl.io"
        width={800}
        height={260}
        priority
        className="h-14 sm:h-16 lg:h-20 w-auto"
      />
    </Link>
  );
}
