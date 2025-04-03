// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        burgundy: "#800020", // Removing old burgundy color
        // ATAN brand colors
        orange: "#eb6a23",
        purple: "#482b7b",
        blue: "#4194d3",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Modern, clean font as requested
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
