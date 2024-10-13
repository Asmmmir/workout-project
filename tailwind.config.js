/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './src/components/**/*.{html,js}',],
  theme: {
    fontFamily: {
      'rubik': 'Rubik',
      'arial': 'Arial',
      'bebas': 'Bebas Neue'
    },
    extend: {
      backgroundImage: {
        'discount': "url('../assets/images/star.svg')",
      }
    }
  },
  
  plugins: [],
}

