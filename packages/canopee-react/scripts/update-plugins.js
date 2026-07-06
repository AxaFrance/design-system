#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports, no-console */

/**
 * Update script for @axa-fr/canopee-react plugins
 * Updates Canopée Copilot plugins in the consuming project
 * Run this after updating @axa-fr/canopee-react to get the latest plugin versions
 */

const fs = require("fs");
const path = require("path");

// Get the directory where the command was run (the consuming project root)
const projectRoot = process.cwd();

// Get the canopee-react package root directory
// This script is in node_modules/@axa-fr/canopee-react/scripts/, so we need to find the package root
const packageRoot = path.join(__dirname, "..");

// Skip if we're in the design-system repository itself
if (
  projectRoot.includes("design-system") &&
  packageRoot.includes("canopee-react")
) {
  console.log(
    "ℹ️  This command should be run in projects that consume canopee-react, not in the design-system repository",
  );
  process.exit(0);
}

const pluginsSourceDir = path.join(packageRoot, "dist", "plugins");

// Ensure directories exist
const copilotPluginsDir = path.join(projectRoot, ".copilot-plugins");
const vscodeDir = path.join(projectRoot, ".vscode");
const settingsPath = path.join(vscodeDir, "settings.json");

/**
 * Recursively copy a directory, replacing existing files
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
 * Main update logic
 */
function updatePlugins() {
  try {
    // Check if plugins source exists
    if (!fs.existsSync(pluginsSourceDir)) {
      console.log("⚠️  Canopée plugins not found in package");
      return;
    }

    // Check if plugins directory exists in project
    if (!fs.existsSync(copilotPluginsDir)) {
      console.log(
        "ℹ️  No plugins directory found. Run 'npm install' or 'npm run setup-plugins' first",
      );
      return;
    }

    // Get available plugins
    const pluginDirs = fs.readdirSync(pluginsSourceDir).filter((name) => {
      const fullPath = path.join(pluginsSourceDir, name);
      return fs.statSync(fullPath).isDirectory();
    });

    if (pluginDirs.length === 0) {
      console.log("⚠️  No plugins found to update");
      return;
    }

    // Update each plugin
    pluginDirs.forEach((pluginName) => {
      const srcPath = path.join(pluginsSourceDir, pluginName);
      const destPath = path.join(copilotPluginsDir, pluginName);

      // Remove old plugin directory to ensure clean update
      if (fs.existsSync(destPath)) {
        fs.rmSync(destPath, { recursive: true, force: true });
      }

      // Copy the plugin directory
      copyDir(srcPath, destPath);

      // Update settings
      updateSettings(pluginName, destPath);
    });

    console.log(
      `✓ Canopée plugins updated (${pluginDirs.length} plugin${pluginDirs.length > 1 ? "s" : ""})`,
    );
  } catch (error) {
    console.error("✗ Error updating plugins:", error.message);
    process.exit(1);
  }
}

updatePlugins();
