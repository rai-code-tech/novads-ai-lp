module.exports = {
  mode: "jit",
  content: [
    "./app/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      fontFamily: { poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #ffffff1e,#ffffff0a,#ffffff11)",
        gradient1: "linear-gradient(90deg, #5919c600,#5919c6,#5919c600)",
        gradient2: "linear-gradient(180deg, #ffffff,#999999)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
