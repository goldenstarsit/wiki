const http = require("http");
const assert = require("../helpers/assert");

http.get("http://localhost:3000/api/health", res => {
  assert(res.statusCode === 200, "Health endpoint failed");

  console.log("✓ Health API test passed");
}).on("error", error => {
  console.error(error);
  process.exit(1);
});
