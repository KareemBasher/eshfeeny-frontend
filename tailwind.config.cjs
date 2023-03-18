/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#0583F2',
        lightBlue: '#0597F2',
        orange: '#F89D1C',
        offWhite: '#fdfdff'
      }
    },
    fontFamily: {
      cairo: ['Cairo', 'sans-serif']
    }
  },
  plugins: []
}
