import bestPractices from "eslint-config-airbnb-base/rules/best-practices";
import errors from "eslint-config-airbnb-base/rules/errors";
import node from "eslint-config-airbnb-base/rules/node";
import style from "eslint-config-airbnb-base/rules/style";
import variables from "eslint-config-airbnb-base/rules/variables";
import es6 from "eslint-config-airbnb-base/rules/es6";
import imports from "eslint-config-airbnb-base/rules/imports";
import strict from "eslint-config-airbnb-base/rules/strict";
import react from "eslint-config-airbnb/rules/react";
import reactA11y from "eslint-config-airbnb/rules/react-a11y";
import reactHooks from "eslint-config-airbnb/rules/react-hooks";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactA11yPlugin from "eslint-plugin-jsx-a11y";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import storybookPlugin from "eslint-plugin-storybook";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tsEslint from "typescript-eslint";
import globals from "globals";

export default [
  {
    plugins: {
      import: importPlugin,
      "jsx-a11y": reactA11yPlugin,
      "react-hooks": reactHooksPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          generators: false,
          objectLiteralDuplicateProperties: false,
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
    },
    rules: {
      ...bestPractices.rules,
      ...errors.rules,
      ...node.rules,
      ...style.rules,
      ...variables.rules,
      ...es6.rules,
      ...imports.rules,
      ...strict.rules,
      ...react.rules,
      ...reactA11y.rules,
      ...reactHooks.rules,
    },
    settings: {
      ...imports.settings,
      ...react.settings,
    },
  },
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  eslintPluginPrettierRecommended,
  ...tsEslint.configs.recommended,
  ...storybookPlugin.configs["flat/recommended"],
  {
    ignores: ["!.storybook"],
  },
  {
    rules: {
      // eslint
      "no-plusplus": [
        "error",
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
      "no-implicit-coercion": ["error", { boolean: true }],

      // eslint-plugin-import https://github.com/import-js/eslint-plugin-import
      "import/prefer-default-export": "off",
      "import/no-default-export": "error",
      "import/extensions": [
        "off",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
          js: "never",
        },
      ],
      "import/no-unresolved": [
        "error",
        { ignore: ["@axa-fr\\/design-system-"] },
      ],

      // eslint-plugin-react https://github.com/jsx-eslint/eslint-plugin-react
      "react/no-multi-comp": [
        "error",
        {
          ignoreStateless: false,
        },
      ],
      "react/jsx-filename-extension": [
        "error",
        {
          extensions: [".tsx"],
        },
      ],
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: ["arrow-function"],
          unnamedComponents: ["arrow-function"],
        },
      ],
      "react/require-default-props": "off",

      // eslint-plugin-react-hooks https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
      "react-hooks/exhaustive-deps": "warn",

      // typescript-eslint/typescript-eslint https://github.com/typescript-eslint/typescript-eslint
      // Add TypeScript specific rules (and turn off ESLint equivalents)
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "error",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "error",
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": "error",
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "error",

      "@typescript-eslint/consistent-type-assertions": "warn",

      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/.storybook/**/*.*",
            "**/*.stories.tsx",
            "**/*.stories.ts",
            "**/*.test.tsx",
            "**/*.spec.tsx",
            "**/vitest.setup.ts",
            "**/vitest.config.ts",
            "**/vite.config.ts",
          ],
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: true,
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
  {
    files: [
      "**/*.stories.{js,jsx,ts,tsx}",
      "**/vitest.config.ts",
      "**/.storybook/*.ts",
    ],
    rules: {
      "import/no-default-export": "off",
      "import/no-unresolved": [
        "error",
        {
          ignore: [".svg"],
        },
      ],
    },
  },
  {
    files: ["**/*.{stories,test,spec}.{js,jsx,ts,tsx}"],
    rules: {
      "import/no-extraneous-dependencies": "off",
    },
  },
  {
    files: ["**/*.config.{js,jsx,ts,tsx,mjs,cjs,cts,mts}"],
    rules: {
      "import/no-extraneous-dependencies": "off",
      "import/no-default-export": "off",
    },
  },
];
