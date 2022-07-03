module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      colors: {
        primary: "#d63031",
        secondary: "#58656b",
      },
      fontFamily: {
        gotham: "Gotham, Arial, sans-serif",
        futura: "futura, Arial, sans-serif",
        futuraOblique: "futura-oblique, Arial, sans-serif",
      },
      container: {
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
};
