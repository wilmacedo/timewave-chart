import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "show-box": "show 1s ease-out forwards",
      },
      keyframes: {
        show: {
          "0%": {
            transform: "none",
          },
          "100%": {
            transform: "translate(-5px, 5px)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
