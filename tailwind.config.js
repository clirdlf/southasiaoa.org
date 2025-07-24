module.exports = {
  content: [
    "./src/**/*.{html,njk}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "libre-baskerville": ["Libre Baskerville", "serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        saoaBlue: "#0399FE",
        saoaBlueDark: "#0274BD",
        saoaPink: "#EB008D",
        saoaYellow: "#F9BE46",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
