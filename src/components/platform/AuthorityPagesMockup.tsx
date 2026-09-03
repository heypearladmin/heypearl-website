'use client';

const CHILDREN = [
  { x: 60,  label: 'Service Pages' },
  { x: 160, label: 'Location Pages' },
  { x: 260, label: 'FAQ Library' },
  { x: 360, label: 'Authority Blog' },
];

export function AuthorityPagesMockup() {
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
      <div className="relative flex items-center justify-between px-6 pt-6 pb-2">
        <div>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(248,245,240,0.45)', fontWeight: 600, marginBottom: '2px' }}>
            PearlOS · Site Architecture
          </div>
          <div style={{ fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#F8F5F0' }}>
            Authority Pages
          </div>
        </div>
        <div
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
          style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.35)' }}
        >
          <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#22C55E', letterSpacing: '0.06em' }}>SCHEMA VERIFIED</span>
        </div>
      </div>

      {/* Tree diagram */}
      <div className="relative flex-1 flex items-center justify-center px-4 min-h-0">
        <svg viewBox="0 0 420 220" style={{ width: '100%', maxWidth: '380px', maxHeight: '100%' }}>
          {/* Connecting lines */}
          {CHILDREN.map((c, i) => (
            <path
              key={`line-${i}`}
              d={`M210,50 C210,90 ${c.x},70 ${c.x},110`}
              fill="none"
              stroke="rgba(37,99,255,0.4)"
              strokeWidth="1.5"
            />
          ))}

          {/* Root node */}
          <rect x="160" y="24" width="100" height="34" rx="8" fill="#FF6A00" />
          <text x="210" y="45" textAnchor="middle" fontSize="12" fontWeight="700" fill="#FFFFFF">Homepage</text>

          {/* Child nodes */}
          {CHILDREN.map((c, i) => (
            <g key={`node-${i}`}>
              <rect x={c.x - 46} y="110" width="92" height="46" rx="8" fill="rgba(248,245,240,0.06)" stroke="rgba(37,99,255,0.5)" strokeWidth="1.5" />
              <text x={c.x} y="130" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#F8F5F0">
                {c.label.split(' ')[0]}
              </text>
              <text x={c.x} y="142" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#F8F5F0">
                {c.label.split(' ').slice(1).join(' ')}
              </text>
              {/* Verified check badge */}
              <circle cx={c.x + 38} cy="114" r="8" fill="#22C55E" />
              <path d={`M${c.x + 34.5},114 l2.5,2.5 l5,-5.5`} stroke="#0A1224" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          ))}
        </svg>
      </div>

      {/* Footer stat */}
      <div className="relative px-6 pb-5 shrink-0">
        <div className="flex items-center justify-between rounded-lg px-3 py-2" style={{ background: 'rgba(248,245,240,0.04)', border: '1px solid rgba(248,245,240,0.08)' }}>
          <span style={{ fontSize: '0.68rem', color: 'rgba(248,245,240,0.7)' }}>Pages with verified schema</span>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#FF6A00' }}>128 / 128</span>
        </div>
      </div>
    </div>
  );
}
