const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      if (config.env.ENVIRONMENT == "assignment2"){
        return {
          baseUrl: "https://parabank.parasoft.com/",
          specPattern: "cypress/e2e/assignment2/**/*.cy.js",
          watchForFileChanges: false
         
        }
      }
      
      
      

    },
  },
});
