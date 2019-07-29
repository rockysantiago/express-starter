module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-undef': 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': 1,
    'no-empty': 0,
    'no-useless-escape': 1,
    'no-fallthrough': 1,
    'no-extra-boolean-cast': 1,
  },
};
