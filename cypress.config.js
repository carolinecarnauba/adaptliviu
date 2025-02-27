const {defineConfig} = require("cypress");

module.exports = defineConfig(
  {
    viewportWidth: 1366,
    viewportHeight: 768, 
    e2e: {
      baseUrl: "https://adaptliviu.com.br/",
      setupNodeEvents(on, config) {
        return config
        // implement node event listeners here
      },
    },
  }
  
); 