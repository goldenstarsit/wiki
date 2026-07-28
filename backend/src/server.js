const createApp = require("./app");
const config = require("./config");

const app = createApp();

app.listen(
  config.app.port,
  () => {
    console.log(
      `${config.app.name} running in ${config.app.environment} mode on port ${config.app.port}`
    );
  }
);
