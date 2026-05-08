'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { services } from '@/lib/services';
import { cn } from '@/lib/utils';

export function Services() {
  return (
    <section id="services" className="relative bg-lavender py-28 sm:py-36">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <Reveal>
            <SectionHeading
              eyebrow="What We Build"
              title={
                <>
                  Five layers of authority,{' '}
                  <span className="italic font-light text-magenta">
                    one operating standard.
                  </span>
                </>
              }
              description="Each service stands on its own. Together they become an authority system designed for the AI era."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-plum link-underline"
            >
              View all services
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                href={s.href}
                className={cn(
                  'group relative h-full flex flex-col rounded-3xl bg-white p-8 border border-plum/5 shadow-soft hover:shadow-lift transition-all duration-500',
                  i === 0 && 'lg:col-span-2',
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[0.65rem] tracking-micro uppercase text-magenta">
                    {s.number}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-plum/40 group-hover:text-magenta group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                  />
                </div>

                <h3 className="mt-8 font-display text-2xl sm:text-3xl text-plum leading-tight">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm italic text-magenta">{s.tagline}</p>

                <p className="mt-5 text-sm text-slate leading-relaxed">
                  {s.description}
                </p>

                <ul className="mt-6 flex flex-col gap-2">
                  {s.bullets.slice(0, i === 0 ? 5 : 3).map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-slate/90"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-magenta shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
