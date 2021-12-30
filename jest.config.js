module.exports = {
  verbose: true,
  rootDir: ".",
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  "moduleFileExtensions": ["js"],
  moduleNameMapper: {
    // https://jestjs.io/docs/en/webpack#handling-static-assets
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleDirectories: ["node_modules", "src", "test"],
  testRegex: "((\\.|/*.)(test))\\.js?$",
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: -85,
    },
  },
};
