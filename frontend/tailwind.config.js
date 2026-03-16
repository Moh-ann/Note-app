/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors for the project
      colors: {
        primary: "#2B85FF",
        secondary: "#Ef863E",
      },
    },
  },
  plugins: [],
};

