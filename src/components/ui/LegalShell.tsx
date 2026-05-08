import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import type { ReactNode } from 'react';

type Section = { heading: string; body: ReactNode };

type LegalShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  effectiveDate: string;
  sections: Section[];
};

export function LegalShell({
  eyebrow,
  title,
  description,
  effectiveDate,
  sections,
}: LegalShellProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="pb-24">
        <Container size="md">
          <p className="text-xs tracking-micro uppercase text-magenta mb-10">
            Effective {effectiveDate}
          </p>
          <div className="flex flex-col gap-10 text-slate leading-relaxed">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-2xl text-plum mb-3">
                  {s.heading}
                </h2>
                <div className="flex flex-col gap-4 text-base">{s.body}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
