module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#006D5B'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
