/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"], // TODO: "./index.html"
  daisyui: {
    themes: ["synthwave"],
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
}
