/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy:    { DEFAULT: '#0F172A', soft: '#1E293B', lighter: '#263548' },
        crimson: { DEFAULT: '#E63946', dark: '#C1121F', soft: 'rgba(230,57,70,0.12)', glow: 'rgba(230,57,70,0.35)' },
        gold:    { DEFAULT: '#F59E0B', light: '#FCD34D', soft: 'rgba(245,158,11,0.12)' },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      animation: {
        'fade-down': 'fadeDown 0.55s ease both',
        'fade-up':   'fadeUp 0.5s ease both',
        shimmer:     'shimmer 1.5s infinite',
      },
      keyframes: {
        fadeDown: { from: { opacity: 0, transform: 'translateY(-16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeUp:   { from: { opacity: 0, transform: 'translateY(16px)'  }, to: { opacity: 1, transform: 'translateY(0)' } },
        shimmer:  { '0%': { backgroundPosition: '200% 0' }, '100%': { backgroundPosition: '-200% 0' } },
      },
    },
  },
  plugins: [],
}
