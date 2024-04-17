const conn = require('../configs/dbmysql');
const Menu = {
    getList: (parentid, limit, mycallback) => {
        const sql = `SELECT * FROM db_menu WHERE parent_id ='${parentid}' LIMIT ${limit}`;
        conn.query(sql, function (err, menu) {
           if (err) {
              mycallback(null);
           } else {
              mycallback(menu);
           }
        });
     },
}

module.exports = Menu;
