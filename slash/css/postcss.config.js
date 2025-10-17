const postcssPresetEnv = require("postcss-preset-env");
const postcssGlobalData = require("@csstools/postcss-global-data");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");
const defaultConfig = require("@axa-fr/postcss-config-design-system");
const postcssSass = require("@csstools/postcss-sass");

module.exports = (param) => {
  const prod = param.env === "production";
  return {
    plugins: [
      postcssImport(),
      /* nécessaire pour le remplacement des custom-medias */
      postcssGlobalData({
        files: ["./src/common/tokens.css"],
      }),
      postcssPresetEnv({
        stage: 4,
        minimumVendorImplementations: 2,
        features: {
          "custom-media-queries": true,
        },
      }),
      prod && cssnano,
    ],
  };
};
