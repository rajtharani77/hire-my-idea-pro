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
          50: '#f5f7fa',
          100: '#e9eef5',
          200: '#cedae8',
          300: '#a3bed5',
          400: '#719dbd',
          500: '#4f81a5',
          600: '#3c678a',
          700: '#315371',
          800: '#2a465f',
          900: '#263b4f',
          950: '#182635',
        },
        surface: {
          light: '#ffffff',
          DEFAULT: '#f8f9fa',
          dark: '#f1f3f5',
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
