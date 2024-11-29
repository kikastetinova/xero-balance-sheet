const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.test.ts'],
  moduleDirectories: ['node_modules'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default config;
