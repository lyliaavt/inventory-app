import { defineConfig } from "eslint-define-config";

export default defineConfig([
  {
    files: ["**/*.js"],
    ignores: ["dist/**"], // pindah ke sini
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        test: "readonly",
        expect: "readonly",
        console: "readonly",
        process: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
]);
