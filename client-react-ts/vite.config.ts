import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
});
