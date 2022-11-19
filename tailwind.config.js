/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray1: "#6E84A3",
        bgColor: "#f8fbfd",
        blue1: "#2c7ae5",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
