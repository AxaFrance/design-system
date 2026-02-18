const { cssConfig } = require("@axa-fr/postcss-config-design-system");

module.exports = (ctx) => {
  const [universe, env] = ctx.env.split("-");

  const globalFiles = {
    client: "./src/prospect-client/common/tokens.css",
    prospect: "./src/prospect-client/common/tokens.css",
    distributeur: "./src/distributeur/common/tokens.css",
  };

  return cssConfig({ env }, [globalFiles[universe]]);
};
