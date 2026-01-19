/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'savariya-yellow': '#FACC15',
        'savariya-black': '#000000',
      },
    },
  },
  plugins: [],
}
