import { pluginReact } from "@rsbuild/plugin-react";
import { defineConfig } from "@rslib/core";

export default defineConfig({
  // Enables React support for the build process
  plugins: [pluginReact()],
  lib: [
    {
      source: {
        // Path to the TypeScript config used for building
        tsconfigPath: "./tsconfig.build.json",
        entry: {
          // Entry points for the library build, excluding scss and test/spec files
          index: ["./src/**", "!src/**/*.scss", "!src/**/*.{test,spec}.*"],
        },
      },
      output: {
        // Target environment for the output (web browser)
        target: "web",
        distPath: {
          // Root output directory for build artifacts
          root: "dist",
          // Subdirectory for static assets
          assets: "assets",
          // Subdirectory for SVG files
          svg: "assets/svg",
          // Subdirectory for font files
          font: "assets/font",
          // Subdirectory for WebAssembly files
          wasm: "assets/wasm",
          // Subdirectory for image files
          image: "assets/image",
          // Subdirectory for media files (audio, video, etc.)
          media: "assets/media",
        },
      },
      redirect: {
        style: {
          // Prevents transforming an import of '**.scss' into an import of '**.css' during the build
          extension: false,
        },
      },
      // Do not bundle the output, emit raw modules
      bundle: false,
      // Generate TypeScript definition files
      dts: true,
      // Output format: ES modules
      format: "esm",
    },
  ],
});
