/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:["Poppins","sans-serif"],
        noto:['"Noto Sans Mono"' , ...defaultTheme.fontFamily.sans],
      },

    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     '.zoomer': {
    //       '@apply hover:scale-150 cursor-pointer transition-all duration-700 ease-in-out': {},
    //     },
    //   };

    //   addUtilities(newUtilities, ['hover']);
    // },
  ],
}