import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#213547",
        mint: "#2fbf9f",
        peach: "#ff8f70",
        lemon: "#ffd166",
        skysoft: "#eaf7ff"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(33, 53, 71, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
