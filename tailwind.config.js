/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {

      'xxs': {'min': '270px', 'max': '390px'},

      'xs': {'min': '390px', 'max': '670px'},

      'sm': {'min': '670px', 'max': '770px'},

      'md': '770px',

      // 'lg': '850px',
    },
    extend: {},
  },
  plugins: [],
}

