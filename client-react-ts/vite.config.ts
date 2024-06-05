import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        landing: resolve(root, "landing", "index.html"),
        user: resolve(root, "user", "index.html"),
        settings: resolve(root, "settings", "index.html"),
      },
    },
  },
});
