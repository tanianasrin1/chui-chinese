/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#fdd201",
        "secondary": "#211b00",
        // "black": "#333333",
        "green": "#008d0c",
        "gray-bg": "#f3f5fa",
        "black-theme": "#111111",   
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      fontWeight: {
        lighter: "lighter",
      },
    },
  },
  plugins: [],
}
