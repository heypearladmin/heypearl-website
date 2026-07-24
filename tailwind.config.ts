import type { Config } from 'tailwindcss';

/**
 * HeyPearl 6.0 — Premium AI Software Platform Design System
 *
 * Light Editorial Theme (primary — all marketing pages)
 *   Ground        White         #FFFFFF   → bg-white
 *   Surface       Warm Cream    #F8F5F0   → bg-cream
 *   Alt Surface   Soft Ivory    #FDFBF8   → bg-surface
 *   Brand Navy    Deep Navy     #1E3A66   → text-navy / bg-navy
 *   Body Text     Slate         #334155   → text-body
 *   Secondary     Cool Gray     #64748B   → text-secondary
 *   Muted         Pale Gray     #94A3B8   → text-muted
 *   Border        Warm Sand     #E7E3DD   → border / border-sand
 *   Divider       Soft Ivory    #ECE8E2
 *   Accent        Magenta       #C2185B   → sparingly: buttons, links, icons
 *   Hover         Magenta+      #D62F73
 *
 * Dark sections (footer, dashboard UI, product hero moments only)
 *   Deep Navy  #07142F  → black
 *   Mid Navy   #14284A  → ink
 *   Card Navy  #1D355D  → charcoal
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // ── Light theme — primary surfaces ────────────────────────────
        cream:   '#F8F5F0',
        surface: '#FDFBF8',
        sand:    '#E7E3DD',
        divider: '#ECE8E2',

        // ── Brand navy — headings, nav, footer bg ─────────────────────
        navy: {
          DEFAULT: '#1E3A66',
          50:  '#EEF2FA',
          100: '#D4DFF2',
          200: '#A9BFE5',
          300: '#7E9ED8',
          400: '#4A72B8',
          500: '#1E3A66',
          600: '#162C4F',
          700: '#0E1E38',
          800: '#07142F',
        },

        // ── Text scale ────────────────────────────────────────────────
        body:      '#334155',
        secondary: '#64748B',
        muted:     '#94A3B8',

        // ── Primary accent — use sparingly ────────────────────────────
        magenta: {
          DEFAULT: '#C2185B',
          hover:   '#D62F73',
          50:  '#FCE8F1',
          100: '#F7C8DE',
          200: '#EB8DB7',
          300: '#D85590',
          400: '#C2185B',
          500: '#D62F73',
          600: '#A11549',
        },

        // ── Dark sections (footer, dashboard UI only) ─────────────────
        black:    '#07142F',
        ink:      '#14284A',
        charcoal: '#1D355D',

        // ── Ivory compat ──────────────────────────────────────────────
        ivory: {
          DEFAULT: '#F8F5F0',
          60: '#64748B',
          30: '#94A3B8',
          10: 'rgba(248,245,240,0.07)',
        },

        // ── Gold — rare: awards, authority score, badges only ─────────
        gold: {
          DEFAULT: '#B6925E',
          50:  '#FAF5EC',
          100: '#F0E3C5',
          200: '#E0C78A',
          300: '#CFAA50',
          400: '#B6925E',
          500: '#9A7A47',
          600: '#7E6232',
        },

        // ── Legacy compat ─────────────────────────────────────────────
        plum:     { DEFAULT: '#1E3A66', 50: '#EEF2FA', 100: '#D4DFF2', 200: '#A9BFE5', 300: '#7E9ED8', 400: '#4A72B8', 500: '#1E3A66', 600: '#162C4F' },
        lavender: '#F8F5F0',
        orange:   { DEFAULT: '#FF914D', 50: '#FFF5EE', 100: '#FFE6D4', 200: '#FFCCA8', 300: '#FFB17C', 400: '#FF914D', 500: '#FF7A2A', 600: '#E66417' },
        slate:    { DEFAULT: '#334155', 400: '#64748B', 500: '#334155' },
        border:   '#E7E3DD',
        blush:    '#FED0D1',
        graytone: '#94A3B8',
      },

      fontFamily: {
        sans: ['var(--font-inter)', 'Helvetica Neue', 'Helvetica', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'Times New Roman', 'serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
      },

      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6.5rem)',   { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)',    { lineHeight: '1',    letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)',  { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },

      letterSpacing: { micro: '0.18em', wide: '0.14em', wider: '0.10em' },
      borderRadius:  { '4xl': '2rem', '5xl': '2.5rem' },

      boxShadow: {
        soft:        '0 1px 3px rgba(30,58,102,0.06), 0 4px 16px rgba(30,58,102,0.08)',
        lift:        '0 2px 8px rgba(30,58,102,0.08), 0 12px 32px rgba(30,58,102,0.10)',
        card:        '0 1px 4px rgba(30,58,102,0.06), 0 8px 24px rgba(30,58,102,0.08)',
        'dark-lift': '0 4px 24px rgba(3,8,20,0.5)',
        glow:        '0 0 0 1px rgba(194,24,91,0.15), 0 8px 24px rgba(194,24,91,0.08)',
        'navy-glow': '0 0 0 1px #E7E3DD, 0 8px 24px rgba(30,58,102,0.10)',
        'gold-glow': '0 0 0 1px rgba(182,146,94,0.16), 0 8px 32px rgba(182,146,94,0.08)',
      },

      backgroundImage: {
        'light-surface':    'linear-gradient(160deg, #FFFFFF 0%, #F8F5F0 100%)',
        'cream-surface':    'linear-gradient(160deg, #FDFBF8 0%, #F8F5F0 100%)',
        'navy-surface':     'linear-gradient(160deg, #1E3A66 0%, #07142F 100%)',
        'dark-surface':     'linear-gradient(160deg, #14284A 0%, #07142F 100%)',
        'card-surface':     'linear-gradient(160deg, #1D355D 0%, #14284A 100%)',
        'magenta-gradient': 'linear-gradient(135deg, #C2185B 0%, #D62F73 100%)',
        'gold-gradient':    'linear-gradient(135deg, #B6925E 0%, #9A7A47 100%)',
        'pearl-gradient':   'linear-gradient(135deg, #F8F5F0 0%, #ECE8E2 100%)',
        'navy-gradient':    'linear-gradient(160deg, #07142F 0%, #14284A 50%, #1D355D 100%)',
        'aurora':           'radial-gradient(ellipse 70% 50% at 30% 20%, rgba(194,24,91,0.03) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 75% 70%, rgba(30,58,102,0.05) 0%, transparent 60%)',
      },

      animation: {
        shimmer:  'shimmer 8s linear infinite',
        float:    'float 12s ease-in-out infinite',
        'fade-up':'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        shimmer: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '200% 50%' } },
        float:   { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        fadeUp:  { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};

export default config;
