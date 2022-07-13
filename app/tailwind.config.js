module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#59B1DE",
        },
        pink: {
          200: "#F8ACA1",
          500: "#C43B49",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
