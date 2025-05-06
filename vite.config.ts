import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import withMT from "@material-tailwind/react/utils/withMT";
module.exports = withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), 
      "react-toastify": "react-toastify/dist/react-toastify.esm.js",
    },
  },
});
