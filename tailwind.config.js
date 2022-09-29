/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3385D7",
        secondary: "#8BC34A",
        background: '#F5F5F5',
        shade: '#808080'
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [/* require("@tailwindcss/forms") */],
};
