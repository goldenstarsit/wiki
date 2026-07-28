const express = require("express");
const config = require("./config");
const routes = require("./routes");

const logger = require("./middleware/logger");
const security = require("./middleware/security");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

function createApp() {
  const app = express();

  app.use(logger);
  app.use(security);
  app.use(express.json());

  app.use("/api", routes);

  app.use(notFound);
  app.use(errorHandler);

  app.config = config;

  return app;
}

module.exports = createApp;
