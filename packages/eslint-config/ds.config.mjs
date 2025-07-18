import globals from "globals";

export default [
  {
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
        ...globals.vitest,
      },
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
    ignores: ["!.storybook"],
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
      "react/jsx-no-leaked-render": [
        "error",
        { validStrategies: ["ternary", "coerce"] },
      ],

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
