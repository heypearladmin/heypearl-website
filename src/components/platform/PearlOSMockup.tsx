'use client';

const MODULES = [
  { label: 'Authority Pages',  value: '128 pages', color: '#FF6A00' },
  { label: 'Authority Score',  value: '82 / 100',  color: '#FF6A00' },
  { label: 'Knowledge Graph',  value: 'Verified',  color: '#2563FF' },
  { label: 'AI Visibility',    value: '4 engines', color: '#2563FF' },
  { label: 'GEO Engine',       value: '3 citations', color: '#22C55E' },
];

export function PearlOSMockup() {
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(160deg, #101B33 0%, #0A1224 70%)',
        border: '1px solid rgba(255,106,0,0.2)',
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
      <div className="relative flex items-center justify-between px-6 pt-5 pb-3 shrink-0">
        <div>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(248,245,240,0.45)', fontWeight: 600, marginBottom: '2px' }}>
            One Operating System
          </div>
          <div style={{ fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif', fontSize: '0.98rem', fontWeight: 700, color: '#F8F5F0' }}>
            PearlOS
          </div>
        </div>
        <div
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
          style={{ background: 'rgba(255,106,0,0.15)', border: '1px solid rgba(255,106,0,0.35)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
          <span style={{ fontSize: '0.58rem', fontWeight: 600, color: '#FF6A00', letterSpacing: '0.06em' }}>SYNCED</span>
        </div>
      </div>

      {/* Module status list */}
      <div className="relative px-6 flex flex-col gap-1 min-h-0">
        {MODULES.map((m) => (
          <div
            key={m.label}
            className="flex items-center justify-between rounded-lg px-3 py-1.5"
            style={{ background: 'rgba(248,245,240,0.05)', border: '1px solid rgba(248,245,240,0.09)' }}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: m.color }} />
              <span style={{ fontSize: '0.7rem', color: 'rgba(248,245,240,0.85)', fontWeight: 500 }}>{m.label}</span>
            </div>
            <span style={{ fontSize: '0.66rem', color: m.color, fontWeight: 700 }}>{m.value}</span>
          </div>
        ))}
      </div>

      {/* Footer bar */}
      <div className="relative px-6 pt-2.5 pb-4 mt-auto shrink-0">
        <div className="h-1.5 rounded-full overflow-hidden flex" style={{ background: 'rgba(248,245,240,0.08)' }}>
          <div style={{ width: '20%', background: '#FF6A00' }} />
          <div style={{ width: '20%', background: '#2563FF' }} />
          <div style={{ width: '20%', background: '#2563FF' }} />
          <div style={{ width: '20%', background: '#22C55E' }} />
          <div style={{ width: '20%', background: '#FFC107' }} />
        </div>
      </div>
    </div>
  );
}
