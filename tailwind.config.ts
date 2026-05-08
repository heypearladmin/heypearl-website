import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9ED',
        lavender: '#F6F4FB',
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
          DEFAULT: '#431043',
          50: '#F4EAF4',
          100: '#E5C9E5',
          200: '#C68FC6',
          300: '#9B5C9B',
          400: '#6B2C6B',
          500: '#431043',
          600: '#2E0A2E',
        },
        navy: {
          DEFAULT: '#1B263B',
          50: '#EEF1F6',
          100: '#D5DBE6',
          200: '#A9B5C9',
          300: '#7286A2',
          400: '#43526E',
          500: '#1B263B',
          600: '#10182A',
        },
        blush: '#FED0D1',
        slate: {
          DEFAULT: '#38476B',
          400: '#5A6A8E',
          500: '#38476B',
        },
        graytone: '#737373',
      },
      fontFamily: {
        sans: [
          'Helvetica Neue',
          'Helvetica',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Helvetica Neue',
          'Helvetica',
          'Inter',
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
        'soft': '0 1px 2px rgba(27, 38, 59, 0.04), 0 8px 24px rgba(27, 38, 59, 0.06)',
        'lift': '0 4px 12px rgba(27, 38, 59, 0.06), 0 24px 48px rgba(27, 38, 59, 0.08)',
        'glow': '0 0 0 1px rgba(211, 70, 129, 0.08), 0 24px 80px rgba(211, 70, 129, 0.12)',
      },
      backgroundImage: {
        'pearl-gradient': 'linear-gradient(135deg, #FFF9ED 0%, #F6F4FB 50%, #FED0D1 100%)',
        'plum-gradient': 'linear-gradient(135deg, #431043 0%, #1B263B 100%)',
        'magenta-gradient': 'linear-gradient(135deg, #FF914D 0%, #D34681 100%)',
        'aurora': 'radial-gradient(60% 60% at 30% 20%, rgba(255,145,77,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(211,70,129,0.18) 0%, transparent 60%), radial-gradient(60% 60% at 60% 90%, rgba(67,16,67,0.18) 0%, transparent 60%)',
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
