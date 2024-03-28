const newLine = "\n";

const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};
${newLine}
${variables.interfaces};
${newLine}
const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
${newLine}
export { ${variables.componentName} };
`;
};

module.exports = template;
