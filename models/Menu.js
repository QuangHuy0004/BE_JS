const conn = require("../configs/dbmysql");

const Menu = {
    // getAll: (result) => {
    //     conn.query("SELECT * FROM db_brand", function (err, brand, fields) {
    //         if (err) {
    //             result(null);
    //         } else {
    //             result(brand);
    //         }
    //     });
    // }
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
