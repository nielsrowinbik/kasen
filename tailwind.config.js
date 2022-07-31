const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  plugins: [
    require('@tailwindcss/typography'),
    // Add `:empty` variant:
    plugin(({ addVariant, e }) => {
      addVariant('empty', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`empty${separator}${className}`)}:empty`;
        });
      });
    }),
    // Add utility to capitalise the first letter:
    plugin(({ addUtilities }) => {
      addUtilities({
        '.capitalize-first:first-letter': {
          textTransform: 'uppercase',
        },
      });
    }),
    plugin(({ addVariant, e }) => {
      addVariant('selection', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`selection${separator}${className}`)}::selection`;
        });
      });
    }),
  ],
  theme: {
    extend: {
      boxShadow: {
        huge: '0 52px 74px rgb(0 21 64 / 14%)',
      },
      fontFamily: {
        // sans: ['Biotif', ...defaultTheme.fontFamily.sans],
        playfair: ['Playfair Display', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
};
