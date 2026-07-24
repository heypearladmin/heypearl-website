'use client';
import { useEffect, useState } from 'react';

interface TocEntry {
  id: string;
  label: string;
}

export function TableOfContents({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState(entries[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (observed) => {
        for (const entry of observed) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-10% 0% -60% 0%', threshold: 0 }
    );

    entries.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [entries]);

  return (
    <nav aria-label="Table of contents">
      <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '0.875rem' }}>
        Contents
      </div>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {entries.map(({ id, label }, i) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.625rem',
                  padding: '0.3rem 0',
                  paddingLeft: '0.625rem',
                  fontSize: '0.78rem',
                  lineHeight: 1.45,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#1E3A66' : '#64748B',
                  textDecoration: 'none',
                  borderLeft: isActive ? '2px solid #C2185B' : '2px solid #E7E3DD',
                  transition: 'all 0.15s',
                }}
              >
                <span style={{ color: '#94A3B8', fontSize: '0.65rem', flexShrink: 0, paddingTop: '0.1rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
