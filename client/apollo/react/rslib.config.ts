import { pluginReact } from "@rsbuild/plugin-react";
import { defineConfig } from "@rslib/core";

export default defineConfig({
  plugins: [pluginReact()],
  lib: [
    {
      source: {
        tsconfigPath: "./tsconfig.build.json",
        entry: {
          index: ["./src/**", "!src/**/*.scss", "!src/**/*.{test,spec}.*"],
        },
      },
      output: {
        target: "web",
        distPath: {
          root: "dist",
          assets: "assets",
          svg: "assets/svg",
          font: "assets/font",
          wasm: "assets/wasm",
          image: "assets/image",
          media: "assets/media",
        },
      },
      redirect: {
        style: {
          extension: false,
        },
      },
      bundle: false,
      dts: true,
      format: "esm",
    },
  ],
});
