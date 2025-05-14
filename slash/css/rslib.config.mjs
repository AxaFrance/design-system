import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from "@rslib/core";
import { join } from "path";

export default defineConfig({
  // Enables Sass/SCSS support for the build process
  plugins: [pluginSass()],
  lib: [
    {
      source: {
        entry: {
          // Entry points for the library build (all files in src)
          index: ["./src/**"],
        },
      },
      output: {
        // Target environment for the output (web browser)
        target: "web",
        distPath: {
          // Root output directory for build artifacts
          root: "dist",
        },
        copy: [
          // Copy all .scss files from src to dist
          { from: '**/*.scss', context: join(__dirname, 'src') },
        ],
        minify: {
          // Enable CSS minification
          css: true,
        },
        sourceMap: {
          // Generate source maps for CSS output
          css: true,
        }
      },
      tools: {
        cssLoader: {
          url: {
            // Prevents transforming URLs matching the filter (e.g. '/files/', '@material-symbols/') into inline SVG in CSS; keeps the original URL reference instead
            filter: (url) => {
              const filter = ['/files/', '@material-symbols/'];

              return filter.includes(url);
            },
          }
        }
      },
      // Do not bundle the output, emit raw modules
      bundle: false,
      // Output format: ES modules
      format: "esm",
    },
  ],
});
