module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json'],
  rootDir: 'src',
  testRegex: '.spec.js$',
  coverageDirectory: '../coverage',
  globals: {
    __DEV__: true,
  },
};
