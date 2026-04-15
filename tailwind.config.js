/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        beer: {
          light: '#60a5fa',
          dark: '#2563eb',
          foam: '#eff6ff',
        },
      },
      keyframes: {
        'beer-fill': {
          '0%': { height: '0%' },
          '100%': { height: '85%' },
        },
        'foam-float': {
          '0%, 100%': { transform: 'translateY(0)', opacity: 0 },
          '10%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateY(-85%)' },
        },
        bubble: {
          '0%': { bottom: '0%', opacity: 0, transform: 'translateX(0px)' },
          '50%': { opacity: 1, transform: 'translateX(5px)' },
          '100%': { bottom: '80%', opacity: 0, transform: 'translateX(-5px)' },
        },
      },
      animation: {
        'beer-fill': 'beer-fill 4s ease-in-out forwards',
        'foam-float': 'beer-fill 4s ease-in-out forwards',
        bubble: 'bubble 3s infinite ease-out',
      },
    },
  },
  plugins: [],
};