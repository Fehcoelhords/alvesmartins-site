/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0056b3",
        secondary: "#f4f6f8",
        accent: "#1e3a8a",
        dark: "#1a1a1a",
        "theme-dark": "#0B1E4A",
      },
      fontFamily: {
        // ATUALIZADO: 'font-sans' é para o TEXTO (Inter/Poppins)
        sans: ["Inter", "Poppins", "Roboto", "sans-serif"],
        // NOVO: 'font-heading' é para TÍTULOS (Montserrat)
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
