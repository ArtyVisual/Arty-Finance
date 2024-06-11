/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        'custom-light': '2px 2px 5px rgba(0, 0, 245, 0)',
        'custom-dark': '0 2px 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}