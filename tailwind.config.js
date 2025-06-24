/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        staatliches: ["Staatliches", "cursive"],
        lacquer: ["Lacquer", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        special: ["'Special Elite'", "cursive"]
      }
    }
  },
  plugins: []
}