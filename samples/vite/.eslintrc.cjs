/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
module.exports = {
  extends: "@axa-fr/eslint-config-design-system",
  rules: {
    "no-console": "off",
    "import/no-default-export": "off",
  },
};
