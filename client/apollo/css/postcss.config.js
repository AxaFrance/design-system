const { cssConfig } = require("@axa-fr/postcss-config-design-system");

module.exports = ({ env }) => {
  return cssConfig({ env }, [
    "./src/common/tokens.css",
    "./src/common/tokensLF.css",
  ]);
};
