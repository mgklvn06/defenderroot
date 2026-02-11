/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F2A44',
        secondary: '#2F6DF6',
        security: '#00B67A',
        background: '#0B1623',
        card: '#13273F',
        border: '#1F3B57',
        text: {
          primary: '#E6EDF5',
          secondary: '#94A3B8',
        },
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
        'section': '96px',
      },
      animation: {
        'micro-in': 'fadeIn 0.15s ease-out',
        'micro-out': 'fadeOut 0.15s ease-out',
        'component-enter': 'slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'structural-enter': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'ambient-float': 'float 12s ease-in-out infinite',
        'counter': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        countUp: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        'fast': '150ms',
        'medium': '400ms',
        'slow': '600ms',
        'micro': '150ms',
        'component': '600ms',
        'structural': '600ms',
        'ambient': '12000ms',
      },
      transitionTimingFunction: {
        'enterprise': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'motion': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
