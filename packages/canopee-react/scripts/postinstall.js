#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports, no-console */

/**
 * Postinstall script for @axa-fr/canopee-react
 * Automatically installs Canopée Copilot plugins in the consuming project
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Get the directory where npm install was run (the consuming project root)
const projectRoot = process.env.INIT_CWD || process.cwd();

// Get the canopee-react package root directory
// The script is in canopee-react/scripts/, so we go up 1 level
const packageRoot = path.dirname(__dirname);
const pluginsSourceDir = path.join(packageRoot, "dist", "plugins");

// Ensure directories exist
const copilotPluginsDir = path.join(projectRoot, ".copilot-plugins");
const vscodeDir = path.join(projectRoot, ".vscode");
const settingsPath = path.join(vscodeDir, "settings.json");

/**
 * Recursively copy a directory
 */
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);
  files.forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

/**
 * Update .vscode/settings.json with plugin paths
 */
function updateSettings(pluginName) {
  if (!fs.existsSync(vscodeDir)) {
    fs.mkdirSync(vscodeDir, { recursive: true });
  }

  let settings = {};
  if (fs.existsSync(settingsPath)) {
    try {
      settings = JSON.parse(fs.readFileSync(settingsPath, "utf-8"));
    } catch {
      // If the file is invalid JSON, start fresh
      settings = {};
    }
  }

  if (!settings["github.copilot.workspace.extensions"]) {
    settings["github.copilot.workspace.extensions"] = [];
  }

  const pluginAbsPath = path.join(copilotPluginsDir, pluginName);
  const pluginUrl = `file://${pluginAbsPath}`;

  if (!settings["github.copilot.workspace.extensions"].includes(pluginUrl)) {
    settings["github.copilot.workspace.extensions"].push(pluginUrl);
  }

  fs.writeFileSync(settingsPath, `${JSON.stringify(settings, null, 2)}\n`);
}

/**
 * Ask user for confirmation to install plugins (only in interactive terminals)
 * In non-interactive environments (CI/CD), installs automatically
 * Returns true if plugins should be installed, false otherwise
 */
async function askConfirmation() {
  // Check if user wants to skip installation completely
  if (process.env.SKIP_CANOPEE_PLUGINS === "true") {
    return false;
  }

  // In non-interactive environments (CI/CD, GitHub Actions), install automatically
  if (!process.stdin.isTTY) {
    return true;
  }

  // If CANOPEE_PLUGINS_NO_PROMPT is set, install without prompting (used for setup-plugins command)
  if (process.env.CANOPEE_PLUGINS_NO_PROMPT === "true") {
    return true;
  }

  // In interactive terminals, ask for confirmation
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("\n📦 Install Canopée Copilot plugins? (y/n) ", (answer) => {
      rl.close();
      const response = answer.toLowerCase().trim();
      resolve(response === "y" || response === "yes");
    });
  });
}

/**
 * Main installation logic
 */
async function installPlugins() {
  try {
    // Skip if this is the design-system repo itself (not a consuming project)
    // Check if canopee-react is listed as a regular dependency (not devDependency)
    const projectPackageJsonPath = path.join(projectRoot, "package.json");
    if (fs.existsSync(projectPackageJsonPath)) {
      try {
        const projectPackageJson = JSON.parse(
          fs.readFileSync(projectPackageJsonPath, "utf-8"),
        );
        const deps = projectPackageJson.dependencies || {};

        // If @axa-fr/canopee-react is NOT in dependencies, this is likely the design-system repo itself
        if (!("@axa-fr/canopee-react" in deps)) {
          // Design-system repo or consuming project without the dependency - skip silently
          return;
        }
      } catch {
        // If we can't parse package.json, proceed anyway
      }
    }

    // Check if plugins source exists
    if (!fs.existsSync(pluginsSourceDir)) {
      // Plugins not found, which is fine - skip silently
      return;
    }

    // Ask for confirmation
    const shouldInstall = await askConfirmation();
    if (!shouldInstall) {
      console.log("⏭️  Canopée plugins installation skipped");
      return;
    }

    // Create the .copilot-plugins directory
    if (!fs.existsSync(copilotPluginsDir)) {
      fs.mkdirSync(copilotPluginsDir, { recursive: true });
    }

    // Get available plugins
    const pluginDirs = fs.readdirSync(pluginsSourceDir).filter((name) => {
      const fullPath = path.join(pluginsSourceDir, name);
      return fs.statSync(fullPath).isDirectory();
    });

    // Install each plugin
    pluginDirs.forEach((pluginName) => {
      const srcPath = path.join(pluginsSourceDir, pluginName);
      const destPath = path.join(copilotPluginsDir, pluginName);

      // Copy the plugin directory
      copyDir(srcPath, destPath);

      // Update settings
      updateSettings(pluginName, destPath);
    });

    if (pluginDirs.length > 0) {
      console.log(
        `✓ Canopée plugins installed (${pluginDirs.length} plugin${pluginDirs.length > 1 ? "s" : ""})`,
      );
    }
  } catch {
    // Fail silently to not break npm install
    // This ensures the package installation succeeds even if plugin setup fails
  }
}

// Run the installation
installPlugins().catch(() => {
  // Catch any unhandled errors and fail silently
});
