/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#13131F',
        'bd': '#6965FF',
        'h1': '#9895FF',
        'card': '#42424C',
        'footer': '#07080D',
      },
      fontFamily: {
        'montserrat': ['Montserrat, sans-serif']
      },
    },
  },
  plugins: [],
}

