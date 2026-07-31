import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f5f1',
          100: '#dce8df',
          200: '#bcd0c2',
          300: '#8fae98',
          400: '#5f8468',
          500: '#3d6a48',
          600: '#2c5236',
          700: '#1E4D2B',
          800: '#173d22',
          900: '#0f2a16',
        },
        gold: {
          50: '#fdf9ee',
          100: '#f9efcf',
          200: '#f2dd9a',
          300: '#e9c463',
          400: '#dcae4a',
          500: '#C89B3C',
          600: '#b07f2c',
          700: '#8f6124',
          800: '#774e24',
          900: '#664121',
        },
        cream: {
          DEFAULT: '#F9F6EF',
          50: '#fefdf9',
          100: '#F9F6EF',
          200: '#f3eee0',
          300: '#E8DDCB',
          400: '#d9c9ad',
          500: '#c5b18c',
          600: '#a9956f',
          700: '#877656',
          800: '#6b5d44',
          900: '#4d4230',
        },
        bissap: {
          400: '#a51e3a',
          500: '#8C1D2C',
          600: '#730f26',
          700: '#5a0b1d',
        },
        tamarin: {
          400: '#a07040',
          500: '#8B5A2B',
          600: '#704820',
          700: '#573319',
        },
        gingembre: {
          400: '#5a9e5a',
          500: '#3C7D3C',
          600: '#2d6030',
          700: '#1e4520',
        },
        baobab: {
          400: '#d9c9aa',
          500: '#CDB38B',
          600: '#b89870',
          700: '#9a7d55',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        logo: ['var(--font-logo)', 'cursive'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}

export default config
