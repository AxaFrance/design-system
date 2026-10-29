import react from "@vitejs/plugin-react-swc";
import { defineConfig, lazyPlugins } from "vite-plus";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: lazyPlugins(() => [react()]),
  server: {
    port: 6300,
  },
});
