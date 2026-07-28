const config = require("./config");
const createApp = require("./app");

const app = createApp();

console.log(
  `${app.name} running in ${app.environment} mode on port ${config.app.port}`
);
