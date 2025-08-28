import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Habilita el modo oscuro usando la clase 'dark'
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
