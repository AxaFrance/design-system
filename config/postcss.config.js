const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const postcssPresetEnv = require("postcss-preset-env");
const postcssNormalize = require("postcss-normalize");
const postcssSass = require("@csstools/postcss-sass");
const cssnano = require("cssnano");
const { cpSync, lstatSync } = require("fs");

module.exports = ({ env }) => {
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
      () => {
        cpSync("src/", "dist/", {
          recursive: true,
          filter(source) {
            const regex = /^.+(s?css)$/;
            return lstatSync(source).isDirectory() || regex.test(source);
          },
        });

        return {
          postcssPlugin: "Copy file",
        };
      },
    ].filter(Boolean),
  };
};
