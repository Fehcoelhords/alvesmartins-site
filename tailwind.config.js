/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0056b3", // Azul (confiança, engenharia)
        secondary: "#f4f6f8", // Cinza (leveza, contraste)
        accent: "#1e3a8a", // Azul escuro (destaque)
        dark: "#1a1a1a", // Texto principal
      },
      fontFamily: {
        // Define as fontes prioritárias
        sans: ["Inter", "Poppins", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
