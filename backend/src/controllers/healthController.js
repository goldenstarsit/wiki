const response = require("../utils/response");

function health(req, res) {
  res.json(
    response.success({
      status: "ok",
      service: "wiki-backend"
    })
  );
}

module.exports = {
  health
};
