import { defineMain } from "@storybook/react-vite/node";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

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
    "../src/Home.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@whitespace/storybook-addon-html"),
  ],
  core: {
    disableTelemetry: true,
    builder: "@storybook/builder-vite",
  },
  typescript: {
    reactDocgen: "react-docgen",
  },
  async viteFinal(viteConfig) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import("vite");

    return mergeConfig(viteConfig, {
      resolve: {
        alias: {
          // Point to TypeScript source files to preserve TSDoc in Storybook
          // Order matters: more specific paths must come first
          "@axa-fr/canopee-react/distributeur/experimental": fileURLToPath(
            new URL(
              "../../../packages/canopee-react/src/distributeur-experimental.ts",
              import.meta.url,
            ),
          ),
          "@axa-fr/canopee-react/distributeur": fileURLToPath(
            new URL(
              "../../../packages/canopee-react/src/distributeur.ts",
              import.meta.url,
            ),
          ),
        },
      },
      optimizeDeps: {
        // Exclude canopee packages from pre-bundling to preserve source code
        exclude: ["@axa-fr/canopee-react"],
      },
    });
  },
});
