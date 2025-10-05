/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
      branddark: "#221e1f",
    },
      fontFamily: {
            rubik: ["Rubik", "sans-serif"],
        staatliches: ["Staatliches", "cursive"],
        lacquer: ["Lacquer", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        special: ["'Special Elite'", "cursive"]
      }
    }
  },
  plugins: []
}