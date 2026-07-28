const repository = require("./repository");

module.exports = {
  async health() {
    return repository.health();
  }
};
