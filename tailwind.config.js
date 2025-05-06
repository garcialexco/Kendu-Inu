// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      xs: '480px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1500px',
    },

    container: {
      padding: {
        DEFAULT: '20px',
        sm: '1.5rem',
        lg: '1.5rem',
        xl: '1.5rem',
        '2xl': '1.5rem',
      },
      center: true,
    },

    extend: {
      fontFamily: {
        headings: ['Teko', 'sans-serif'],
        body: ['Sora', 'sans-serif'],
      },

      colors: {
        black: '#050505',
        orange: '#E76449',
        orange50: '#F3B1A4',
        body: colors.white,
      },
      content: {
        dark: colors.black,
        light: colors.white,
      },
    },
    corePlugins: {
      container: false,
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          margin: '0 auto',
          'max-width': '100%',
          padding: '0 16px',
          width: '100%',
          '@screen sm': {
            padding: '0',
            width: '93.75%',
            'max-width': '1680px',
          },
        },
      });
    },
    require('@tailwindcss/container-queries'),
  ],
};
