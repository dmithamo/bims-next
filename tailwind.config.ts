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
        fgcolor: "rgb(var(--foreground-rgb))",
        fgcolor2: "rgb(var(--foreground-clear-rgb))",
        bgcolor: "rgb(var(--background-start-rgb))",
        bgcolor2: "rgb(var(--background-end-rgb))",
        accent: "rgb(var(--accent-rgb))"
      },
      fontSize: {
        base: ['0.90rem', { lineHeight: '1.5rem' }],
      },
    },
  },
  plugins: [],
};
export default config;
