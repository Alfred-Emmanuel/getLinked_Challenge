/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#D434FE",
        "secondary-color": "#903AFF",
        pink: "#fe34c1",
        "dark-mode-background-color": "#150E28",
        "light-mode-background-color": "gray",
        "light-mode-font-color": "#000",
        "dark-mode-font-color": "#FFF",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".border-gradient": {
            "border-image": "linear-gradient(to right, #ff00cc, #3333ff)",
            "border-image-slice": "1",
            "border-radius": "0.5rem",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
