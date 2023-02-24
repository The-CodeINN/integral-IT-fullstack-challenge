module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontFamily: {
      primary: ["BRFirma", "regular"],
    },
    container: {
      padding: {
        DEFAULT: "30px",
        "2xl": "0px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "3xl": "1720px",
    },
    extend: {
      colors: {
        primary: "#2F2F2F",
        secondary: "#6C757D",
        variant: "#372AA4",
      },
      animation: {
        fadeIn: "fadeIn 500ms ease 1",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
