module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.ts', '!src/**/*.module.ts', '!src/**/*.mock.ts']
  };
  