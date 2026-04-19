import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6",
        secondary: "#ec4899"
      }
    }
  },
  plugins: []
};

export default config;
