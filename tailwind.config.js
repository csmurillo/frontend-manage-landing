/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brightRed:'hsl(12, 88%, 59%)',
        darkBlue:'hsl(228, 39%, 23%)',
        darkGrayishBlue:'hsl(227, 12%, 61%)',
        veryDarkBlue:'hsl(233, 12%, 13%)',
        veryPaleRed:'hsl(13, 100%, 96%)',
        veryLightGray:'hsl(0, 0%, 98%)'
      },
      fontFamily:{
        viet:['Be Vietnam Pro', 'sans-serif']
      },
      backgroundImage: {
        simplifySection: "url('/images/bg-simplify-section.svg')",
      }
    },
  },
  plugins: [],
}