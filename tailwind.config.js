module.exports = {
  mode: "jit",
  content: [
    "./app/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#080808", "900_01": "#000000" },
        blue_gray: { 100: "#d9d9d9", "100_14": "#d9d9d914" },
        deep_purple: {
          600: "#5919c6",
          900: "#2c0077",
          "600_00": "#5919c600",
          "900_19": "#2c007719",
          "900_28": "#2c007728",
          "900_51": "#2c007751",
          a200: "#7f35ff",
          a200_00: "#8035ff00",
          a400: "#5f1aff",
        },
        gray: { 100: "#f6f6f6", 500: "#999999", 900: "#1b1b1b" },
        white: {
          a700: "#ffffff",
          a700_0a: "#ffffff0a",
          a700_0c: "#ffffff0c",
          a700_11: "#ffffff11",
          a700_19: "#ffffff19",
          a700_1e: "#ffffff1e",
          a700_28: "#ffffff28",
          a700_4c: "#ffffff4c",
          a700_7f: "#ffffff7f",
          a700_cc: "#ffffffcc",
        },
      },
      boxShadow: {},
      fontFamily: { antonio: "Antonio", kontora: "Kontora" },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #ffffff1e,#ffffff0a,#ffffff11)",
        gradient1: "linear-gradient(90deg, #5919c600,#5919c6,#5919c600)",
        gradient2: "linear-gradient(180deg, #ffffff,#999999)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
