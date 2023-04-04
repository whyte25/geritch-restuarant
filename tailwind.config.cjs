/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "san-serif"],
      serif: ["Cormorant Upright", "serif"],
    },
    screens: {
      xl: { max: "1440px" },
      lg: { max: "1023px" },
      md: { max: "768px" },
      sm: { max: "480px" },
      xs: { max: "350px" },
    },
    extend: {
      colors: {
        "deep-gray": "#AAAAAA",
        cream: "#dcca87",
        "light-cream": "#dcca87",
        black: "#0c0c0c",
        "black-alt": "#040404",
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ],
};
