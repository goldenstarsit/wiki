const fs = require("fs");
const path = require("path");
const db = require("../adapters");

async function ensureMigrationsTable() {
  await db.run(`
    CREATE TABLE IF NOT EXISTS migrations (
      version TEXT PRIMARY KEY,
      executed_at TEXT NOT NULL
    )
  `);
}

async function runMigrations() {
  await ensureMigrationsTable();

  const files = fs
    .readdirSync(__dirname)
    .filter(
      file =>
        file.endsWith(".js") &&
        file !== "index.js"
    )
    .sort();

  for (const file of files) {
    const migration = require(path.join(__dirname, file));

    const exists = await db.get(
      "SELECT version FROM migrations WHERE version = ?",
      [migration.version]
    );

    if (exists) {
      continue;
    }

    await migration.up(db);

    await db.run(
      "INSERT INTO migrations(version, executed_at) VALUES(?, datetime('now'))",
      [migration.version]
    );

    console.log("Applied migration:", migration.version);
  }

  console.log("Migration completed.");
}

runMigrations().catch(console.error);
