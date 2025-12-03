/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => /release/.test(commit)],
  rules: {
    'scope-empty': [2, 'never'],
    'scope-enum': [
      2,
      'always',
      [
        'design-system',
        'canopee',
        'prospect',
        'client',
        'distributeur',
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
