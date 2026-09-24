/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#af0d28',
        'brand-red-dark': '#8a0a20',
        'brand-red-tint': '#e04553',
        'brand-black': '#221b1d',
        'brand-black-soft': '#2d2527',
        'brand-gray': '#6b6568',
        'brand-cream': '#faf8f6',
        'brand-line': '#e7e2e3',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Futura', 'Century Gothic', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.18s ease-out forwards',
      },
    },
  },
  plugins: [
    // `on-dark:` applies when an ancestor carries the `on-dark` class (dark and red sections).
    plugin(function ({ addVariant }) {
      addVariant('on-dark', '.on-dark &')
    }),
  ],
}
