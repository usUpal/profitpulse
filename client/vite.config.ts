import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

// GitHub Copilot: This code is a configuration file for the Vite build tool, which is used to bundle and optimize web applications. The `defineConfig` function is used to define the configuration object, which is then exported as the default export of the module.

// The configuration object has two properties: `plugins` and `resolve`. The `plugins` property is an array of plugins to use during the build process. In this case, the `react` plugin is included, which enables support for React components in the application.

// The `resolve` property is an object that specifies how to resolve module imports. In this case, an `alias` is defined for the `@` symbol, which is resolved to the `src` directory using the `path.resolve` function. This allows for cleaner and more concise imports in the application code.

// Overall, this configuration file sets up the necessary plugins and module resolution for a Vite-based web application.

// To improve the readability of this code, it could be beneficial to add comments explaining the purpose of each property and how it affects the build process. Additionally, the `path` module could be imported at the top of the file to make it clear where the `path.resolve` function is coming from.