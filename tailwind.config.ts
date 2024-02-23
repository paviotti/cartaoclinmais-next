import type { Config } from "tailwindcss";

const config: Config = {
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
        blue: " #296CA6",
        green1: "#04BFBF",
        green2: "#038C8C",
        orange1: "#F2600C",
        orange2: "#F29472",
        backg: "#F0F0EE",
        branco1: "#FFFFFE",
        branco2: "#FFFCF7",
      },
    },
  },
  plugins: [],
};
export default config;
