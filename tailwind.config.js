/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prussian-blue': "#102E4A",
        'tomato': '#FF6542'
      },
    },
  },
  plugins: [],
}