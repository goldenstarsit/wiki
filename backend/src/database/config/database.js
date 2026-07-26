const path = require("path");

module.exports = {
  development: {
    client: "sqlite3",
    filename: path.join(__dirname, "../../../../database/wiki.sqlite")
  }
};
