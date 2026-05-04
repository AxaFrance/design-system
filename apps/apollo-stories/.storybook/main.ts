import { defineMain } from "@storybook/react-vite/node";
import { dirname, join } from "path";
import remarkGfm from "remark-gfm";
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
export default defineMain({
  framework: "@storybook/react-vite",
  stories: [
    "../src/Getstarted.mdx",
    "../src/fondations/**/*.mdx",
    "../src/fondations/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/pages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/pages/**/*.mdx",
    "../src/layouts/**/*.stories.@(js|jsx|mjs|ts|tsx)",
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
  core: {
    disableTelemetry: true,
  },
});
