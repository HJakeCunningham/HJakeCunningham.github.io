/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {}
  }
  // plugins: [
  //   plugin(function ({ addBase }) {
  //     addBase({
  //       html: { fontSize: '16px' }
  //     });
  //   })
  // ]
};
