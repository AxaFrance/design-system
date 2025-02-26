/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    name: "slash",
    css: true,
    coverage: {
      reporter: ["text", "lcov", "html"],
      include: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      exclude: [
        "**/*.stories.ts?(x)",
        "**/storybook-static/*",
        "**/vitest.setup.ts",
        "**/.storybook/",
        "**/coverage/",
        "**/dist/*",
        "**/index.ts",
        "**/__tests__/**",
        "**/*.d.ts",
      ],
    },
  },
});
