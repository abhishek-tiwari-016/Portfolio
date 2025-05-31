module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //  abhi: [ "'Rubik Black'", "sans-serif"],
      // },
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        heading: 'var(--color-heading)',
        text: 'var(--color-text)',
        accent: 'var(--color-accent)',
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};