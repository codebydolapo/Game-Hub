/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "280px",
      sm: "320px", //mobile
      md: "481px", //tablet
      lg: "769px", //laptop
      xl: "1025px", //large screens
      xxl: "1201", //TVs
    },
    extend: {
      colors: {
        
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
