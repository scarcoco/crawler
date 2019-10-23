module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  // https://github.com/benmosher/eslint-plugin-import#resolvers
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      }
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'no-console': 0,

    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    'indent': ['error', 2],
    '@typescript-eslint/indent': ['error', 2],

    'quotes': ['error', 'single'],
    '@typescript-eslint/quotes': ['error', 'single'],

    'import/prefer-default-export': 0
  },
};
