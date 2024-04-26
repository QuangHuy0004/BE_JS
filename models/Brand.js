const conn = require("../configs/dbmysql");

const Brand = {
  getAll: (result) => {
    conn.query("SELECT * FROM db_brand", function (err, brand, fields) {
      if (err) {
        result(null);
      } else {
        result(brand);
      }
    });
  },

  getById: (id, mycallback) => {
    const sql = `SELECT * FROM db_brand WHERE id='${id}'`;
    conn.query(sql, function (err, brand) {
      if (err || brand.lenght == 0) {
        mycallback(null);
      } else {
        mycallback(brand[0]);
      }
    });
  },

  store: (brand, mycallback) => {
    var sql = "INSERT INTO db_brand SET ?";
    conn.query(sql, brand, function (err, result) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(result);
      }
    });
},

  update: (data, id, mycallback) => {
    const sql = `UPDATE db_brand SET ? WHERE id='${id}'`;
    conn.query(sql, data, function (err, brand) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(data);
      }
    });
  },
  
  delete: async (id, mycallback) => {
    const sql = `DELETE FROM db_brand WHERE id='${id}'`;
    conn.query(sql, function (err, brand) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(`Xóa thành công ${id}`);
      }
    });
  },
};
module.exports = Brand;
