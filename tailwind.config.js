/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fbf6f2',
          100: '#f3e9df',
          200: '#e7d1bf',
          300: '#d9b89e',
          400: '#c89772',
          500: '#a86b2a',
          600: '#8a4f1f',
          700: '#653713',
          800: '#43240b',
          900: '#281107'
        }
      }
    },
  },
  plugins: [],
};
