const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    'src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        sans: ["Spartan", ...defaultTheme.fontFamily.sans]
      },
      screens: {
        'xs': '360px',
        'xs-only': {'max': '639px'},
      },
      colors: {
        primary: {
          light: '#F9C577',
          default: '#F59D16',
          dark: '#D78509',
          darker: '#D96D08',
        },
        secondary: {
          default: '#DA0463',
          dark: '#A1024A',
          darker: '#4F0224',
        },
        tertiary: {
          default: '#404063',
          dark: '#202031'
        },
        gray: {
          100: '#E2E2E2',
          200: '#CCCCCC',
          300: '#B8B8B8',
          400: '#8F8F8F',
          500: '#858585',
        },
        black: '#08080C',
        'off-white': '#FFFCF2',
      },
      fontSize: {
        'none': '0px',
      },
      letterSpacing: {
        tightest: '-.075em',
      },
      height: {
        '4px': '4px',
        '50px': '50px',
        '3/4': '75vh'
      },
      width: {
        '40px': '40px',
      },
      maxWidth: {
        '2xs': '300px',
      },
      margin: {
        '-50': '-50vw',
      },
      inset: {
        '1/2': '50%',
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  variants: {
    fontSize: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
