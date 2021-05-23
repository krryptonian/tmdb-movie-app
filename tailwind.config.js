module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontWeight: {
      thin: 100,
      'extra-light': 200,
      light: 300,
      normal: 400,
      medium: 500,
      'semi-bold': 600,
      bold: 700,
      'extra-bold': 800,
      black: 900,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
