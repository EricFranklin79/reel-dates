import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? "/",
  cacheDir: process.env.REEL_DATES_BROWSER_TEST
    ? "node_modules/.vite-playwright"
    : "node_modules/.vite",
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset({ target: "19" })] }),
    tailwindcss(),
  ],
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
