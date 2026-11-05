import { defineConfig } from "vite";

// Builds dist/code.js, the script that Figma runs in its sandbox: a single file, IIFE
// format, not minified.
export default defineConfig({
  build: {
    target: "es2020",
    minify: false,
    emptyOutDir: true,
    lib: {
      entry: "src/code.ts",
      formats: ["iife"],
      name: "canopeeComposants",
      fileName: () => "code.js",
    },
  },
});
