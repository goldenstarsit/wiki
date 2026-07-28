const assert = require("../helpers/assert");
const db = require("../../src/database/adapters");

async function run() {
  const row = await db.get("SELECT 1 AS value");

  assert(row.value === 1, "Database connection failed");

  console.log("✓ Database test passed");
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
