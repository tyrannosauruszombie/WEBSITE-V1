import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: ".", // ✅ Ensures Vite uses the root index.html
  base: "./", // ✅ Relative paths so Netlify can find assets
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // ✅ Explicit entry
    },
  },
});
     