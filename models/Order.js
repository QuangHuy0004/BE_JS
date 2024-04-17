const conn = require("../configs/dbmysql");

const Order = {
    getAll: (result) => {
        conn.query("SELECT * FROM db_order", function (err, order, fields) {
            if (err) {
                result(null);
            } else {
                result(order);
            }
        });
    }
}
module.exports = Order;
