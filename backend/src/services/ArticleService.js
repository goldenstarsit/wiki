const BaseService = require("./BaseService");
const BaseRepository = require("../database/repositories/BaseRepository");

class ArticleService extends BaseService {
  constructor() {
    super();
    this.repository = new BaseRepository("articles");
  }

  async list() {
    const articles = await this.repository.findAll();

    return this.success(articles);
  }

  async count() {
    const result = await this.repository.count();

    return this.success(result);
  }
}

module.exports = new ArticleService();
