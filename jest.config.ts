// /** @type {import('ts-jest').JestConfigWithTsJest} */
// export default {
//   preset: 'ts-jest',
//   testEnvironment: 'jest-environment-jsdom',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   moduleNameMapper: {
//     '\\.(scss|sass|css)$': 'identity-obj-proxy'
//   }
// };

import nextJest from 'next/jest.js';

import type { Config } from 'jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
