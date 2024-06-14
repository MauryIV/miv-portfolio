import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

export default defineConfig({
  plugins: [react()],
  server: {
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Check if the request URL matches a known static file, if not serve index.html
        const filePath = resolve(__dirname, "dist", req.url.slice(1));
        if (fs.existsSync(filePath)) {
          next();
        } else {
          fs.readFile(resolve(__dirname, "dist", "index.html"), (err, data) => {
            if (err) {
              next(err);
            } else {
              res.setHeader("Content-Type", "text/html");
              res.end(data);
            }
          });
        }
      });
    },
  },
});
