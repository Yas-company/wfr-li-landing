// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from 'url';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
    // site: "https://www.yastech.com.sa/wfr-li-landing/",
    base: "/wfr-li-landing/",
    vite: {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          "~": path.resolve(__dirname, "src"),
        },
      },
    },  
});
