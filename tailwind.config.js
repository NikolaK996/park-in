module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#006D5B'
      },
      zIndex: {
        1: '10001',
        2: '10002',
        3: '10003',
        4: '10004',
        5: '10005',
        6: '10006'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
