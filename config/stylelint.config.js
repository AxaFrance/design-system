module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
    "stylelint-config-pretty-order",
  ],
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "import-notation": "string",
    "at-rule-empty-line-before": null,
    "scss/operator-no-newline-after": null,
    "color-function-notation": ["legacy"],
    "property-no-vendor-prefix": null,

    "selector-class-pattern": [
      // official bem regex
      // "^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$",
      "^[a-z]([-]?[a-z0-9]+)*((__|--)[a-z0-9]([-]?[a-zA-Z0-9]+)*)?(--[a-z0-9]([-]?[a-zA-Z0-9]+)*)?$",
      {
        resolveNestedSelectors: true,
        message: (selectorValue) =>
          `Expected class selector "${selectorValue.trim()}" to match BEM CSS pattern https://en.bem.info/methodology/css.`,
      },
    ],

    "font-family-no-missing-generic-family-keyword": [
      true,
      {
        ignoreFontFamilies: ["icons"],
      },
    ],

    "scss/at-extend-no-missing-placeholder": null,
  },
};
