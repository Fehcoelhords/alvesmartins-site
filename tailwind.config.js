/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2B4D",
          light: "#1A4B76",
          dark: "#051A30",
        },
        accent: {
          DEFAULT: "#2E6DA4",
          cyan: "#00D4FF",
          hover: "#265a8a",
        },
        white: {
          DEFAULT: "#FFFFFF",
          pearl: "#F8FAFC",
          glass: "rgba(255, 255, 255, 0.1)",
        },
        light: "#F4F6F8",
      },
      backgroundImage: {
        "pearl-gradient":
          "linear-gradient(135deg, #0A2B4D 0%, #16213E 50%, #0F3460 100%)",
        // Gradiente animado "Surreal"
        "surreal-gradient":
          "linear-gradient(270deg, #0A2B4D, #004e92, #000428, #00D4FF)",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 212, 255, 0.3)",
        "neon-strong": "0 0 30px rgba(0, 212, 255, 0.6)",
        glass: "0 8px 32px 0 rgba(10, 43, 77, 0.2)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-xy": "gradient-xy 15s ease infinite", // Animação do background se mexendo
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "400% 400%",
            "background-position": "right center",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: 1,
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
          },
          "50%": { opacity: 0.8, boxShadow: "0 0 10px rgba(0, 212, 255, 0.2)" },
        },
      },
    },
  },
  plugins: [],
};
