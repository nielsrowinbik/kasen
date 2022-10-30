const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  i18n: {
    defaultLocale: 'nl',
    locales: ['en', 'nl', 'se'],
  },
});
