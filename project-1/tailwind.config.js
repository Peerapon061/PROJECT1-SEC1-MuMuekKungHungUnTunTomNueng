/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '840px'},
      'md': {'min': '841px'}
    },
    extend: {
      fontFamily: {
        'mali': [ 'Mali', 'cursive']
      }
    },
  },
  plugins: [
    
]
}
