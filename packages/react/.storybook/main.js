import { dirname, join } from "path";
import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-actions"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-onboarding"),
    "@storybook/addon-docs",
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // See https://github.com/rollup/rollup/issues/4699
  // and https://github.com/TanStack/query/issues/5175
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [svgr()],
      build: {
        chunkSizeWarningLimit: 100,
        rollupOptions: {
          onwarn(warning, warn) {
            if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
              return;
            }
            warn(warning);
          },
        },
      },
    });
  },
};
export default config;
