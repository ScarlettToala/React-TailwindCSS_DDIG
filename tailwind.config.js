/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        leckerli: ['"Leckerli One"', 'cursive'],
        pattaya: ['Pattaya', 'sans-serif'],
      },
      colors: {
        "scroll-thumb": "#3b82f6",
        "scroll-track": "#e5e7eb",
      }
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '::-webkit-scrollbar': { width: '8px' },
        '::-webkit-scrollbar-thumb': { background: '#3b82f6', borderRadius: '4px' },
        '::-webkit-scrollbar-track': { background: '#e5e7eb' },
      })
    }
  ],
};
