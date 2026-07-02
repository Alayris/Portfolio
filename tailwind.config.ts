import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      "#faffe6",
        title:   "#3b0001",
        body:    "#6d76e8",
        muted:   "#8f97ee",
        // legacy aliases
        cream:   "#faffe6",
        charcoal:"#faffe6",
        accent:  "#3b0001",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
