/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f8f5',
          100: '#e1efe6',
          200: '#c5dfd0',
          300: '#9bc8af',
          400: '#68a984',
          500: '#458c65',
          600: '#346f4e',
          700: '#2a5940',
          800: '#234734',
          900: '#1e3b2c',
          950: '#102119',
        },
        surface: {
          light: '#fafafa',
          DEFAULT: '#f4f5f4',
          dark: '#eaecea',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
