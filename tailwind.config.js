module.exports = {
  content: [
    "./src/**/*.{html,njk}",
    //"./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "libre-baskerville": ["Libre Baskerville", "serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        saoaBlue: "#0399FE",
        saoaPink: "#EB008D",
        saoaYellow: "#F9BE46",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
