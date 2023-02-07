/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'never'],
    'no-use-before-define': ['error', { functions: true, classes: true }],
    'prettier/prettier': 2,
    'no-console': 0,
    'no-var': 'error',
    'prefer-const': 'error'
  }
}
