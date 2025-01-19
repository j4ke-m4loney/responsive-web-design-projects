/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}", // For tailwind to access all the HTML Elements
    "./src/components/**/*.{js,ts,jsx,tsx}", // For tailwind to access all the HTML Elements
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};