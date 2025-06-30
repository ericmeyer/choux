const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  clearMocks: true,
  resetMocks: true,
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
};
