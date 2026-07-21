import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Chemin racine du projet utilisant le CLI
const projectRoot = process.cwd();
const pluginsSourceDir = path.join(__dirname, '../plugins');
const copilotPluginsDir = path.join(projectRoot, '.copilot-plugins');
const vscodeDir = path.join(projectRoot, '.vscode');
const settingsFile = path.join(vscodeDir, 'settings.json');

/**
 * Get list of available plugins from the package
 */
function getAvailablePlugins() {
  if (!fs.existsSync(pluginsSourceDir)) {
    return [];
  }

  try {
    return fs.readdirSync(pluginsSourceDir).filter((file) => {
      const pluginPath = path.join(pluginsSourceDir, file);
      return (
        fs.statSync(pluginPath).isDirectory() &&
        fs.existsSync(path.join(pluginPath, '.claude-plugin'))
      );
    });
  } catch (error) {
    return [];
  }
}

/**
 * Load current VS Code settings
 */
function loadSettings() {
  if (!fs.existsSync(vscodeDir)) {
    fs.mkdirSync(vscodeDir, { recursive: true });
  }

  if (!fs.existsSync(settingsFile)) {
    return {};
  }

  try {
    const content = fs.readFileSync(settingsFile, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.warn(`Warning: Could not parse ${settingsFile}`);
    return {};
  }
}

/**
 * Save settings to file with proper formatting
 */
function saveSettings(settings) {
  fs.writeFileSync(
    settingsFile,
    JSON.stringify(settings, null, '\t') + '\n',
    'utf-8',
  );
}

/**
 * Get the plugin workspace extensions array
 */
function getPluginExtensions(settings) {
  if (!Array.isArray(settings['github.copilot.workspace.extensions'])) {
    settings['github.copilot.workspace.extensions'] = [];
  }
  return settings['github.copilot.workspace.extensions'];
}

/**
 * Copy directory recursively
 */
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Remove directory recursively
 */
function removeDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      removeDir(fullPath);
    } else {
      fs.unlinkSync(fullPath);
    }
  }

  fs.rmdirSync(dirPath);
}

/**
 * Install a plugin
 */
export async function installPlugin(pluginName) {
  const availablePlugins = getAvailablePlugins();

  if (!availablePlugins.includes(pluginName)) {
    throw new Error(
      `Plugin "${pluginName}" not found.\nAvailable: ${availablePlugins.join(', ') || 'none'}`,
    );
  }

  const srcPath = path.join(pluginsSourceDir, pluginName);
  const destPath = path.join(copilotPluginsDir, pluginName);
  const extensionPath = `file://${destPath}/.claude-plugin`;

  // Load settings
  const settings = loadSettings();
  const extensions = getPluginExtensions(settings);

  // Check if already installed
  if (extensions.includes(extensionPath)) {
    console.log(`✓ Plugin "${pluginName}" is already installed.`);
    return;
  }

  // Copy plugin files
  copyDir(srcPath, destPath);
  extensions.push(extensionPath);
  saveSettings(settings);

  console.log(`✓ Plugin "${pluginName}" installed successfully.`);
  console.log(`  Location: .copilot-plugins/${pluginName}`);
  console.log(`  Please reload VS Code to activate.`);
}

/**
 * Uninstall a plugin
 */
export async function uninstallPlugin(pluginName) {
  const destPath = path.join(copilotPluginsDir, pluginName);
  const extensionPath = `file://${destPath}/.claude-plugin`;

  const settings = loadSettings();
  const extensions = getPluginExtensions(settings);

  const index = extensions.indexOf(extensionPath);
  if (index === -1) {
    console.log(`ℹ Plugin "${pluginName}" is not installed.`);
    return;
  }

  // Remove from settings
  extensions.splice(index, 1);
  saveSettings(settings);

  // Remove plugin directory
  removeDir(destPath);

  console.log(`✓ Plugin "${pluginName}" uninstalled.`);
  console.log(`  Please reload VS Code.`);
}

/**
 * List installed and available plugins
 */
export async function listPlugins() {
  const availablePlugins = getAvailablePlugins();
  const settings = loadSettings();
  const extensions = getPluginExtensions(settings);

  if (availablePlugins.length === 0) {
    console.log('No plugins available.');
    return;
  }

  console.log('\n📦 Available Plugins:\n');

  for (const pluginName of availablePlugins) {
    const destPath = path.join(copilotPluginsDir, pluginName);
    const extensionPath = `file://${destPath}/.claude-plugin`;
    const isInstalled = extensions.includes(extensionPath);

    const status = isInstalled ? '✓ installed' : '○ not installed';

    // Try to read plugin metadata
    try {
      const pluginJsonPath = path.join(
        pluginsSourceDir,
        pluginName,
        '.claude-plugin',
        'plugin.json',
      );
      const pluginJson = JSON.parse(fs.readFileSync(pluginJsonPath, 'utf-8'));
      console.log(`  ${status} — ${pluginName}`);
      if (pluginJson.description) {
        console.log(`         ${pluginJson.description}`);
      }
    } catch {
      console.log(`  ${status} — ${pluginName}`);
    }
  }

  console.log();
}

/**
 * Setup all plugins (install all available)
 */
export async function setupAll() {
  const availablePlugins = getAvailablePlugins();

  if (availablePlugins.length === 0) {
    console.log('No plugins available to install.');
    return;
  }

  console.log(`Setting up ${availablePlugins.length} plugin(s)...\n`);

  for (const pluginName of availablePlugins) {
    try {
      await installPlugin(pluginName);
    } catch (error) {
      console.error(`Error installing ${pluginName}: ${error.message}`);
    }
  }

  console.log(`\n✓ Setup complete. Please reload VS Code.`);
}
