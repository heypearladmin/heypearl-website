'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { primaryNav } from '@/lib/nav';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled
          ? 'backdrop-blur-md bg-cream/80 border-b border-plum/5'
          : 'bg-transparent',
      )}
    >
      <Container size="xl">
        <nav className="flex items-center justify-between gap-8 h-24 sm:h-28">
          {/* Left group: Logo + nav links */}
          <div className="flex items-center gap-8 lg:gap-12">
            <Logo />

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {primaryNav.map((item) => (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenSubmenu(item.href)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 px-4 py-2 text-sm text-navy/80 hover:text-plum transition-colors duration-200"
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-200',
                          openSubmenu === item.href && 'rotate-180',
                        )}
                      />
                    )}
                  </Link>

                  {item.children && (
                    <AnimatePresence>
                      {openSubmenu === item.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full pt-3 w-[360px]"
                        >
                          <div className="rounded-3xl bg-white shadow-lift border border-plum/5 p-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block rounded-2xl p-4 hover:bg-lavender transition-colors duration-200"
                              >
                                <div className="text-sm font-medium text-plum">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className="mt-1 text-xs text-slate leading-relaxed">
                                    {child.description}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA (right side) — single conversion action */}
          <div className="hidden lg:flex items-center gap-3">
            <LinkButton
              href={site.strategyCallUrl}
              variant="primary"
              size="sm"
              external
              withArrow
            >
              Strategy Call
            </LinkButton>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-plum"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-cream border-t border-plum/5"
          >
            <Container size="xl" className="py-6">
              <ul className="flex flex-col">
                {primaryNav.map((item) => (
                  <li key={item.href} className="border-b border-plum/5 last:border-0">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 text-lg text-plum"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="pb-2 pl-4 flex flex-col gap-1">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              onClick={() => setOpen(false)}
                              className="block py-2 text-sm text-slate"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 mt-6">
                <LinkButton
                  href={site.strategyCallUrl}
                  external
                  variant="primary"
                  withArrow
                  size="md"
                  className="w-full"
                >
                  Schedule a Strategy Call with Misti
                </LinkButton>
                <LinkButton
                  href="/contact"
                  variant="secondary"
                  size="md"
                  className="w-full"
                >
                  Contact HeyPearl
                </LinkButton>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
