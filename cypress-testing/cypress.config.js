const { defineConfig } = require("cypress");

module.exports = {
  defaultCommandTimeout: 15000,
  viewportWidth: 1280,
  viewportHeight: 1024,

  e2e: {
    setupNodeEvents(on, config) {},
    baseURL: 'http://localhost:5173',
  },
};
