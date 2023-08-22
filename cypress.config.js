const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    viewportWidth: 1000,
    viewportHeight: 1400,
    //defaultCommandTimeout: 30000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.Asos.com",
  },
});
