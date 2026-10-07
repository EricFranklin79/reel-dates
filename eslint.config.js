import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";
import sonarjs from "eslint-plugin-sonarjs";

export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "test-results/**",
      "playwright-report/**",
      "coverage/**",
    ],
  },
  { ...js.configs.recommended, files: ["**/*.js"] },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { sonarjs },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: [
            ["@babel/plugin-syntax-typescript", { isTSX: true }],
            "@babel/plugin-syntax-jsx",
          ],
        },
      },
    },
    rules: sonarjs.configs.recommended.rules,
  },
];
