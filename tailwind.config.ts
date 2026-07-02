import type { Config } from 'tailwindcss';

/**
 * HeyPearl palette — Direction 2: Editorial Black & Magenta
 *
 *   Background      Ivory       #F8F5EE   → token: cream
 *   Soft surface    Bone        #EFE9DC   → token: lavender
 *   Ink             Editorial   #0E0E0E   → token: plum
 *   Ink (alt)       Off-black   #1A1A1A   → token: navy
 *   Primary accent  Magenta     #D34681   → token: magenta (kept)
 *   Secondary       Orange      #FF914D   → token: orange (kept)
 *   Soft accent     Blush       #FED0D1   → token: blush (kept)
 *   Body text       Warm slate  #4A4640   → token: slate
 *
 * Token names are kept (cream, lavender, plum, navy) so existing utility
 * classes don't have to change site-wide. The color values are what shifted.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5EE',
        lavender: '#EFE9DC',
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
        magenta: {
          DEFAULT: '#D34681',
          50: '#FCEEF4',
          100: '#F8D6E3',
          200: '#EFA4C0',
          300: '#E5739D',
          400: '#D34681',
          500: '#B82F6A',
          600: '#962053',
        },
        plum: {
          DEFAULT: '#0E0E0E',
          50: '#F2F2F2',
          100: '#D9D9D9',
          200: '#B3B3B3',
          300: '#7A7A7A',
          400: '#3D3D3D',
          500: '#0E0E0E',
          600: '#000000',
        },
        navy: {
          DEFAULT: '#1A1A1A',
          50: '#F2F2F2',
          100: '#D9D9D9',
          200: '#B3B3B3',
          300: '#666666',
          400: '#333333',
          500: '#1A1A1A',
          600: '#0A0A0A',
        },
        blush: '#FED0D1',
        slate: {
          DEFAULT: '#4A4640',
          400: '#6E695F',
          500: '#4A4640',
        },
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
          'var(--font-inter)',
          'Helvetica Neue',
          'Helvetica',
          '-apple-system',
          'sans-serif',
        ],
        italic: ['Helvetica Neue Italic', 'Helvetica Oblique', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        'micro': '0.18em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(14, 14, 14, 0.04), 0 8px 24px rgba(14, 14, 14, 0.06)',
        'lift': '0 4px 12px rgba(14, 14, 14, 0.06), 0 24px 48px rgba(14, 14, 14, 0.08)',
        'glow': '0 0 0 1px rgba(211, 70, 129, 0.08), 0 24px 80px rgba(211, 70, 129, 0.12)',
      },
      backgroundImage: {
        'pearl-gradient': 'linear-gradient(135deg, #F8F5EE 0%, #EFE9DC 50%, #FED0D1 100%)',
        'plum-gradient': 'linear-gradient(135deg, #0E0E0E 0%, #1A1A1A 100%)',
        'magenta-gradient': 'linear-gradient(135deg, #FF914D 0%, #D34681 100%)',
        'aurora':
          'radial-gradient(60% 60% at 30% 20%, rgba(255,145,77,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(211,70,129,0.18) 0%, transparent 60%), radial-gradient(60% 60% at 60% 90%, rgba(14,14,14,0.10) 0%, transparent 60%)',
      },
      animation: {
        'shimmer': 'shimmer 8s linear infinite',
        'float': 'float 12s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
