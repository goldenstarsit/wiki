const fs = require("fs");
const path = require("path");
const db = require("../adapters");

async function runSeeds() {
  const files = fs
    .readdirSync(__dirname)
    .filter(
      file =>
        file.endsWith(".seed.js") &&
        file !== "index.js"
    )
    .sort();

  for (const file of files) {
    const seed = require(path.join(__dirname, file));

    await seed.run(db);

    console.log("Executed seed:", seed.name);
  }

  console.log("Seeds completed");
}

runSeeds().catch(console.error);
