const conn = require("../configs/dbmysql");

const OrderDetail = {
    getAll: (result) => {
        conn.query("SELECT * FROM db_orderdetail", function (err, orderdetail, fields) {
            if (err) {
                result(null);
            } else {
                result(orderdetail);
            }
        });
    }
}
module.exports = OrderDetail;
