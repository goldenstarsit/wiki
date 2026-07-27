const db = require("../index");

class SQLiteAdapter {
  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      db.run(sql, params, function (err) {
        if (err) {
          return reject(err);
        }

        resolve({
          id: this.lastID,
          changes: this.changes,
        });
      });
    });
  }

  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      db.get(sql, params, (err, row) => {
        if (err) {
          return reject(err);
        }

        resolve(row);
      });
    });
  }

  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => {
        if (err) {
          return reject(err);
        }

        resolve(rows);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      db.close((err) => {
        if (err) {
          return reject(err);
        }

        resolve();
      });
    });
  }
}

module.exports = SQLiteAdapter;
