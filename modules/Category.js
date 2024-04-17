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

  getList: (parentid, mycallback) => {
    const sql = `SELECT * FROM db_category WHERE parent_id ='${parentid}' AND status='1'`;
    conn.query(sql, function (err, categorys) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(categorys);
      }
    });
  },

  store: (category, mycallback) => {
    const sql = "INSERT INTO db_category SET ?";
    conn.query(sql, category, function (err, result) {
      if (err) {
        mycallback(err, false);
      } else {
        mycallback(result, true);
      }
    });
  },

  update: (data, id, mycallback) => {
    const sql = `UPDATE db_category SET ? WHERE id='${id}'`;
    conn.query(sql, data, function (err, result) {
      if (err) {
        mycallback(null);
      } else {
        mycallback(result, true);
      }
    });
  },
  

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await Category.delete(id, function (category) {
        const result = {
          category: category,
          status: true,
          message: "Xóa mẫu tin thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        categorys: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  }
  
}
module.exports = Category;
