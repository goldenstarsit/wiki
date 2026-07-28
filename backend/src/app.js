const express = require("express");
const config = require("./config");
const routes = require("./routes");

function createApp() {
  const app = express();

  app.use(express.json());

  app.use("/api", routes);

  app.config = config;

  return app;
}

module.exports = createApp;
