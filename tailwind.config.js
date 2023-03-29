/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: 'black',
        secondary: 'hsla(30,33%,99%,.8)',
        accent: 'hsl(27,80%,83%)',
        divider: 'hsla(27,35%,83%,.8)',
        twitter: 'hsl(203,89%,53%)',
        github: 'hsl(212,100%,67%)',
        instagram: 'hsl(356,100%,69%)',
        linkedin: 'hsl(201,100%,35%)',
        dark: {
          primary: 'white',
          secondary: 'hsla(30,33%,1%,.8)',
          accent: 'hsl(27,80%,17%)',
          divider: 'hsla(222,47%,21%,.8)',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
};
