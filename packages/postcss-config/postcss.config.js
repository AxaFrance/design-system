const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const postcssPresetEnv = require("postcss-preset-env");
const postcssNormalize = require("postcss-normalize");
const postcssSass = require("@csstools/postcss-sass");
const postcssGlobalData = require("@csstools/postcss-global-data");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");

exports.sassConfig = ({ env }) => {
  const prod = env === "production";

  return {
    parser: "postcss-scss",
    plugins: [
      postcssSass,
      postcssFlexbugsFixes,
      postcssPresetEnv({
        stage: 4,
      }),
      postcssNormalize,
      prod && cssnano,
    ],
  };
};

exports.cssConfig = ({ env }, globalFiles) => {
  const prod = env === "production";
  return {
    plugins: [
      postcssImport(),
      /* nécessaire pour le remplacement des custom-medias */
      postcssGlobalData({
        files: globalFiles,
      }),
      postcssPresetEnv({
        stage: 4,
        minimumVendorImplementations: 2,
        features: {
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
