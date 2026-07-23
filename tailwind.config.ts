import type { Config } from 'tailwindcss';

/**
 * HeyPearl 5.0 — AI Authority Platform — Onboarding-Inspired Design System
 *
 * Dark Conversion Theme (homepage, platform, solutions, company)
 *   Ground      Deep Navy    #07142F  → token: black
 *   Surface     Mid Navy     #14284A  → token: ink
 *   Card        Card Navy    #1D355D  → token: charcoal
 *   Accent      Magenta      #C2185B  → token: magenta (primary interactive)
 *   Accent Hov  Magenta+     #D62F73  → hover state
 *   Text        Warm Cream   #F8F6F2  → token: ivory
 *   Text 2      Cool Slate   #C9D3E3  → token: secondary text
 *   Text 3      Muted Slate  #98A6BE  → token: muted text
 *   Border      Navy Border  #30486F  → token: border-dark
 *   Warm Neut   Warm Sand    #D8CDBF  → token: warm neutral (rare accents)
 *
 * Editorial Light Theme (resources, blog, faq)
 *   Ground      Warm Cream   #F8F6F2  → token: cream
 *   Surface     Warm Sand    #EDE4D4  → token: lavender
 *   Ink         Deep Navy    #07142F  → token: plum
 *   Border      Warm Sand    #D8CDBF  → token: border
 *
 * Gold (#B6925E) is rare — only awards, authority score, premium badges.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // ── Dark theme tokens ──────────────────────────────────────────
        black:    '#07142F',
        ink:      '#14284A',
        charcoal: '#1D355D',

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
        ivory: {
          DEFAULT: '#F8F6F2',
          60: '#C9D3E3',
          30: '#98A6BE',
          10: 'rgba(248,246,242,0.07)',
        },

        // ── Editorial light theme ──────────────────────────────────────
        cream:   '#F8F6F2',
        lavender:'#EDE4D4',

        // ── Primary interactive accent ─────────────────────────────────
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

        // ── Legacy tokens ──────────────────────────────────────────────
        orange: {
          DEFAULT: '#FF914D',
          50: '#FFF5EE', 100: '#FFE6D4', 200: '#FFCCA8',
          300: '#FFB17C', 400: '#FF914D', 500: '#FF7A2A', 600: '#E66417',
        },
        plum: {
          DEFAULT: '#07142F',
          50:  '#EEF1F8', 100: '#C8D0E5', 200: '#96A6C9',
          300: '#5D77AB', 400: '#2B4A8E', 500: '#07142F', 600: '#030A1A',
        },
        navy: {
          DEFAULT: '#07142F',
          50:  '#EEF1F8', 100: '#C8D0E5', 200: '#96A6C9',
          300: '#5D77AB', 400: '#14284A', 500: '#07142F', 600: '#030A1A',
        },
        slate: { DEFAULT: '#2A2520', 400: '#5C574F', 500: '#2A2520' },
        border:   '#D8CDBF',
        blush:    '#FED0D1',
        graytone: '#737373',
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
        soft:        '0 1px 3px rgba(3,8,20,0.12), 0 8px 24px rgba(3,8,20,0.14)',
        lift:        '0 4px 12px rgba(3,8,20,0.16), 0 24px 48px rgba(3,8,20,0.20)',
        card:        '0 2px 8px rgba(3,8,20,0.18), 0 16px 40px rgba(3,8,20,0.16)',
        'dark-lift': '0 4px 24px rgba(3,8,20,0.5)',
        glow:        '0 0 0 1px rgba(194,24,91,0.20), 0 12px 40px rgba(194,24,91,0.12)',
        'navy-glow': '0 0 0 1px #30486F, 0 16px 48px rgba(3,8,20,0.4)',
        'gold-glow': '0 0 0 1px rgba(182,146,94,0.16), 0 8px 32px rgba(182,146,94,0.08)',
      },

      backgroundImage: {
        'dark-surface':     'linear-gradient(160deg, #14284A 0%, #07142F 100%)',
        'card-surface':     'linear-gradient(160deg, #1D355D 0%, #14284A 100%)',
        'magenta-gradient': 'linear-gradient(135deg, #C2185B 0%, #D62F73 100%)',
        'gold-gradient':    'linear-gradient(135deg, #B6925E 0%, #9A7A47 100%)',
        'pearl-gradient':   'linear-gradient(135deg, #F8F6F2 0%, #EDE4D4 100%)',
        'navy-gradient':    'linear-gradient(160deg, #07142F 0%, #14284A 50%, #1D355D 100%)',
        'aurora':           'radial-gradient(ellipse 70% 50% at 30% 20%, rgba(194,24,91,0.06) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 75% 70%, rgba(48,72,111,0.4) 0%, transparent 60%)',
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
