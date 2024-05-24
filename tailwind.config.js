/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-bg-light": "#EDF4F2",
        "primary-color-light": "#040303",
        "secondary-color-light": "#E7473C",
        "primary-bg-dark": "#161619",
        "primary-color-dark": "#F5F5F5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        infant: ["Ysabeau Infant", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};