require("dotenv").config();

module.exports = {
  app: {
    name: process.env.APP_NAME || "Wiki",
    environment: process.env.NODE_ENV || "development",
    port: Number(process.env.PORT || 3000)
  }
};
