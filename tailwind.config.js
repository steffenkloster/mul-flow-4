// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#FF5D5D",
          orange: "#F97F68",
          yellow: "#FFE889",
          green: "#2A5F2B",
          brown: "#D6AD81",
        },
      },
    },
  },
  plugins: [],
};
