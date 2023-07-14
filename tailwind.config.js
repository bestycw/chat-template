/** @type {import('tailwindcss').Config} */

// console.log(withMT);
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:"#3776F4",
        purple:"#4C2074"
      }
    },
  },
  plugins: [],
}

