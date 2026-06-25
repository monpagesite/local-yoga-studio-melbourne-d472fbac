/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5F4C',
        secondary: '#8FA892',
        accent: {
          DEFAULT: '#D4A574',
          dark: '#C19563',
        },
        background: '#FAF8F5',
        surface: '#F0EDE8',
        text: {
          DEFAULT: '#1A1A1A',
          muted: '#6B6B6B',
        },
        border: '#E0DCD5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
