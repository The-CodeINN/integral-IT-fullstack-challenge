/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        "3xl": "1900px",
      },
      colors: {
        primary_red: "#F53838",
        primary_black: "#0B132A",
        secondary_black: "#4F5665",
        secondary_red: "#FFECEC",
        primary_gray: "#EEEFF2",
        primary_green: "#2FAB73",
        primary_bg_gray: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
