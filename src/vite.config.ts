import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite/dist/index.mjs";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
