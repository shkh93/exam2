/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
       white: {
        50: '#FCFCFD',
        100: '#FFFFFF',
        200: '#777E90'

       },
       green: { 
        100: '#45B26B',
       }
     

      
      },
    },
  },
  plugins: [],
}

