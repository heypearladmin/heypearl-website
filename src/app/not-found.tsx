import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { site } from '@/lib/site';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      {/* Photographic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/404-ambient.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/40 to-cream/55" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 60% at 30% 30%, rgba(255,145,77,0.16) 0%, transparent 60%), radial-gradient(50% 50% at 80% 70%, rgba(211,70,129,0.16) 0%, transparent 60%)',
        }}
      />
      <Container size="md" className="relative py-32 sm:py-44 text-center">
        <Eyebrow className="justify-center inline-flex">404</Eyebrow>
        <h1 className="mt-6 font-display text-display-lg text-plum">
          This page is not yet on the index.
        </h1>
        <p className="mt-6 text-lg text-slate max-w-xl mx-auto">
          Even an authority infrastructure has rooms not yet open. Let us point you somewhere useful.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <LinkButton href="/" variant="primary" size="lg" withArrow>
            Return home
          </LinkButton>
          <LinkButton
            href={site.strategyCallUrl}
            external
            variant="secondary"
            size="lg"
          >
            Schedule a Strategy Call
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
