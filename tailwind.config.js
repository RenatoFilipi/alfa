module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gg: '#76888d',
        ggb: '#768886',
      },
      fontFamily: {
        dm: "'DM Mono', serif",
        pp: "'Poppins', sans-serif",
        ail: "'Aileron', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
