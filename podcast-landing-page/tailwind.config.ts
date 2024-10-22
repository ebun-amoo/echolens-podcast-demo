import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main_orange: "#FF6D00",
        main_black: "#020D19",
        accent_white: "#FFFFF0",
        accent_gray: "#676767"
      },
    },
  },
  plugins: [],
};
export default config;
