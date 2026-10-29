import { fixupPluginRules } from "@eslint/compat";
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";
import tsEslint from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import dsConfig from "./ds.config.mjs";

const compatibleReactPlugin = fixupPluginRules(react);
const compatibleImportPlugin = fixupPluginRules(importPlugin);

export default defineConfig([
  {
    plugins: {
      js,
      unicorn,
    },
    extends: [js.configs.recommended],
  },
  {
    ...react.configs.flat.recommended,
    plugins: { react: compatibleReactPlugin },
  },
  {
    ...react.configs.flat["jsx-runtime"],
    plugins: { react: compatibleReactPlugin },
  },
  reactHooks.configs.flat["recommended-latest"],
  eslintPrettierRecommended,
  ...tsEslint.configs.recommended,
  {
    ...importPlugin.flatConfigs.recommended,
    plugins: { import: compatibleImportPlugin },
  },
  jsxA11y.flatConfigs.recommended,
  ...storybook.configs["flat/recommended"],
  ...dsConfig,
  {
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
]);
