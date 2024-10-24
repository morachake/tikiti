module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1a1b3a',
          900: '#0f1033',
        }
      }
    },
  },
  plugins: [],
}