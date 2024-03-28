// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

function defaultIndexTemplate(filePaths) {
  const entries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    const lazyLine = `${exportName}: lazy(async () => import("./${basename}").then((module) => ({ default: module.Svg${basename} }))),`;
    return { lazyLine };
  });
  return `import { lazy } from "react";
  
  export const icons = {
  ${entries.map(({ lazyLine }) => lazyLine).join("\n")}
  };
`;
}

module.exports = defaultIndexTemplate;
