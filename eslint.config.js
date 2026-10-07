import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";
import sonarjs from "eslint-plugin-sonarjs";
import reactHooks from "eslint-plugin-react-hooks";

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
    plugins: { sonarjs, "react-hooks": reactHooks },
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
    rules: {
      ...sonarjs.configs.recommended.rules,
      ...reactHooks.configs.flat["recommended-latest"].rules,
    },
  },
];
