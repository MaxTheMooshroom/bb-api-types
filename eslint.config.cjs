const js = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'typescript-eslint': tseslint.plugin,
    },
    rules: {
      'typescript-eslint/semi': ['error', 'always'],
    },
  },
];