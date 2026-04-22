import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(
    fileURLToPath(
      new URL(
        join("../../../node_modules", value, "package.json"),
        import.meta.url,
      ),
    ),
  );
}

const config: StorybookConfig = {
  stories: [
    "../src/Getstarted.mdx",
    "../src/fondations/**/*.mdx",
    "../src/fondations/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/pages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/pages/**/*.mdx",
    "../src/layouts/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/layouts/**/*.mdx",
  ],
  staticDirs: ["../public"],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@whitespace/storybook-addon-html"),
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;
