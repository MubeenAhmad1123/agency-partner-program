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
        charcoal: '#2C3E50',
        olive: '#6B7455',
        gold: '#FFD700',
        teal: '#14B8A6',
        'off-white': '#F7FAFC',
      },
    },
  },
  plugins: [],
};

export default config;