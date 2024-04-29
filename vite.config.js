import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/ReactJS-TailwindCSS-Portfolio/",
  plugins: [react(), reactRefresh()],
  resolve: {
    alias: {
      "/@/": `${path.resolve(new URL(import.meta.url).pathname, "../../src")}/`,
    },
  },
});
