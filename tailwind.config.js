/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage:{
        'bg-sec':"url('/src/assets/image/f-shape1.png')",
        'bg-hero':"url('/src/assets/image/b-shapeup.png')",
      }
    },
  },
  plugins: [],
};
