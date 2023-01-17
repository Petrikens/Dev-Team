/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        barColor: "#dee2e6",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
      },
      boxShadow: {
        logShadow: "0px 2px 20px rgba(215, 222, 227, 0.45)",
      },
    },
  },
  plugins: [],
};
