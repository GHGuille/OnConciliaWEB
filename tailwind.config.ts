import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        navy: "#0F1F3D",
        "navy-light": "#1a3260",
        brand: "#2563EB",
        "brand-hover": "#1d4ed8",
        accent: "#34D399",
      },
    },
  },
  plugins: [],
};
export default config;
