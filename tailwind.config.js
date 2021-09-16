module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gadjian': '#14C2C0',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
