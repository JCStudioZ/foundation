module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['react-app', 'prettier'],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    "prettier/prettier": "error",
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: ['error', 'never'],
    indent: 0,
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
  },
  globals: {
    __PATH_PREFIX__: true,
    __PREFIX_PATHS__: true,
    graphql: false,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
}
