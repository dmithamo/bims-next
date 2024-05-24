import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fgcolor: 'rgb(var(--foreground-rgb))',
        fgcolor2: 'rgb(var(--foreground-clear-rgb))',
        bgcolor: 'rgb(var(--primary-bg-rgb))',
        bgcolor2: 'rgb(var(--secondary-bg-rgb))',
        accent: 'rgb(var(--accent-rgb))',
      },
      fontSize: {
        base: ['0.80rem', { lineHeight: '1.5rem' }],
      },
    },
  },
  plugins: [],
};
export default config;
