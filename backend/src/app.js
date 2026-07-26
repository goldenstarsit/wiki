const http = require("http");

const requestHandler = (req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
      status: "ok",
      service: "wiki-backend"
    }));

    return;
  }

  res.writeHead(404, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({
    error: "Route not found"
  }));
};

module.exports = http.createServer(requestHandler);
