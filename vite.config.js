import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "",
  plugins: [react()],
  resolve: {
    // Resolve the 'module' entrypoint at all times (not the default due to Node.js compatibility issues).
    mainFields: ["module"],
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    target: "ES2022",
  },
});
