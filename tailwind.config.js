/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'openSans': ["Open Sans", "sans-serif"],
        'galliard': ["ITC Galliard", "sans-serif"]
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
