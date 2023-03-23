/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '375px',
      },
      fontSize: {
        'smx': '0.5rem',
        'smx2': '0.3rem',
        'xs1': '0.7rem'
      },
    },
  },
  plugins: [],
}
