/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '200px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

