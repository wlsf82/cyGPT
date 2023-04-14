const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        makeHttpRequest: async (url) => {
          const response = await fetch(url);
          const body = await response.json();
    
          return {
            status: response.status,
            body,
          };
        },
      });
      return config
    },
  },
});
