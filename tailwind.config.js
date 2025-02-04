/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2A2A2A',
        'accent': '#E89F71',
      },
      fontFamily:{
        sans: ['Poppins', 'sans-serif'], 
      },
      fontSize: {
        base: '1rem', 
      },
      fontWeight: {
        normal: '500', 
      }
    },
  },
  plugins: [],
}