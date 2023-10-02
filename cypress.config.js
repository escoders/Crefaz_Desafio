const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://finanzero.com.br',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      ignoreVideos: true,
      embeddedScreenshots: true,

    },
    viewportHeight: 768,
    viewportWidth: 1366,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
