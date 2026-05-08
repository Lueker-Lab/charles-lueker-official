/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tan: {
          50: '#faf8f5',
          100: '#f5f1eb',
          200: '#e8dfd0',
          300: '#d9c9b0',
          400: '#c9b090',
          500: '#b89670',
          600: '#a07c55',
          700: '#826340',
          800: '#654d32',
          900: '#4a3824',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}
