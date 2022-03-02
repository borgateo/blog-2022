module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
    fontSize: {
      'xs': '1.4rem',
      'base': '1.95rem',
      'lg': '2.225rem',
      'xl': '2.25rem',
      '2xl': '2.5rem',
      '3xl': '2.875rem',
      '4xl': '3.25rem',
      '5xl': '4rem',
      '6xl': '5rem',
      '7xl': '6rem',
    },
    fontFamily: {
      'serif': ['freight-text-pro', 'ui-serif', 'Georgia']
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
