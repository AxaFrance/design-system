#!/usr/bin/env node
const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const { Command, Argument } = require('commander');

const projectRoot = resolve(__dirname, '..');

const dsPackages = {
  slash: resolve(projectRoot, 'slash'),
  apollo: resolve(projectRoot, 'client/apollo'),
  "look-and-feel": resolve(projectRoot, 'client/look-and-feel'),
}

let dsName = '';

const cli = new Command('pre-publish');
cli
  .addArgument(new Argument('<ds-name>', 'The name of the design system package').choices(Object.keys(dsPackages)))
  .action((name) => {
    dsName = name;
  })
  .parse(process.argv);

['css', 'react'].forEach((packageType) => {
  const packageJsonPath = resolve(dsPackages[dsName], packageType, 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

  const packageExports = packageJson.exports ?? {};

  Object.keys(packageExports).forEach((key) => {
    if (typeof packageExports[key] !== 'object') {
      return;
    }

    delete packageExports[key].development;
  })

  packageJson.exports = packageExports;

  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), { encoding: 'utf-8' });
});
