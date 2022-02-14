module.exports = {
  clearMocks: true,
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx', 'node'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^@react-native-community\\/async-storage': 'localforage',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^src/(.*)': '<rootDir>/src/$1',
  },
  modulePaths: [],
  setupFiles: ['react-app-polyfill/jsdom'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest-css-transform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
      '<rootDir>/config/jest-file-transform.js',
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
