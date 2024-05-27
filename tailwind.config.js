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
        "primary-bg-dark": "#0A192F",
        "primary-color-dark": "#F5F5F5",
        "secondary-color-dark": "#64FFDA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        infant: ["Ysabeau Infant", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xl: { max: "1200px" },

        lg: { max: "930px" },

        md: { max: "767px" },

        sm: { max: "639px" },

        xs: { max: "479px" },
      },
    },
  },
  plugins: [],
};
