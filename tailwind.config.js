module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    minHeight: {
      '1/2': '50%',
    }
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
}
