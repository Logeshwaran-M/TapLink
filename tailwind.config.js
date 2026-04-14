/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Optional custom amber if you prefer
        beer: {
          light: '#f59e0b', // amber-500
          dark: '#d97706',  // amber-600
          foam: '#f8fafc',  // slate-50
        }
      },
      keyframes: {
        'beer-fill': {
          '0%': { height: '0%' },
          '100%': { height: '85%' }, // Fills 85% of the glass
        },
        'foam-float': {
          '0%, 100%': { transform: 'translateY(0)', opacity: 0 },
          '10%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateY(-85%)' }, // Adjust based on fill height
        },
        'bubble': {
          '0%': { bottom: '0%', opacity: 0, transform: 'translateX(0px)' },
          '50%': { opacity: 1, transform: 'translateX(5px)' },
          '100%': { bottom: '80%', opacity: 0, transform: 'translateX(-5px)' },
        },
      },
      animation: {
        'beer-fill': 'beer-fill 4s ease-in-out forwards',
        'foam-float': 'beer-fill 4s ease-in-out forwards', // Reuses beer-fill timing to stay on top
        'bubble': 'bubble 3s infinite ease-out',
      },
    },
  },
  plugins: [],
}