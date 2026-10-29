import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite-plus";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    build: {
      assetsInlineLimit: 0,
    },
    test: {
      // Preserve Vitest 4 mock history while migrating to Vitest 5.
      clearMocks: false,
      globals: true,
      environment: "jsdom",
      setupFiles: "./vitest.setup.ts",
      name: "canopee",
      maxWorkers: env.CI ? 1 : undefined,
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
  } satisfies Parameters<typeof defineConfig>[0];
});
