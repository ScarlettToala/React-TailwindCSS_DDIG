/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        leckerli: ['"Leckerli One"', 'cursive'],
      },
    },
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      colors: {
        "scroll-thumb": "#3b82f6",
        "scroll-track": "#e5e7eb",
      }
    }
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '::-webkit-scrollbar': { width: '8px' },
        '::-webkit-scrollbar-thumb': { background: '#3b82f6', borderRadius: '4px' },
        '::-webkit-scrollbar-track': { background: '#e5e7eb' },
      })
    }
  ]
}

