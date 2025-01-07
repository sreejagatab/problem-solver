module.exports = {
    testEnvironment: 'node',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageReporters: ['text', 'lcov'],
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    setupFiles: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    }
  };