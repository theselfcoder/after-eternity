import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'eternity-black': '#050505',
        'eternity-dark': '#0a0a0a',
        'blood-red': '#4a0404',
        'crimson': '#8a0000',
        'bright-red': '#ff1a1a'
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Manrope', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};

export default config;
