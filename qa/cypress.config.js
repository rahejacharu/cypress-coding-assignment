const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 180000, // Timeout for page load (3 minutes)
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      // Example: on('before:browser:launch', (browser = {}) => {})
    }, 
    baseUrl: 'https://weratedogs.com/',
  },
});

