/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#D434FE",
        "secondary-color": "#903AFF",
        "dark-mode-background-color": "#150E28",
        "light-mode-background-color": "gray",
        "light-mode-font-color": "#000",
        "dark-mode-font-color": "#FFF",
      },
    },
  },
  plugins: [],
};
