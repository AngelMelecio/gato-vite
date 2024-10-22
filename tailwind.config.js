/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#49C27A",
          200: "#38B067",
          300: "#279E54",
          400: "#1B6C41",
        },
        secondary: {
          100: "#FFD34B",
          200: "#FFC138",
          300: "#FFAF25",
          400: "#FF9D12",
        }
      }
    },
  },
  plugins: [],
}