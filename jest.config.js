module.exports = {
  preset: "react-native",
  coverageProvider: "v8",
  collectCoverage: true,
  coverageDirectory: "./coverage", // not neccessary but will create once with default name coverage
  setupFilesAfterEnv: ["<rootDir>/__setup__/enzyme.js"],
};
