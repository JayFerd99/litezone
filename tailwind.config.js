module.exports = {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#468EF9",
        secondary: "#0C66EE",
        blue: "#2F7CF0",
        black: "#3F3D56",
        gray: "#666666",
        lightgray: "#DDDDDD",
        green: "#28C165",
        red: "#F4574D",
        mood: "#F50057",
        white: "#ffff",
        yellow: "#F0FE0F",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
