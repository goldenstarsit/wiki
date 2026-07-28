const service = require("./service");

module.exports = {
  async health(req, res, next) {
    try {
      const result = await service.health();

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
};
