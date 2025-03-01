/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightText: "#9b9b9b",
        greenText: "#1d8221",
        redText: "#e02b2b",
        skyText: "#32dbe8"
      },
      flex: {
        full:"0 0 100%"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

