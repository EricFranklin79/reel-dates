import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? "/",
  cacheDir: process.env.REEL_DATES_BROWSER_TEST
    ? "node_modules/.vite-playwright"
    : "node_modules/.vite",
  plugins: [tailwindcss()],
  build: {
    rolldownOptions: {
      onwarn(warning, defaultHandler) {
        // This app is entirely client-rendered; Mantine's RSC directives do not apply.
        if (
          warning.code === "MODULE_LEVEL_DIRECTIVE" &&
          warning.message.includes('"use client"')
        )
          return;
        defaultHandler(warning);
      },
    },
  },
});
