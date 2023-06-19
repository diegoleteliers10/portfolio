/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature:["Over the rainbow"]
    },
    screens: {
      'iphone': '400px',
      // => @media (min-width: 640px) { ... }

      'tablet': '640px',

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'mac': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
