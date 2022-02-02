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
      // backgroundImage: {
      //   'hero-a': "url('/assets/images/herobg.jpg')",
      //   'hero-b': "url('/assets/images/herobg2.jpeg')",
      // },
      fontFamily: {
        dm: "'DM Mono', serif",
        pp: "'Poppins', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
