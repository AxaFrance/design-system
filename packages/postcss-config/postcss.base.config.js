const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const postcssPresetEnv = require("postcss-preset-env");
const postcssNormalize = require("postcss-normalize");
const postcssSass = require("@csstools/postcss-sass");

module.exports = {
  parser: "postcss-scss",
  plugins: [
    postcssSass,
    postcssFlexbugsFixes,
    postcssPresetEnv({
      stage: 4,
    }),
    postcssNormalize,
  ],
};
