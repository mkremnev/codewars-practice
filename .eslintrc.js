module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  plugins: ['prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
  },
};
