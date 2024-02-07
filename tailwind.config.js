/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      'white': '#f7f7f7',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


