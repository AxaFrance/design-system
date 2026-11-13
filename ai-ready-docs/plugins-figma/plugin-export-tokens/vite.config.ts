import { readFileSync } from "node:fs";
import { defineConfig, type Plugin } from "vite";

// Writes dist/ui.html: the structure of src/ui/ui.html, with the stylesheet and the
// script (built from src/ui/main.ts) put inside it. Figma reads this file as a
// single string (__html__), so a relative reference to a .css or .js file
// would not resolve.
const inlineUi = (): Plugin => ({
  name: "inline-ui",
  generateBundle(_options, bundle) {
    const script = Object.values(bundle).find(
      (file) => file.type === "chunk" && file.isEntry,
    );
    if (script?.type !== "chunk")
      throw new Error("the interface script was not built");
    const css = readFileSync("src/ui/styles.css", "utf8");
    const stylesheet = /<link rel="stylesheet" href="\.\/styles\.css"\s*\/?>/;
    const entry = /<script type="module" src="\.\/main\.ts"><\/script>/;
    const template = readFileSync("src/ui/ui.html", "utf8");
    if (!stylesheet.test(template) || !entry.test(template))
      throw new Error("src/ui/ui.html must link styles.css and main.ts");
    const html = template
      .replace(stylesheet, () => `<style>\n${css}</style>`)
      .replace(entry, () => `<script>\n${script.code}</script>`);
    delete bundle[script.fileName];
    this.emitFile({ type: "asset", fileName: "ui.html", source: html });
  },
});

// Two builds into dist/: the script that Figma runs in its sandbox (--mode code,
// first, which empties dist/) and the interface (--mode ui). Both are a single file,
// IIFE format, not minified.
export default defineConfig(({ mode }) => ({
  plugins: mode === "ui" ? [inlineUi()] : [],
  build: {
    target: "es2020",
    minify: false,
    emptyOutDir: mode === "code",
    lib: {
      entry: mode === "ui" ? "src/ui/main.ts" : "src/code.ts",
      formats: ["iife"],
      name: mode === "ui" ? "canopeeTokensUi" : "canopeeTokens",
      fileName: () => (mode === "ui" ? "ui.js" : "code.js"),
    },
  },
}));
