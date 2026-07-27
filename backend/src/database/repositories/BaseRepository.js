const db = require("../adapters");

class BaseRepository {
  constructor(table) {
    this.table = table;
  }

  async execute(sql, params = []) {
    return db.run(sql, params);
  }

  async findOne(sql, params = []) {
    return db.get(sql, params);
  }

  async findAll(sql, params = []) {
    return db.all(sql, params);
  }

  async deleteById(id) {
    return db.run(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }

  async count() {
    const result = await db.get(
      `SELECT COUNT(*) AS total FROM ${this.table}`
    );

    return result?.total ?? 0;
  }
}

module.exports = BaseRepository;
