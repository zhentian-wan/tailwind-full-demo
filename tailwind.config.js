module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // what inside extend will extend default tailwind config
    // what outside extend will override default tailwind config completely
    extend: {
      colors: {
        "brand-blue": "#1992d4",
      },
      spacing: {
        72: "18rem",
      },
    },
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
