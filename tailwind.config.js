/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', "cursive"]
      }
    },
    animation: {
      glow: "glow 2s infinite ease-in-out"
    },
    keyframes: {
      glow: {
        "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
        "50%": { opacity: "1", transform: "scale(1.05)" }
      }
    }
  },
  plugins: []
};
