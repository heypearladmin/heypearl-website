'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Container } from '@/components/ui/Container';
import { primaryNav } from '@/lib/nav';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

const DROPDOWN_WIDTH: Record<string, number> = {
  Platform:  560,
  Solutions: 480,
  Resources: 480,
  Company:   320,
};

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  function handleMouseEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }
  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#07142F]/90 backdrop-blur-xl border-b border-[#30486F]/50'
          : 'bg-transparent',
      )}
    >
      <Container size="xl">
        <nav className="flex items-center justify-between h-20 sm:h-24">

          {/* Logo */}
          <Logo variant="inverse" />

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {primaryNav.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={() => item.children && handleMouseLeave()}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-md',
                    openMenu === item.label
                      ? 'text-[#F8F6F2]'
                      : 'text-[#C9D3E3] hover:text-[#F8F6F2]',
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={13}
                      className={cn(
                        'transition-transform duration-200 text-[#98A6BE]',
                        openMenu === item.label && 'rotate-180 text-[#C2185B]',
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {openMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        style={{ width: DROPDOWN_WIDTH[item.label] ?? 380 }}
                        className="absolute left-0 top-full pt-2"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={() => handleMouseLeave()}
                      >
                        <div className="rounded-2xl bg-[rgba(14,28,56,0.97)] backdrop-blur-2xl border border-[#30486F] shadow-[0_24px_64px_rgba(3,8,20,0.6)] p-2">
                          {/* Gold rule at top */}
                          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(182,146,94,0.4)] to-transparent mb-2" />

                          {item.label === 'Platform' || item.label === 'Solutions' ? (
                            // Two-column grid for Platform and Solutions
                            <div className="grid grid-cols-2 gap-px">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="group flex flex-col gap-1 rounded-xl p-3.5 hover:bg-white/[0.04] transition-colors duration-150"
                                >
                                  <span className="text-sm font-semibold text-[#F8F6F2] group-hover:text-[#C2185B] transition-colors duration-150 flex items-center gap-1.5">
                                    {child.label}
                                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-60 transition-opacity -ml-0.5" />
                                  </span>
                                  {child.description && (
                                    <span className="text-xs text-[#98A6BE] leading-snug">
                                      {child.description}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            // Single-column for Resources, Company
                            <div className="flex flex-col gap-0.5">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="group flex items-start gap-3 rounded-xl p-3.5 hover:bg-white/[0.04] transition-colors duration-150"
                                >
                                  <div>
                                    <div className="text-sm font-semibold text-[#F8F6F2] group-hover:text-[#C2185B] transition-colors duration-150">
                                      {child.label}
                                    </div>
                                    {child.description && (
                                      <div className="mt-0.5 text-xs text-[#98A6BE] leading-snug">
                                        {child.description}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={site.strategyCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#C2185B] text-white text-sm font-semibold hover:bg-[#D62F73] transition-colors duration-200"
            >
              Book a Strategy Call
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 text-[#C9D3E3] hover:text-[#F8F6F2] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-[#07142F] border-t border-[#30486F]/50"
          >
            <Container size="xl" className="py-6">
              <ul className="flex flex-col">
                {primaryNav.map((item) => (
                  <li key={item.href} className="border-b border-[#30486F]/50 last:border-0">
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileExpanded((v) => (v === item.label ? null : item.label))
                          }
                          className="w-full flex items-center justify-between py-4 text-base font-medium text-[#C9D3E3]"
                        >
                          {item.label}
                          <ChevronDown
                            size={16}
                            className={cn(
                              'transition-transform text-[#98A6BE]',
                              mobileExpanded === item.label && 'rotate-180',
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pb-3"
                            >
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-2.5 text-sm text-[#98A6BE] hover:text-[#C2185B] transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-4 text-base font-medium text-[#C9D3E3] hover:text-[#F8F6F2] transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={site.strategyCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#C2185B] text-white text-sm font-semibold hover:bg-[#D62F73] transition-colors"
                >
                  Book a Strategy Call
                  <ArrowUpRight size={14} />
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 rounded-xl border border-[#30486F]/70 text-sm font-medium text-[#C9D3E3] hover:text-[#F8F6F2] hover:border-[#30486F] transition-colors"
                >
                  Contact HeyPearl
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
