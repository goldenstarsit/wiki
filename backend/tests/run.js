const { spawn } = require("child_process");
const path = require("path");

const tests = [
  "database/database.test.js",
  "api/health.test.js"
];

(async () => {
  for (const test of tests) {
    await new Promise((resolve, reject) => {
      const child = spawn(
        "node",
        [path.join(__dirname, test)],
        { stdio: "inherit" }
      );

      child.on("exit", code => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(test));
        }
      });
    });
  }

  console.log("All tests passed");
})();
