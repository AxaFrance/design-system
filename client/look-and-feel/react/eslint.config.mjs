import config from "@axa-fr/eslint-config-design-system";

export default [
  ...config,
  {
    rules: {
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true,
        },
      ],
    },
  },
];
