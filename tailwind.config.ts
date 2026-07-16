import type { Config } from 'tailwindcss';

/**
 * HeyPearl 3.0 — AI Authority Platform
 *
 * Dual-theme design system:
 *
 * Dark Conversion Theme (homepage, platform, solutions, pricing, company)
 *   Ground      Rich Black   #090909  → token: black
 *   Surface     Ink          #161616  → token: ink
 *   Surface+    Charcoal     #1C1C1C  → token: charcoal
 *   Accent      Warm Gold    #BF9B5C  → token: gold
 *   Highlight   Ivory        #F2EDE4  → token: ivory
 *   Accent 2    Magenta      #C03070  → token: magenta (updated hue)
 *
 * Editorial Light Theme (resources, blog, faq, glossary, guides)
 *   Ground      Warm Ivory   #F5F0E8  → token: cream (updated value)
 *   Surface     Bone         #EDE7DC  → token: lavender (updated value)
 *   Ink         Near-black   #1A1A1A  → token: plum (unchanged)
 *   Body text   Warm dark    #2A2520  → token: slate (updated)
 *   Border      Warm grey    #E0D9CF  → token: border
 *
 * Backward-compatible token names preserved so existing components
 * don't require immediate updates — values shift, names stay.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // ── 3.0 Dark theme tokens ──────────────────────────────────────
        black: '#090909',
        ink: '#161616',
        charcoal: '#1C1C1C',
        gold: {
          DEFAULT: '#BF9B5C',
          50:  '#FAF5EC',
          100: '#F0E3C5',
          200: '#E0C78A',
          300: '#CFAA50',
          400: '#BF9B5C',
          500: '#A6823D',
          600: '#8A6B2A',
        },
        ivory: {
          DEFAULT: '#F2EDE4',
          60: 'rgba(242,237,228,0.6)',
          30: 'rgba(242,237,228,0.3)',
          10: 'rgba(242,237,228,0.07)',
        },

        // ── 3.0 Editorial light theme tokens (updated values) ──────────
        cream: '#F5F0E8',
        lavender: '#EDE7DC',

        // ── Shared accent — updated magenta hue ────────────────────────
        magenta: {
          DEFAULT: '#C03070',
          50:  '#FCE8F1',
          100: '#F7C8DE',
          200: '#EB8DB7',
          300: '#D85590',
          400: '#C03070',
          500: '#9E1F58',
          600: '#7C1042',
        },

        // ── Preserved legacy tokens ────────────────────────────────────
        orange: {
          DEFAULT: '#FF914D',
          50: '#FFF5EE',
          100: '#FFE6D4',
          200: '#FFCCA8',
          300: '#FFB17C',
          400: '#FF914D',
          500: '#FF7A2A',
          600: '#E66417',
        },
        plum: {
          DEFAULT: '#0E0E0E',
          50:  '#F2F2F2',
          100: '#D9D9D9',
          200: '#B3B3B3',
          300: '#7A7A7A',
          400: '#3D3D3D',
          500: '#0E0E0E',
          600: '#000000',
        },
        navy: {
          DEFAULT: '#1A1A1A',
          50:  '#F2F2F2',
          100: '#D9D9D9',
          200: '#B3B3B3',
          300: '#666666',
          400: '#333333',
          500: '#1A1A1A',
          600: '#0A0A0A',
        },
        slate: {
          DEFAULT: '#2A2520',
          400: '#5C574F',
          500: '#2A2520',
        },
        border: '#E0D9CF',
        blush: '#FED0D1',
        graytone: '#737373',
      },

      fontFamily: {
        sans: [
          'var(--font-inter)',
          'Helvetica Neue',
          'Helvetica',
          '-apple-system',
          'BlinkMacSystemFont',
          'Arial',
          'sans-serif',
        ],
        display: [
          'var(--font-playfair)',
          'Georgia',
          'Times New Roman',
          'serif',
        ],
        // Legacy alias — some components use font-sans for headings
        heading: [
          'var(--font-playfair)',
          'Georgia',
          'serif',
        ],
      },

      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6.5rem)',  { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)',   { lineHeight: '1',    letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 4.5vw, 3.75rem)',{ lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },

      letterSpacing: {
        micro: '0.18em',
        wide:  '0.14em',
        wider: '0.10em',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      boxShadow: {
        // Light theme shadows
        soft: '0 1px 2px rgba(14, 14, 14, 0.04), 0 8px 24px rgba(14, 14, 14, 0.06)',
        lift: '0 4px 12px rgba(14, 14, 14, 0.06), 0 24px 48px rgba(14, 14, 14, 0.08)',
        // Dark theme shadows
        'gold-glow': '0 0 0 1px rgba(191,155,92,0.12), 0 8px 32px rgba(191,155,92,0.08)',
        'dark-lift': '0 4px 24px rgba(0,0,0,0.4)',
        glow: '0 0 0 1px rgba(192, 48, 112, 0.08), 0 24px 80px rgba(192, 48, 112, 0.12)',
      },

      backgroundImage: {
        // Dark theme
        'dark-surface': 'linear-gradient(135deg, #161616 0%, #111111 100%)',
        'gold-gradient': 'linear-gradient(135deg, #BF9B5C 0%, #A6823D 100%)',
        // Light theme (preserved)
        'pearl-gradient': 'linear-gradient(135deg, #F5F0E8 0%, #EDE7DC 50%, #FED0D1 100%)',
        'plum-gradient':  'linear-gradient(135deg, #0E0E0E 0%, #1A1A1A 100%)',
        'magenta-gradient': 'linear-gradient(135deg, #FF914D 0%, #C03070 100%)',
        'aurora': 'radial-gradient(60% 60% at 30% 20%, rgba(191,155,92,0.12) 0%, transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(192,48,112,0.10) 0%, transparent 60%)',
      },

      animation: {
        shimmer:  'shimmer 8s linear infinite',
        float:    'float 12s ease-in-out infinite',
        'fade-up':'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },

      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
