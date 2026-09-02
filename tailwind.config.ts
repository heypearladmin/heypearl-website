import type { Config } from 'tailwindcss';

/**
 * HeyPearl Final Brand Kit — AI Authority Systems Design System
 *
 * Light Editorial Theme (primary — all marketing pages)
 *   Ground        White         #FFFFFF   → bg-white
 *   Surface       Warm Cream    #F8F5F0   → bg-cream
 *   Alt Surface   Soft Ivory    #FDFBF8   → bg-surface
 *   Brand Navy    Deep Navy     #0A1224   → text-navy / bg-navy  (foundation)
 *   Body Text     Slate         #334155   → text-body
 *   Secondary     Cool Gray     #64748B   → text-secondary
 *   Muted         Pale Gray     #94A3B8   → text-muted
 *   Border        Warm Sand     #E7E3DD   → border / border-sand
 *   Divider       Soft Ivory    #ECE8E2
 *
 * Brand accents — do not treat equally, see hierarchy below
 *   Chinese Orange   #FF6A00   → PRIMARY accent (CTAs, logo dot, emphasis)
 *   Royal Blue       #2563FF  → technology / intelligence (links, secondary CTA)
 *   Success Green    #22C55E  → growth / results
 *   Golden Yellow    #FFC107  → secondary highlight, use sparingly
 *
 * Dark sections (footer, dashboard UI, product hero moments only)
 *   Deep Navy   #0A1224  → black
 *   Mid Navy    #101B33  → ink
 *   Card Navy   #16233F  → charcoal
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

        // ── Deep Navy — brand foundation: headings, nav, footer bg ────
        navy: {
          DEFAULT: '#0A1224',
          50:  '#EEF1F7',
          100: '#D7DCE8',
          200: '#AFB8D0',
          300: '#8794B4',
          400: '#4F5D82',
          500: '#28345C',
          600: '#141D38',
          700: '#0A1224',
          800: '#050810',
        },

        // ── Text scale ────────────────────────────────────────────────
        body:      '#334155',
        secondary: '#64748B',
        muted:     '#94A3B8',

        // ── Chinese Orange — PRIMARY BRAND ACCENT ─────────────────────
        orange: {
          DEFAULT: '#FF6A00',
          hover:   '#E65F00',
          50:  '#FFF1E6',
          100: '#FFDBBF',
          200: '#FFB980',
          300: '#FF9640',
          400: '#FF6A00',
          500: '#E65F00',
          600: '#CC5400',
        },

        // ── Royal Blue — technology / intelligence accent ─────────────
        blue: {
          DEFAULT: '#2563FF',
          hover:   '#1D4FD8',
          50:  '#EAF0FF',
          100: '#C9D9FF',
          200: '#9EBBFF',
          300: '#6E97FF',
          400: '#3F73FF',
          500: '#2563FF',
          600: '#1A4FDB',
        },

        // ── Success Green — growth / results accent ───────────────────
        green: {
          DEFAULT: '#22C55E',
          hover:   '#16A34A',
          50:  '#E9FBF0',
          100: '#C3F5D6',
          200: '#8FEAB2',
          300: '#5BDD8E',
          400: '#22C55E',
          500: '#16A34A',
          600: '#0F7C38',
        },

        // ── Golden Yellow — secondary highlight, use sparingly ────────
        gold: {
          DEFAULT: '#FFC107',
          50:  '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFC107',
          500: '#E6AC00',
          600: '#CC9900',
        },

        // ── Dark sections (footer, dashboard UI only) ─────────────────
        black:    '#0A1224',
        ink:      '#101B33',
        charcoal: '#16233F',

        // ── Ivory compat ──────────────────────────────────────────────
        ivory: {
          DEFAULT: '#F8F5F0',
          60: '#64748B',
          30: '#94A3B8',
          10: 'rgba(248,245,240,0.07)',
        },

        // ── Legacy compat — aliased into the final brand palette ──────
        plum:     { DEFAULT: '#0A1224', 50: '#EEF1F7', 100: '#D7DCE8', 200: '#AFB8D0', 300: '#8794B4', 400: '#4F5D82', 500: '#0A1224', 600: '#050810' },
        magenta:  { DEFAULT: '#FF6A00', hover: '#E65F00', 50: '#FFF1E6', 100: '#FFDBBF', 200: '#FFB980', 300: '#FF9640', 400: '#FF6A00', 500: '#E65F00', 600: '#CC5400' },
        lavender: '#F8F5F0',
        slate:    { DEFAULT: '#334155', 400: '#64748B', 500: '#334155' },
        border:   '#E7E3DD',
        blush:    '#FFE3CC',
        graytone: '#94A3B8',
      },

      fontFamily: {
        sans: ['var(--font-inter)', 'Helvetica Neue', 'Helvetica', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'],
        display: ['var(--font-jakarta)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'Helvetica Neue', 'Arial', 'sans-serif'],
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
        soft:        '0 1px 3px rgba(10,18,36,0.06), 0 4px 16px rgba(10,18,36,0.08)',
        lift:        '0 2px 8px rgba(10,18,36,0.08), 0 12px 32px rgba(10,18,36,0.10)',
        card:        '0 1px 4px rgba(10,18,36,0.06), 0 8px 24px rgba(10,18,36,0.08)',
        'dark-lift': '0 4px 24px rgba(3,8,20,0.5)',
        glow:        '0 0 0 1px rgba(255,106,0,0.18), 0 8px 24px rgba(255,106,0,0.10)',
        'navy-glow': '0 0 0 1px #E7E3DD, 0 8px 24px rgba(10,18,36,0.10)',
        'blue-glow': '0 0 0 1px rgba(37,99,255,0.16), 0 8px 24px rgba(37,99,255,0.08)',
        'gold-glow': '0 0 0 1px rgba(255,193,7,0.20), 0 8px 32px rgba(255,193,7,0.10)',
      },

      backgroundImage: {
        'light-surface':  'linear-gradient(160deg, #FFFFFF 0%, #F8F5F0 100%)',
        'cream-surface':  'linear-gradient(160deg, #FDFBF8 0%, #F8F5F0 100%)',
        'navy-surface':   'linear-gradient(160deg, #28345C 0%, #0A1224 100%)',
        'dark-surface':   'linear-gradient(160deg, #101B33 0%, #0A1224 100%)',
        'card-surface':   'linear-gradient(160deg, #16233F 0%, #101B33 100%)',
        'orange-gradient':'linear-gradient(135deg, #FF6A00 0%, #E65F00 100%)',
        'blue-gradient':  'linear-gradient(135deg, #2563FF 0%, #1D4FD8 100%)',
        'gold-gradient':  'linear-gradient(135deg, #FFC107 0%, #E6AC00 100%)',
        'pearl-gradient': 'linear-gradient(135deg, #F8F5F0 0%, #ECE8E2 100%)',
        'navy-gradient':  'linear-gradient(160deg, #0A1224 0%, #101B33 50%, #16233F 100%)',
        'aurora':         'radial-gradient(ellipse 70% 50% at 30% 20%, rgba(255,106,0,0.04) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 75% 70%, rgba(37,99,255,0.05) 0%, transparent 60%)',
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
