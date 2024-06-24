/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#161616",
        light: "#F7F7F7",
        main: "#353DED"
      },
      fontFamily: {
        'old-standard': ['Old Standard TT', 'serif'],
      },
    },
  },
  plugins: [],
}

