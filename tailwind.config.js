module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    // for example you want to enable hover for the fontsize, normally you won't do that just an example
    // hover:text-2xl
    // fontSize: ['responsive', 'hover'],
    extend: {},
  },
  plugins: [],
};
