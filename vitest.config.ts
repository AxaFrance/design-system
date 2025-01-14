import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ["text", "lcov", "html"],
      include: ["client/look-and-feel/react/src", "slash/react/src"],
      exclude: [
        "**/*.stories.ts?(x)",
        "./config/*",
        "**/storybook-static/*",
        "**/vitest.setup.ts",
        "**/.eslintrc.js",
        "**/.storybook/",
        "**/coverage/",
        "**/dist/*",
        "**/prettier.config.js",
        "**/index.ts",
        "**/__tests__/**",
      ],
    },
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
  plugins: [react()],
});
