module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "@jenniesh/eslint-config-vue3",
    "@vue/typescript/recommended",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
  }
};
