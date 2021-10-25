module.exports = {
  purge: ["./public/**/*.html","./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily: {
        'sans': ['Roboto','ui-sans-serif', 'system-ui']
      },

    },
  },
  variants: {
    transitionProperty: ['hover','responsive', 'motion-safe', 'motion-reduce'],
    extend: {
      animation: ['hover', 'focus'],
      blur: ['hover', 'focus'],
    },
  },
  plugins: [],
}
