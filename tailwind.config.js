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
       "roboto" : "Roboto, sans-serif;"
      },

      animation: {
        rotate: 'rotate 4s linear infinite',

      },
      keyframes: {
        rotate: {
          '0%': {
            left: '100%',
          },
          '100%': {
            left: '0',
          },
        },
      },
     
    
    },
  },
  plugins: [  
    require('flowbite/plugin')
  ],
}

