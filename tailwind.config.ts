import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./view/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "download-banner": "url('/images/download-banner.png')",
        "gradient-grey":
          "linear-gradient(to left , transparent, #696969 ,transparent)",
      },
      colors: {
        primary: {
          700: "#ff5555",
        },
      },
    },
    fontSize: {
      sm: "0.6rem",
      base: "1rem",
      md: "1.15rem",
      xl: "1.25rem",
      "2xl": "1.7rem",
      "3xl": "2rem",
      "4xl": "3rem",
      "5xl": "4rem",
    },
  },
  plugins: [],
};
export default config;
