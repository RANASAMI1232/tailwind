/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'rana': '#3238f2'
      },
      fontFamily: {
       'display': ['popins', 'sens-serif'],
       'body': ['inter', 'sens-serif']
      }
    },
  },
  plugins: [],
}

