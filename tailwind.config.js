/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./index.html",
  //   "./src/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#C7E1Dc",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "white-100": "#f3f3f3",
        "pink-100": "#E0D5D3",
        "pink-200": "#ffd1c9",
        "grey-100": "#DFEAF0",
        "blue-100": "#BBD6E0",
        "blue-200": "#BDD4DD",
        "blue-300": "#73ABBC",
        "blue-800": "#548B9C",
        "green-500": "#CBE5CC",
        "green-600": "#AAD9A5",
        "green-700": "#6FB879",
        "green-800": "#7EA594",
        "green-900": "#86A3A1",
        "brown-100": "#F6EFDC",
        "brown-200": "#DCC997",
        "brown-300": "#C3B09D",
        "brown-400": "#A26E61",
        "brown-500": "#976B60",
        "black-100": "#100d25",
        "black-200": "#090325",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
