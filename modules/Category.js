const conn = require('../configs/dbmysql/connection');
const Category = {
    getAll: (callback) => {
        const query = 'SELECT * FROM db_category';
        conn.query(query, (err, result) => {
            if (err) {
                callback(err);
            }
        });
    },
    getById: (id, callback) => {
        const query = 'SELECT * FROM db_category WHERE id = ?';
        connection.query(query, [id], (err, result) => {
          if (err) ;
          callback(result[0]);
        });
      },
    create: (data, callback) => {
        const query = 'SELECT * FROM db_category SET ? WHERE id = ?';
        conn.query(query, [id], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    },
    update: (id, data, callback) => {
        const query = 'UPDATE db_category WHERE id =?';
        conn.query(query, [data, id], (err, result) => {
            if (err) ;
            callback(result);
        });
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM db_category WHERE id =?';
        conn.query(query, [id], (err, result) => {
            if (err) ;
            callback(result);
        })
    }
};

module.exports = Category;
