const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  semi: true,
  trailingComma: 'es5',
  bracketSpacing: true,
};
