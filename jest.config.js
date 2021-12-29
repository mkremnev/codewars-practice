const config = {
  verbose: true,
  rootDir: ".",
  coverageDirectory: "coverage",
  transform: {},
  moduleNameMapper: {
    // https://jestjs.io/docs/en/webpack#handling-static-assets
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleDirectories: ["node_modules", "src", "test"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: -85,
    },
  },
};

export default config;
