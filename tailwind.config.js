/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg-light": "#F5F5F5",
        "primary-color-light": "#000000",
        "secondary-color-light": "#33E092",
        "primary-bg-dark": "#161619",
        "primary-color-dark": "#F5F5F5",
      }
    },
  },
  plugins: [],
}