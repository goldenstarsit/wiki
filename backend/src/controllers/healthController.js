const response = require("../utils/response");
const articleService = require("../services/ArticleService");

async function health(req, res) {
  const articles = await articleService.count();

  res.json(
    response.success({
      status: "ok",
      service: "wiki-backend",
      articles
    })
  );
}

module.exports = {
  health
};
