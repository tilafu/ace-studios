/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#581c87',
        secondary: {
          500: '#a855f7',
          300: '#d8b4fe',
        },
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}
