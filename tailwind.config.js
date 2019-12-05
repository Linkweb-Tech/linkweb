// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      bleu: '#37c5ee',
      white: '#ffffff',
      black: '#000000',
      grey: '#7b7b7b',
      darkgrey: "#3e3e3e",
      gris: "#f2f2f2",
      light: "#e7f7ff",
      bleusav: "#068FAC",
      vert: "#39ac4a",
      orange: "#ee8a1e",
      rouge:"#b71c30",
      or:"#d0a104",
      ledil:"#233951",
      csd:"#aace57",
      csd1:"#5a4d46"
    },
    borderRadius: {
      'large': '1rem',
      'huge': '2rem'
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '400': '400px',
      '600': '600px',
      'full': '100%',
    }
  },
  variants: {},
  plugins: []
};
