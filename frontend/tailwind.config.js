/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paris: {
          gold: '#D4AF37',
          beige: '#f9f7f3',
          dark: '#2d2d2d',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        elegant: '0 10px 30px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}