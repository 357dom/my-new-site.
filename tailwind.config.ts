import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rr-black': '#0a0a0a',
        'rr-white': '#FFFFFF',
        'rr-gray': '#999999',
        'rr-dark-gray': '#1c1c1c'
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.625rem', // 10px
      },
      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  plugins: [],
}
export default config
