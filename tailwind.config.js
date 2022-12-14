/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'linkedin': '#0a66c2',
        'github': '#171515',
        'google': '#bb001b',
        'qualcomm': '#3c5ccc',
        'android': '#a4c639'
      }  
    },
  },
  plugins: [],
}
