module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePaths: ['<rootDir>/src'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.module\\.scss$': 'identity-obj-proxy',
    '\\.(scss|sass|css)$': 'jest-css-modules-transform',
    'react-markdown': '<rootDir>/src/mocks/react-markdown.mock.tsx'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}