import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from "@rslib/core";
import { join } from "path";

export default defineConfig({
  plugins: [pluginSass()],
  lib: [
    {
      source: {
        entry: {
          index: ["./src/**"],
        },
      },
      output: {
        target: "web",
        distPath: {
          root: "dist",
        },
        copy: [
          { from: '**/*.scss', context: join(__dirname, 'src') },
        ],
        minify: {
          css: true,
        },
        sourceMap: {
          css: true,
        }
      },
      tools: {
        cssLoader: {
          url: {
            filter: (url) => {
              const filter = ['/files/', '@material-symbols/'];

              return filter.includes(url);
            },
          }
        }
      },
      bundle: false,
      format: "esm",
    },
  ],
});
