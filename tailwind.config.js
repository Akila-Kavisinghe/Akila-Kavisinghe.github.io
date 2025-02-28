/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '28 rem',
      },
      colors:{
        background: '#202022',
        card: '#151515',
      }
    },
  },
  plugins: [],
}

