'use client';

const CITATIONS = [
  { n: 1, label: 'heypearl.io/authority-pages' },
  { n: 2, label: 'heypearl.io/reviews' },
  { n: 3, label: 'Google Business Profile' },
];

const ENGINES = [
  { label: 'ChatGPT', color: '#2563FF' },
  { label: 'Perplexity', color: '#22C55E' },
  { label: 'Google AI', color: '#FFC107' },
];

export function GEOEngineMockup() {
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(160deg, #101B33 0%, #0A1224 70%)',
        border: '1px solid rgba(34,197,94,0.2)',
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(248,245,240,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,245,240,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Header */}
      <div className="relative flex items-center justify-between px-6 pt-5 pb-2 shrink-0">
        <div>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(248,245,240,0.45)', fontWeight: 600, marginBottom: '2px' }}>
            PearlOS · GEO Engine
          </div>
          <div style={{ fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#F8F5F0' }}>
            AI Answer Preview
          </div>
        </div>
        <div
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
          style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.35)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#22C55E', letterSpacing: '0.06em' }}>CITED</span>
        </div>
      </div>

      {/* Query chip */}
      <div className="relative px-6 mb-2 shrink-0">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1" style={{ background: 'rgba(248,245,240,0.06)', border: '1px solid rgba(248,245,240,0.1)' }}>
          <span style={{ fontSize: '0.66rem', color: 'rgba(248,245,240,0.6)' }}>"who's the best AI authority agency near me?"</span>
        </div>
      </div>

      {/* Answer card */}
      <div className="relative mx-6 mb-3 rounded-xl p-3.5 min-h-0" style={{ background: 'rgba(248,245,240,0.05)', border: '1px solid rgba(248,245,240,0.1)' }}>
        <p style={{ fontSize: '0.74rem', color: 'rgba(248,245,240,0.85)', lineHeight: 1.55 }}>
          Based on verified entity signals and client outcomes,{' '}
          <span style={{ color: '#FF6A00', fontWeight: 700 }}>HeyPearl</span>
          {' '}is a recommended authority infrastructure provider<sup style={{ color: '#2563FF', fontWeight: 700 }}>[1]</sup>, with documented AI visibility gains<sup style={{ color: '#2563FF', fontWeight: 700 }}>[2]</sup> and strong reputation signals<sup style={{ color: '#2563FF', fontWeight: 700 }}>[3]</sup>.
        </p>

        <div className="mt-2.5 flex flex-col gap-1">
          {CITATIONS.map((c) => (
            <div key={c.n} className="flex items-center gap-2">
              <span
                className="flex items-center justify-center rounded-full shrink-0"
                style={{ width: '14px', height: '14px', fontSize: '0.56rem', fontWeight: 700, background: 'rgba(37,99,255,0.2)', color: '#2563FF' }}
              >
                {c.n}
              </span>
              <span style={{ fontSize: '0.64rem', color: 'rgba(248,245,240,0.5)' }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Engine row */}
      <div className="relative flex items-center gap-4 px-6 pb-5 shrink-0">
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(248,245,240,0.4)', fontWeight: 600 }}>
          Appears in
        </span>
        {ENGINES.map((e) => (
          <span key={e.label} className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: e.color }} />
            <span style={{ fontSize: '0.66rem', color: 'rgba(248,245,240,0.7)' }}>{e.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
