const postcssPresetEnv = require("postcss-preset-env");
const postcssGlobalData = require("@csstools/postcss-global-data");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");

module.exports = ({ env }) => {
  const prod = env === "production";

  return {
    plugins: [
      postcssImport(),
      /* nécessaire pour le remplacement des custom-medias */
      postcssGlobalData({
        files: ["./src/common/tokens.css", "./src/common/tokensLF.css"],
      }),
      postcssPresetEnv({
        stage: 3,
        minimumVendorImplementations: 0,
        features: {
          "logical-properties-and-values": false,
          "prefers-color-scheme-query": false,
          "gap-properties": false,
          "custom-properties": false,
          "place-properties": false,
          "not-pseudo-class": false,
          "focus-visible-pseudo-class": false,
          "focus-within-pseudo-class": false,
          "color-functional-notation": false,
          "double-position-gradients": false,
          clamp: false,
          "is-pseudo-class": false,
          "system-ui-font-family": false,
          "nested-calc": false,
          "nesting-rules": false,
          "light-dark-function": false,
          "gap-properties": false,
          "media-query-ranges": false,
          "custom-media-queries": true,
          "custom-selectors": true,
          "blank-pseudo-class": true,
          "relative-color-syntax": true,
        },
      }),
      prod && cssnano,
    ],
  };
};
