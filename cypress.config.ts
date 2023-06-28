import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'uimo63',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require("./cypress/plugins/index.js")(on, config);
    },
  },
});
