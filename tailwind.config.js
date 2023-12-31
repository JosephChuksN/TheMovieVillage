/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        
      },
      gridTemplateColumns:{
        fluid: "repeat(auto-fit, minmax(15rem,1fr))"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

