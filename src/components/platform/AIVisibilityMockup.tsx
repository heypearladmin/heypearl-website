'use client';

const ENGINES = [
  { label: 'ChatGPT',    value: 68, delta: '+12%' },
  { label: 'Perplexity', value: 74, delta: '+9%' },
  { label: 'Gemini',     value: 62, delta: '+18%' },
  { label: 'Google AI',  value: 76, delta: '+6%' },
];

const ALERTS = [
  { label: 'New citation detected', engine: 'Perplexity', color: '#22C55E' },
];

export function AIVisibilityMockup() {
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(160deg, #101B33 0%, #0A1224 70%)',
        border: '1px solid rgba(37,99,255,0.2)',
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
      <div className="relative flex items-center justify-between px-6 pt-5 pb-1">
        <div>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(248,245,240,0.45)', fontWeight: 600, marginBottom: '2px' }}>
            PearlOS · Cross-Engine
          </div>
          <div style={{ fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#F8F5F0' }}>
            AI Visibility Monitor
          </div>
        </div>
        <div
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
          style={{ background: 'rgba(37,99,255,0.15)', border: '1px solid rgba(37,99,255,0.35)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#2563FF] animate-pulse" />
          <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#2563FF', letterSpacing: '0.06em' }}>LIVE</span>
        </div>
      </div>

      {/* Engine bars */}
      <div className="relative px-6 py-2.5 flex flex-col gap-2.5">
        {ENGINES.map((e) => (
          <div key={e.label}>
            <div className="flex items-center justify-between mb-1">
              <span style={{ fontSize: '0.72rem', color: 'rgba(248,245,240,0.8)', fontWeight: 500 }}>{e.label}</span>
              <span className="flex items-center gap-2">
                <span style={{ fontSize: '0.64rem', color: '#22C55E', fontWeight: 600 }}>{e.delta}</span>
                <span style={{ fontSize: '0.78rem', color: '#F8F5F0', fontWeight: 700 }}>{e.value}%</span>
              </span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(248,245,240,0.08)' }}>
              <div
                className="h-full rounded-full"
                style={{ width: `${e.value}%`, background: 'linear-gradient(90deg, #2563FF, #3F73FF)' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Alerts */}
      <div className="relative px-6 pb-5 flex flex-col gap-1.5 mt-auto">
        <div style={{ fontSize: '0.56rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(248,245,240,0.4)', fontWeight: 600 }}>
          Recent Signals
        </div>
        {ALERTS.map((a) => (
          <div key={a.label} className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5" style={{ background: 'rgba(248,245,240,0.04)', border: '1px solid rgba(248,245,240,0.08)' }}>
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: a.color }} />
            <span style={{ fontSize: '0.68rem', color: 'rgba(248,245,240,0.75)' }}>{a.label}</span>
            <span style={{ fontSize: '0.62rem', color: 'rgba(248,245,240,0.4)', marginLeft: 'auto' }}>{a.engine}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
