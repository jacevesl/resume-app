/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Here we add our custom colors for this project:
    colors: {
      black: "#191A19",
      yellow: "#FFF734",
      green: "#68F590",
      grey: "#F3F3F3",
      "grey-light": "#FAFAFA",
      "green-light": "#d3eff1",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Georgia", "sans-serif"],
      serif: ["Merriweather", "serif"],
      display: ["Oswald"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.15rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.5",
    },
    extend: {
      screens: {
      // media queries here, examples:
      // @media (min-width: 640px) {....}
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      },
    },
  },
  plugins: [],
};
