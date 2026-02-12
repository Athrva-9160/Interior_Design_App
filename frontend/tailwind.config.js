/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#C27C2C",
        muted: "#6B7280",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],

  extend: {
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    scaleIn: {
      "0%": { transform: "scale(0.95)", opacity: 0 },
      "100%": { transform: "scale(1)", opacity: 1 },
    },
  },
  animation: {
    fadeIn: "fadeIn 0.3s ease-out",
    scaleIn: "scaleIn 0.3s ease-out",
  },
}

};


