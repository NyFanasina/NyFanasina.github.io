const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        kontes: ['DMMono', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
        Raleway: ['Raleway']
      }
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
}

