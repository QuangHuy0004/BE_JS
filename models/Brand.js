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
    }
}
module.exports = Brand;
