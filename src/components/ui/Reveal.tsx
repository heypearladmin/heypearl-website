'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    el.style.opacity = '0';
    el.style.transform = `translateY(${y}px)`;
    el.style.transition = `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            if (once) observer.unobserve(el);
          } else if (!once) {
            el.style.opacity = '0';
            el.style.transform = `translateY(${y}px)`;
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, y, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
