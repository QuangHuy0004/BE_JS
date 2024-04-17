const conn = require("../configs/dbmysql");

const Category = {
    getAll: (mycallback) => {
        const sql = `SELECT * FROM db_category`;
        conn.query(sql, function (err, category) {
            if (err) {
                mycallback(null);
            } else {
                mycallback(category);
            }
        });
    },
    getById: (id, mycallback) => {
        const sql = `SELECT * FROM db_category WHERE id='${id}'`;
        conn.query(sql, function (err, category) {
          if (err || category.lenght == 0) {
            mycallback(null);
          } else {
            mycallback(category[0]);
          }
        });
      },
      store: (category, mycallback) => {
        var sql = "INSERT INTO db_category SET ?";
        conn.query(sql, category, function (err, result) {
            if (err) {
                mycallback(null);
            } else {
                mycallback(result);
            }
        });
    },
    update: (data, id, mycallback) => {
        const sql = `UPDATE db_category SET ? WHERE id='${id}'`;
        conn.query(sql, data, function (err, category) {
            if (err) {
                mycallback(null);
            } else {
                mycallback(data);
            }
        });
    },
    delete: async (id, mycallback) => {
        const sql = `DELETE FROM db_category WHERE id='${id}'`;
        conn.query(sql, function (err, category) {
            if (err) {
                mycallback(null);
            } else {
                mycallback(`Xóa thành công ${id}`);
            }
        });

    },
}
module.exports = Category;
