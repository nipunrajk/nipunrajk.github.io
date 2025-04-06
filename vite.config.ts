import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  resolve: {
    alias: {
      "@components": "/src/components",
      "@styles": "/src/styles",
      "@lib": "/src/lib",
      "@types": "/src/types",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
    },
  },
});
