'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

type TableOfContentsProps = {
  items: TocItem[];
};

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0% -70% 0%', threshold: 0 },
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      {/* Mobile toggle */}
      <button
        className="lg:hidden w-full flex items-center justify-between rounded-xl border border-plum/10 bg-white px-4 py-3 text-left font-medium text-plum"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-[0.65rem] tracking-micro uppercase text-magenta font-medium">
          On this page
        </span>
        <ChevronDown
          size={14}
          className={cn('text-plum/50 transition-transform', open && 'rotate-180')}
        />
      </button>

      {/* List — always visible on lg, toggle-controlled on mobile */}
      <ol
        className={cn(
          'flex flex-col gap-1 mt-2 lg:mt-0',
          !open && 'hidden lg:flex',
        )}
      >
        {/* Sticky header on desktop */}
        <li className="hidden lg:block mb-2">
          <span className="text-[0.65rem] tracking-micro uppercase text-magenta font-medium">
            On this page
          </span>
        </li>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                'block rounded-lg py-1.5 transition-colors leading-snug',
                item.level === 2 ? 'pl-0 font-medium' : 'pl-4 text-[0.9em]',
                activeId === item.id
                  ? 'text-magenta'
                  : 'text-slate/70 hover:text-plum',
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function extractToc(markdown: string): TocItem[] {
  const lines = markdown.split('\n');
  const items: TocItem[] = [];

  for (const line of lines) {
    if (line.startsWith('### ')) {
      const text = line.slice(4).replace(/\*\*/g, '').trim();
      const id = slugify(text);
      items.push({ id, text, level: 3 });
    } else if (line.startsWith('## ')) {
      const text = line.slice(3).replace(/\*\*/g, '').trim();
      const id = slugify(text);
      items.push({ id, text, level: 2 });
    }
  }

  return items;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
