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
        cream: '#F0EDE4',
        dark: '#07070A',
        green: { DEFAULT: '#1B4D2F', mid: '#2E7D4F', light: '#52C97A' },
        grey: '#7A7870',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
