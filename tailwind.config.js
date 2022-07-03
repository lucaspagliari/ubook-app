/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // ...require("tailwindcss/colors"),
      black: "#000",
      dark: "#2a2d3b",
      white: "#fff",
      white2: "#e1e1e1",
      base: "#f8f9fd",
      orange: "#fa7268",
      gray: "#c0c3d2",
      "light-pink": "#fff3f2", // very-light-pink
      "pale-gray": "#e4e7f4", // pale-grey
      "bluey-gray": "#9198af", // bluey-gray
      "yellowish-green": "#dbff90", // light-yellowish-green
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
