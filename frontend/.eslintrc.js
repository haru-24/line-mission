module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "prettier",
  ],
  plugins: [],

  rules: {
    "vue/prop-name-casing": ["error", "camelCase" | "snake_case"],
  },
};
