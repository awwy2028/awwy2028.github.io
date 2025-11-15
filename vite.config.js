import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  root: ".",
  publicDir: "public",
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
});