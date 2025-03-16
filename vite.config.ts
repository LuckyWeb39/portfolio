import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components"],
      },
    }),
  ],
    base:'/portfolio-start-project-vite/',
  resolve: {
    alias: {
      "@": "/src",
    },
  }
});
