import { defineConfig } from 'vite'

// Builds dist/code.js: the script that Figma runs in its sandbox. A single file,
// IIFE format, not minified, with no import left.
export default defineConfig({
  build: {
    target: 'es2020',
    minify: false,
    emptyOutDir: true,
    lib: {
      entry: 'src/code.ts',
      formats: ['iife'],
      name: 'canopeeTokens',
      fileName: () => 'code.js'
    }
  }
})
