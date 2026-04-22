const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const postcssPresetEnv = require("postcss-preset-env");
const postcssNormalize = require("postcss-normalize");
const postcssSass = require("@csstools/postcss-sass");
const postcssGlobalData = require("@csstools/postcss-global-data");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");

const cssConfig = ({ env }, globalFiles) => {
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

module.exports = (ctx) => {
  const [universe, env] = ctx.env.split("-");

  const globalFiles = {
    client: "./src/prospect-client/common/tokens.css",
    prospect: "./src/prospect-client/common/tokens.css",
    distributeur: "./src/distributeur/common/tokens.css",
  };

  return cssConfig({ env }, [globalFiles[universe]]);
};
