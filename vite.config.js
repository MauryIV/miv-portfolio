import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/": {
        target: "https://mauryhughesportfolio.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path === "/" ? "/index.html" : path,
      },
    },
  },
});
