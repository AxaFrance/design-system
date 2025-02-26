/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

// eslint-disable-next-line import/no-default-export
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    build: {
      assetsInlineLimit: 0,
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./vitest.setup.ts",
      name: "look-and-feel",
      css: false,
      poolOptions: {
        forks: {
          minForks: env.CI ? 1 : undefined,
          maxForks: env.CI ? 1 : undefined,
        },
      },
      include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      coverage: {
        reporter: ["text", "lcov", "html"],
        provider: "v8",
        include: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        exclude: [
          "**/*.{stories,test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
          "**/*.d.ts",
          "**/vitest.setup.ts",
          "**/index.{ts,tsx}",
        ],
      },
    },
  };
});
