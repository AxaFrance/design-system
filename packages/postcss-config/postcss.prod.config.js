const cssnano = require("cssnano");
const configBase = require("./postcss.base.config");

module.exports = {
  ...configBase,
  plugins: [
    ...configBase.plugins,
    cssnano,
  ],
};
