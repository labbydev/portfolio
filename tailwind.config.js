const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        sans: ["Spartan", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          light: '#F9C577',
          default: '#F59D16',
          dark: '#EB910A',
        },
        secondary: {
          default: '#DA0463',
          dark: '#A1024A',
          darker: '#4F0224',
        },
        tertiary: {
          default: '#404063',
          darker: '#202031'
        },
        gray: {
          100: '#E2E2E2',
          200: '#CCCCCC',
          300: '#B8B8B8',
          400: '#8F8F8F',
          500: '#858585',
        },
        black: '#08080C',
        white: '#FFFCF2',
      },
    },
  },
  variants: {
    fontSize: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
