/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        'peach': "#fc6870",
        'Navyblue': "#0072bc",
        'lightBlue' : "#4095cd",
      },
      fontFamily:{
        "Roboto" : 'Roboto sans-serif',
        "Roboto-lg" : 'Roboto Light'
      },
    },
  },
  plugins: [  
    require('flowbite/plugin')
  ],
}

