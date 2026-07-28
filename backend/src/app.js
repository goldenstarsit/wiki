const config = require("./config");

function createApp() {
  return {
    name: config.app.name,
    environment: config.app.environment
  };
}

module.exports = createApp;
