const NAVY = '#10203F';
const LIME = '#C4FF20';
const SOFT = '#EEF1FA';
const MUTED = '#5B6B8C';
const BORDER = 'rgba(16,32,63,0.08)';

/**
 * Illustrative local-visibility dashboard for the Hey Local page.
 *
 * Follows the same self-hosted SVG chart technique already used in
 * src/components/ui/HeroDashboardMockup.tsx (line chart with area fill,
 * donut ring stat, percentage bars) — no external images, no fabricated
 * client-specific numbers. Explicitly labeled ILLUSTRATIVE.
 */
export function LocalVisibilityDashboard() {
  return (
    <div className="w-full max-w-xl rounded-2xl p-6 sm:p-8" style={{ background: '#FFFFFF' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>
            Local Visibility Dashboard
          </p>
          <p className="mt-1" style={{ fontSize: '0.72rem', color: MUTED }}>
            What Hey Local tracks for every client
          </p>
        </div>
        <span className="rounded-full px-2.5 py-1 text-[0.6rem] font-bold flex-shrink-0" style={{ background: LIME, color: NAVY }}>
          ILLUSTRATIVE
        </span>
      </div>

      {/* Stat row: donut + two trend tiles */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="rounded-xl p-3" style={{ background: SOFT }}>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 36 36" width="34" height="34" className="flex-shrink-0">
              <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(16,32,63,0.1)" strokeWidth="4" />
              <circle
                cx="18" cy="18" r="14" fill="none" stroke={NAVY} strokeWidth="4"
                strokeDasharray={`${82 * 0.879} ${100 * 0.879}`}
                strokeDashoffset="22"
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
              <text x="18" y="21.5" textAnchor="middle" fontSize="9" fontWeight="700" fill={NAVY}>82%</text>
            </svg>
            <p style={{ fontSize: '0.62rem', lineHeight: 1.3, color: MUTED }}>Maps Visibility</p>
          </div>
        </div>
        <div className="rounded-xl p-3" style={{ background: SOFT }}>
          <p className="font-display" style={{ fontSize: '1.15rem', fontWeight: 700, color: NAVY, lineHeight: 1 }}>+4.6</p>
          <p className="mt-1" style={{ fontSize: '0.62rem', color: MUTED, lineHeight: 1.3 }}>Avg. Review Rating</p>
        </div>
        <div className="rounded-xl p-3" style={{ background: SOFT }}>
          <p className="font-display" style={{ fontSize: '1.15rem', fontWeight: 700, color: NAVY, lineHeight: 1 }}>Top 3</p>
          <p className="mt-1" style={{ fontSize: '0.62rem', color: MUTED, lineHeight: 1.3 }}>Local Search Rank</p>
        </div>
      </div>

      {/* Line chart */}
      <div className="rounded-xl p-4 mb-4" style={{ background: NAVY }}>
        <p className="mb-2" style={{ fontSize: '0.68rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
          Local Search Visibility — 8 Weeks
        </p>
        <svg viewBox="0 0 280 84" style={{ width: '100%', height: '84px' }}>
          {[0, 20, 40, 60].map((y) => (
            <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          ))}
          <defs>
            <linearGradient id="hlAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={LIME} stopOpacity="0.35" />
              <stop offset="100%" stopColor={LIME} stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M10,58 L46,52 L82,54 L118,42 L154,36 L190,26 L226,18 L262,10 L262,66 L10,66 Z"
            fill="url(#hlAreaGrad)"
          />
          <polyline
            points="10,58 46,52 82,54 118,42 154,36 190,26 226,18 262,10"
            fill="none"
            stroke={LIME}
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <circle cx="262" cy="10" r="3" fill={LIME} />
          {['Wk 1', 'Wk 3', 'Wk 5', 'Wk 8'].map((label, i) => (
            <text key={label} x={10 + i * 84} y="80" fontSize="7" fill="rgba(255,255,255,0.4)" textAnchor="middle">
              {label}
            </text>
          ))}
        </svg>
      </div>

      {/* Where customers find you — bar breakdown */}
      <div>
        <p className="mb-2.5" style={{ fontSize: '0.68rem', fontWeight: 600, color: MUTED }}>
          Where Customers Find You
        </p>
        <div className="flex flex-col gap-2">
          {[
            { label: 'Google Search', pct: 58 },
            { label: 'Google Maps', pct: 31 },
            { label: 'Direct / Referral', pct: 11 },
          ].map(({ label, pct }) => (
            <div key={label} className="flex items-center gap-3">
              <span style={{ fontSize: '0.7rem', color: NAVY, width: '6.5rem', flexShrink: 0 }}>{label}</span>
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: SOFT }}>
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: LIME }} />
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: NAVY, width: '2rem', textAlign: 'right', flexShrink: 0 }}>
                {pct}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4" style={{ fontSize: '0.68rem', color: MUTED, borderTop: `1px solid ${BORDER}`, paddingTop: '0.85rem' }}>
        Example visualization — not tied to any specific client.
      </p>
    </div>
  );
}
