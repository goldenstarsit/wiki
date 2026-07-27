module.exports = {
  version: "0000",

  async up(db) {
    await db.run(`
      CREATE TABLE IF NOT EXISTS migrations (
        version TEXT PRIMARY KEY,
        executed_at TEXT NOT NULL
      )
    `);
  }
};
