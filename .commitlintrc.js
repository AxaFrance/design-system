/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ["@commitlint/config-conventional"],
  ignores: [commit => /release/.test(commit)],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'design-system',
        'look&feel',
        'slash',
        'apollo',
        'deps',
        'deps-dev',
        'release',
      ],
    ],
  },
};

module.exports = config;
