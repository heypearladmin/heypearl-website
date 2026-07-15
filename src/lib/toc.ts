import { slugify } from '@/lib/slugify';

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export function extractToc(markdown: string): TocItem[] {
  const lines = markdown.split('\n');
  const items: TocItem[] = [];

  for (const line of lines) {
    if (line.startsWith('### ')) {
      const text = line.slice(4).replace(/\*\*/g, '').trim();
      items.push({ id: slugify(text), text, level: 3 });
    } else if (line.startsWith('## ')) {
      const text = line.slice(3).replace(/\*\*/g, '').trim();
      items.push({ id: slugify(text), text, level: 2 });
    }
  }

  return items;
}
