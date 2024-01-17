export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  rootDir: "./src",
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer", // use this pkg to transform .svg files that are NOT components
    "^.+\\.(css|less|scss)$": "identity-obj-proxy", // use this pkg to transform .css|.scss|...etc files
  },
};
