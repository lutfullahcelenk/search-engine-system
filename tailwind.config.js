/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#204080",
        lightBlue: "#647EB5",
        hoverBlue: "#4F75C235",
        buttonHover: "#4F75C2"
      },
    },
  },
  plugins: [],
};
