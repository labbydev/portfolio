const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  //@TODO: remove manual postcss-purge and configure built in purge.
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        sans: ["Spartan", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        navy: '#404B69',
        pink: '#DA0463',
        blue: '#DBEDF3'
      }
    },
  },
  variants: {},
  plugins: [],
}
