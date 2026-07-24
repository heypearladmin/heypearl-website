'use client';

import { TrendingUp } from 'lucide-react';

export function HeroDashboardMockup() {
  return (
    <div
      style={{
        background: '#07142F',
        borderRadius: '0.875rem',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '11px',
        color: '#FFFFFF',
        display: 'flex',
        height: '100%',
        minHeight: '340px',
      }}
    >
      {/* Sidebar */}
      <div style={{ width: '36px', background: '#040E20', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', gap: '16px', flexShrink: 0 }}>
        {/* Logo */}
        <div style={{ width: '20px', height: '20px', background: '#C2185B', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 800, color: '#fff' }}>H</div>
        <div style={{ width: '1px', height: '1px', background: 'rgba(255,255,255,0.1)', marginTop: '2px' }} />
        {/* Nav icons */}
        {['⊞', '📊', '👥', '📄', '⚙'].map((icon, i) => (
          <div key={i} style={{ width: '24px', height: '24px', borderRadius: '5px', background: i === 0 ? 'rgba(194,24,91,0.25)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', cursor: 'pointer', color: i === 0 ? '#C2185B' : 'rgba(255,255,255,0.35)' }}>
            {icon}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: '12px 14px', overflowY: 'hidden', display: 'flex', flexDirection: 'column', gap: '10px' }}>

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '13px', color: '#FFFFFF' }}>Dashboard</div>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', marginTop: '1px' }}>Track your AI visibility and authority performance.</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '3px 7px' }}>
              Jun 16 – Jul 16, 2025
            </div>
            <div style={{ fontSize: '8px', fontWeight: 600, background: '#C2185B', color: '#fff', borderRadius: '4px', padding: '3px 7px' }}>
              Generate Report ↗
            </div>
          </div>
        </div>

        {/* Stat cards row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '6px' }}>
          {/* Authority Score */}
          <StatCard label="Authority Score" value="87" sub="+24% vs last period" accent="#C2185B" donut />
          {/* AI Visibility */}
          <StatCard label="AI Visibility" value="72%" sub="↑ 16% High Quality" accent="#C2185B" badge="High" />
          {/* Entities */}
          <StatCard label="Entities" value="142" sub="+32 Distinct Entities" accent="#C2185B" />
          {/* AI Recs */}
          <StatCard label="AI Recommendations" value="23" sub="9 Active, 14 In Progress" accent="#C2185B" />
        </div>

        {/* Charts row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '6px', flex: 1 }}>
          {/* AI Visibility Over Time */}
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '6px', padding: '8px', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>AI Visibility Over Time</div>
            <svg viewBox="0 0 180 60" style={{ width: '100%', height: '60px' }}>
              {/* Grid lines */}
              {[0, 20, 40, 60].map(y => (
                <line key={y} x1="0" y1={y} x2="180" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              ))}
              {/* Y labels */}
              {[['100%', 2], ['75%', 16], ['50%', 31], ['25%', 46], ['0%', 58]].map(([label, y]) => (
                <text key={label} x="0" y={y} fontSize="5" fill="rgba(255,255,255,0.3)">{label}</text>
              ))}
              {/* Area fill */}
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C2185B" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#C2185B" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <path
                d="M20,45 L38,40 L56,36 L74,32 L92,28 L110,22 L128,18 L146,12 L164,8 L164,60 L20,60 Z"
                fill="url(#areaGrad)"
              />
              {/* Line */}
              <polyline
                points="20,45 38,40 56,36 74,32 92,28 110,22 128,18 146,12 164,8"
                fill="none"
                stroke="#C2185B"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* End dot */}
              <circle cx="164" cy="8" r="2.5" fill="#C2185B" />
              {/* X labels */}
              {[['Jun 16', 20], ['Jun 23', 56], ['Jun 30', 92], ['Jul 7', 128], ['Jul 15', 164]].map(([label, x]) => (
                <text key={label} x={x} y={68} fontSize="5" fill="rgba(255,255,255,0.3)" textAnchor="middle">{label}</text>
              ))}
            </svg>
          </div>

          {/* Platform Breakdown */}
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '6px', padding: '8px', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '2px' }}>AI Platform Breakdown</div>
            {[
              { label: 'ChatGPT', pct: 68 },
              { label: 'Perplexity', pct: 74 },
              { label: 'Google AI', pct: 76 },
              { label: 'Gemini', pct: 62 },
            ].map(({ label, pct }) => (
              <div key={label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                  <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.55)' }}>{label}</span>
                  <span style={{ fontSize: '8px', color: '#C2185B', fontWeight: 600 }}>{pct}%</span>
                </div>
                <div style={{ height: '3px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}>
                  <div style={{ height: '100%', width: `${pct}%`, background: '#C2185B', borderRadius: '2px', opacity: 0.85 }} />
                </div>
              </div>
            ))}

            {/* Top Topics */}
            <div style={{ marginTop: '4px' }}>
              <div style={{ fontSize: '9px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>Top Performing Topics</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
                {['Local Real Estate', 'Neighborhood Guides', 'Market Insights', 'Home Selling Tips'].map(t => (
                  <span key={t} style={{ fontSize: '7px', padding: '2px 5px', background: 'rgba(255,255,255,0.07)', borderRadius: '3px', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, sub, accent, donut, badge }: {
  label: string; value: string; sub: string; accent: string; donut?: boolean; badge?: string;
}) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '6px', padding: '8px', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{label}</div>
      {donut ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg viewBox="0 0 36 36" style={{ width: '32px', height: '32px', flexShrink: 0 }}>
            <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
            <circle cx="18" cy="18" r="14" fill="none" stroke={accent} strokeWidth="4"
              strokeDasharray={`${87 * 0.879} ${100 * 0.879}`}
              strokeDashoffset="22"
              strokeLinecap="round"
              transform="rotate(-90 18 18)"
            />
            <text x="18" y="22" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">{value}</text>
          </svg>
          <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{sub}</div>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{value}</span>
            {badge && (
              <span style={{ fontSize: '7px', fontWeight: 600, color: accent, background: `${accent}20`, padding: '1px 4px', borderRadius: '3px' }}>{badge}</span>
            )}
          </div>
          <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{sub}</div>
        </>
      )}
    </div>
  );
}
