const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        sans: ["Spartan", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#DA0463',
        secondary: {
          100: '#DBEDF3',
          200: '#404B69'
        }
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['18px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    },
  },
  variants: {
    fontSize: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
