import { defineConfig, loadEnv } from "vite-plus";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    test: {
      projects: ["packages/canopee-react"],
      maxWorkers: env.CI ? 1 : undefined,
      coverage: {
        enabled: env.CI === "true",
        reporter: ["text", "lcov", "html"],
        provider: "v8",
        include: [
          "client/apollo/react/src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
          "packages/canopee-react/src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        ],
        exclude: [
          "**/*.{stories,test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
          "**/*.d.ts",
          "**/vitest.setup.ts",
          "**/index.{ts,tsx}",
        ],
      },
    },
  } satisfies Parameters<typeof defineConfig>[0];
});
