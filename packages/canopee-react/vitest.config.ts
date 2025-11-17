import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

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
      name: "canopee",
      poolOptions: {
        forks: {
          minForks: env.CI ? 1 : undefined,
          maxForks: env.CI ? 1 : undefined,
        },
      },
      include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      coverage: {
        reporter: ["text", "lcov", "html"],
        include: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        exclude: [
          "src/**/*.{stories,test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
          "src/**/types.d.ts",
          "src/env.d.ts",
          "src/**/constants.ts",
          "src/**/index.{ts,tsx}",
        ],
      },
    },
  };
});
