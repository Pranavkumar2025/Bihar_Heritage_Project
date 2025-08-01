import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/react-pdf/node_modules/pdfjs-dist/build/pdf.worker.min.mjs",
          dest: "pdf-worker",
          rename: "pdf.worker.min.js",
        },
      ],
    }),
  ],
});
