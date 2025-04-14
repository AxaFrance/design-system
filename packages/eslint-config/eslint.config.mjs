import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";
import tsEslint from "typescript-eslint";
import airbnbLegacyConfig from "./airbnb.legacy.config.mjs";
import dsConfig from "./ds.config.mjs";

export default defineConfig([
  {
    plugins: {
      js,
    },
    extends: [js.configs.recommended],
  },
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs["recommended-latest"],
  eslintPrettierRecommended,
  ...tsEslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  jsxA11y.flatConfigs.recommended,
  ...storybook.configs["flat/recommended"],
  ...airbnbLegacyConfig,
  ...dsConfig,
]);
