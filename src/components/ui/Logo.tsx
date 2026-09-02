import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  /** default = black wordmark for light backgrounds, inverse = white wordmark for dark backgrounds */
  variant?: 'default' | 'inverse';
  /** compact = the "P." brand icon only, for tight spaces (mobile nav, favicon-style marks) */
  compact?: boolean;
  className?: string;
  href?: string;
};

/**
 * HeyPearl wordmark — the handwritten/script "HeyPearl." logo with its
 * signature Chinese Orange dot. Always rendered from the final brand PNGs;
 * never recreated with a web font.
 */
export function Logo({ variant = 'default', compact = false, className, href = '/' }: LogoProps) {
  const isInverse = variant === 'inverse';

  const src = compact
    ? (isInverse ? '/images/HeyPearl_FinalIconWhite.png' : '/images/HeyPearl_FinalIconBlack.png')
    : (isInverse ? '/images/HeyPearl_FinalLogoWhite.png' : '/images/HeyPearl_FinalLogoBlack.png');

  const dimensions = compact ? { width: 260, height: 270 } : { width: 800, height: 300 };

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
        alt="HeyPearl."
        width={dimensions.width}
        height={dimensions.height}
        priority
        className={compact ? 'h-10 w-auto' : 'h-14 sm:h-16 lg:h-20 w-auto'}
      />
    </Link>
  );
}
