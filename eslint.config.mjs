import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Shared recommended rules
  js.configs.recommended,
  //Ignore HTML files
  {
    ignores: [ "**/*.html"]
  },

  // Frontend (Browser)
  {
    files: ["**/*.{html,js}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser
      }
    }
  },

  // Backend (Node.js)
  {
    files: ["backend/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node
      }
    }
  }
]);