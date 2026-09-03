'use client';

const DIMENSIONS = [
  { label: 'Entity Verification',      value: 91, color: '#2563FF' },
  { label: 'Topical Authority',        value: 85, color: '#FF6A00' },
  { label: 'Citation Frequency',       value: 78, color: '#2563FF' },
  { label: 'Cross-Engine Consistency', value: 88, color: '#22C55E' },
  { label: 'Competitor Position',      value: 74, color: '#FFC107' },
  { label: 'Gap Map',                  value: 82, color: '#22C55E' },
];

const SCORE = 82;
const RADIUS = 62;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function AuthorityScoreMockup() {
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(160deg, #101B33 0%, #0A1224 70%)',
        border: '1px solid rgba(255,106,0,0.18)',
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
            PearlOS · Live Report
          </div>
          <div style={{ fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#F8F5F0' }}>
            Authority Score
          </div>
        </div>
        <div
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
          style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.35)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#22C55E', letterSpacing: '0.06em' }}>TRACKING</span>
        </div>
      </div>

      {/* Body: ring left, dimensions right */}
      <div className="relative flex-1 flex items-center gap-4 px-6 pb-5 min-h-0">
        {/* Score ring */}
        <div className="shrink-0 flex items-center justify-center" style={{ width: '150px', height: '150px' }}>
          <svg viewBox="0 0 150 150" style={{ width: '100%', height: '100%' }}>
            <circle cx="75" cy="75" r={RADIUS} fill="none" stroke="rgba(248,245,240,0.08)" strokeWidth="10" />
            <circle
              cx="75" cy="75" r={RADIUS}
              fill="none"
              stroke="#FF6A00"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${(SCORE / 100) * CIRCUMFERENCE} ${CIRCUMFERENCE}`}
              transform="rotate(-90 75 75)"
            />
            <text x="75" y="70" textAnchor="middle" fontSize="34" fontWeight="700" fill="#F8F5F0" fontFamily="var(--font-jakarta), Helvetica Neue, Arial, sans-serif">
              {SCORE}
            </text>
            <text x="75" y="90" textAnchor="middle" fontSize="8" letterSpacing="1.5" fill="rgba(248,245,240,0.5)">
              AUTHORITY SCORE
            </text>
          </svg>
        </div>

        {/* Dimension bars */}
        <div className="flex-1 flex flex-col gap-2 min-w-0">
          {DIMENSIONS.map((d) => (
            <div key={d.label}>
              <div className="flex items-center justify-between mb-0.5">
                <span style={{ fontSize: '0.62rem', color: 'rgba(248,245,240,0.7)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{d.label}</span>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: d.color, flexShrink: 0, marginLeft: '0.5rem' }}>{d.value}</span>
              </div>
              <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(248,245,240,0.08)' }}>
                <div className="h-full rounded-full" style={{ width: `${d.value}%`, background: d.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
