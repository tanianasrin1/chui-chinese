/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "img-none": "none",
      },
      colors: {
        "primary": "#c8d33c",
        "secondary": "",
        "black": "#333333",
        "gray": "#868585",
        "gray-bg": "#f3f5fa",
        "black-theme": "#111111",   
      },
      fontFamily: {
        Barlow: ["Open Sans", "sans-serif"],
      },
      fontWeight: {
        lighter: "lighter",
      },
    },
  },
  plugins: [],
}
