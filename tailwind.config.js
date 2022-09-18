const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/common/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Open Sans', ...defaultTheme.fontFamily.sans ]
      }
    },
  },
  plugins: [],
}
