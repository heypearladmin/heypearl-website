'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  cardSelector?: string; // unused — kept for API compat
};

export function CursorHero({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const spring = { stiffness: 55, damping: 18, mass: 0.9 };
  const sx = useSpring(mouseX, spring);
  const sy = useSpring(mouseY, spring);

  const spotX = useTransform(sx, [-1, 1], ['25%', '75%']);
  const spotY = useTransform(sy, [-1, 1], ['20%', '80%']);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function onLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className}>
      {mounted && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute hidden lg:block"
          style={{
            width: 700,
            height: 700,
            borderRadius: '50%',
            left: spotX,
            top: spotY,
            x: '-50%',
            y: '-50%',
            background: 'radial-gradient(circle, rgba(191,155,92,0.06) 0%, transparent 65%)',
            zIndex: 0,
          }}
        />
      )}
      {children}
    </div>
  );
}

type CardParallaxProps = {
  children: React.ReactNode;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  strength?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function CardParallax({ children, mouseX, mouseY, strength = 16, className, style }: CardParallaxProps) {
  const spring = { stiffness: 60, damping: 20, mass: 0.8 };
  const sx = useSpring(mouseX, spring);
  const sy = useSpring(mouseY, spring);
  const cx = useTransform(sx, [-1, 1], [strength, -strength]);
  const cy = useTransform(sy, [-1, 1], [strength / 2, -strength / 2]);

  return (
    <motion.div style={{ x: cx, y: cy, ...style }} className={className}>
      {children}
    </motion.div>
  );
}
