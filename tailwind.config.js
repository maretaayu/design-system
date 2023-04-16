/** @type {import('tailwindcss').Config} */
import { colors } from "./colors";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
      ring: colors,
      fill: colors,
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};
