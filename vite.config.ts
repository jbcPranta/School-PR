import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// ✅ Fix for ESM
const __dirname = new URL('.', import.meta.url).pathname;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "react-toastify": "react-toastify/dist/react-toastify.esm.js",
    },
  },
  server: {
    host: "localhost",
    port: 3000,
  },
});
