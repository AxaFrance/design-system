#!/usr/bin/env node

import { program } from 'commander';
import {
  installPlugin,
  uninstallPlugin,
  listPlugins,
  setupAll,
} from '../cli/index.js';

program
  .name('copilot-plugin')
  .description('Manage GitHub Copilot plugins for Canopée Design System')
  .version('0.1.0');

program
  .command('install <plugin>')
  .description('Install a plugin in .copilot-plugins/')
  .action((plugin) => {
    installPlugin(plugin).catch((err) => {
      console.error(`❌ Error: ${err.message}`);
      process.exit(1);
    });
  });

program
  .command('uninstall <plugin>')
  .description('Remove a plugin from .copilot-plugins/')
  .action((plugin) => {
    uninstallPlugin(plugin).catch((err) => {
      console.error(`❌ Error: ${err.message}`);
      process.exit(1);
    });
  });

program
  .command('list')
  .description('List available plugins')
  .action(() => {
    listPlugins().catch((err) => {
      console.error(`❌ Error: ${err.message}`);
      process.exit(1);
    });
  });

program
  .command('setup-all')
  .description('Install all available plugins')
  .action(() => {
    setupAll().catch((err) => {
      console.error(`❌ Error: ${err.message}`);
      process.exit(1);
    });
  });

program.parse();
