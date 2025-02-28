/* eslint-disable import/no-extraneous-dependencies */
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

// eslint-disable-next-line import/no-default-export
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    test: {
      poolOptions: {
        forks: {
          singleFork: true,
          minForks: env.CI ? 1 : undefined,
          maxForks: env.CI ? 1 : undefined,
        },
      },
      coverage: {
        reporter: ["text", "lcov", "html"],
        provider: "v8",
        include: [
          "client/look-and-feel/react/src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
          "slash/react/src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        ],
        exclude: [
          "**/*.{stories,test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
          "**/*.d.ts",
          "**/vitest.setup.ts",
          "**/index.{ts,tsx}",
        ],
      },
    },
  }
});
