import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), eslintPlugin(),],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
