const sqlite3 = require("sqlite3").verbose();
const config = require("./config/database");

const db = new sqlite3.Database(
  config.development.filename,
  (err) => {
    if (err) {
      console.error("Database connection failed:", err.message);
      return;
    }

    console.log("SQLite connected");
  }
);

module.exports = db;
