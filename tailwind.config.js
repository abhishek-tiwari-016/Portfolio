module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        heading: 'var(--color-heading)',
        text: 'var(--color-text)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
};