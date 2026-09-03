'use client';

const NODES = [
  { label: 'Google Business', angle: -140, color: '#2563FF' },
  { label: 'Website',         angle: -40,  color: '#2563FF' },
  { label: 'Wikidata',        angle: 40,   color: '#FFC107' },
  { label: 'Citations',       angle: 140,  color: '#22C55E' },
  { label: 'Reviews',         angle: 220,  color: '#22C55E' },
];

function pos(angleDeg: number, rx: number, ry: number, cx: number, cy: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + rx * Math.cos(rad), y: cy + ry * Math.sin(rad) };
}

export function KnowledgeGraphMockup() {
  const cx = 230, cy = 130, rx = 165, ry = 95;
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
      <div className="relative flex items-center justify-between px-6 pt-5 pb-1 shrink-0">
        <div>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(248,245,240,0.45)', fontWeight: 600, marginBottom: '2px' }}>
            PearlOS · Entity Graph
          </div>
          <div style={{ fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#F8F5F0' }}>
            Knowledge Graph
          </div>
        </div>
        <div
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
          style={{ background: 'rgba(37,99,255,0.15)', border: '1px solid rgba(37,99,255,0.35)' }}
        >
          <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#2563FF', letterSpacing: '0.06em' }}>VERIFIED</span>
        </div>
      </div>

      {/* Network diagram */}
      <div className="relative flex-1 min-h-0">
        <svg viewBox="0 0 460 260" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid meet">
          {NODES.map((n, i) => {
            const p = pos(n.angle, rx, ry, cx, cy);
            return (
              <line key={`line-${i}`} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(248,245,240,0.14)" strokeWidth="1.5" />
            );
          })}

          {/* Center entity node */}
          <circle cx={cx} cy={cy} r="30" fill="#FF6A00" />
          <text x={cx} y={cy - 2} textAnchor="middle" fontSize="10" fontWeight="700" fill="#FFFFFF">HeyPearl</text>
          <text x={cx} y={cy + 10} textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.8)">Verified Entity</text>

          {/* Satellite nodes */}
          {NODES.map((n, i) => {
            const p = pos(n.angle, rx, ry, cx, cy);
            const labelBelow = n.angle > 0;
            return (
              <g key={`node-${i}`}>
                <circle cx={p.x} cy={p.y} r="8" fill="#0A1224" stroke={n.color} strokeWidth="2" />
                <circle cx={p.x} cy={p.y} r="2.5" fill={n.color} />
                <text
                  x={p.x}
                  y={labelBelow ? p.y + 20 : p.y - 14}
                  textAnchor="middle"
                  fontSize="9.5"
                  fontWeight="600"
                  fill="rgba(248,245,240,0.8)"
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
