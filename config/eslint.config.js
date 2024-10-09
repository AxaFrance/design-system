module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // eslint
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],

    // eslint-plugin-import https://github.com/import-js/eslint-plugin-import
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
      },
    ],
    "import/no-unresolved": [
      "error",
      { ignore: ["@axa-fr\\/design-system-css(.*)\\.(scss|css|svg)"] },
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
  overrides: [
    {
      files: ["**/*.stories.ts?(x)", "**/vitest.config.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
