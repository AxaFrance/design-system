const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const postcssPresetEnv = require("postcss-preset-env");
const postcssNormalize = require("postcss-normalize");
const postcssSass = require("@csstools/postcss-sass");
const cssnano = require("cssnano");
const { cpSync, lstatSync } = require("fs");

module.exports = ({ ...ctx }) => {
  const env = ctx.env.split("_")[0];

  const prod = env === "production";

  const isClient = ctx.env.split("_")[1] === "client";
  const isClientCommon = ctx.env.split("_")?.[2] === "common";

  const relativePath = isClient ? "../../../" : "../../";

  return {
    parser: "postcss-scss",
    plugins: [
      () => {
        if (!isClientCommon) {
          return;
        }
        cpSync(
          `${relativePath}client/common/css/src`,
          `${relativePath}client/apollo/css/src/common`,
          {
            recursive: true,
            filter(source) {
              const regex = /^.+(s?css)$/;
              return lstatSync(source).isDirectory() || regex.test(source);
            },
          },
        );

        cpSync(
          `${relativePath}client/common/css/src`,
          `${relativePath}client/look-and-feel/css/src/common`,
          {
            recursive: true,
            filter(source) {
              const regex = /^.+(s?css)$/;
              return lstatSync(source).isDirectory() || regex.test(source);
            },
          },
        );
        return {
          postcssPlugin: "Copy common client file",
        };
      },
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

        cpSync(`${relativePath}common/glyphicons/`, "dist/common/glyphicons/", {
          recursive: true,
        });

        cpSync(`${relativePath}common/assets/`, "dist/common/assets/", {
          recursive: true,
        });

        return {
          postcssPlugin: "Copy file",
        };
      },
    ].filter(Boolean),
  };
};
