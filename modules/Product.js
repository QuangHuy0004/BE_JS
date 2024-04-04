const conn = require('../configs/dbmysql');
const Products = {
    getAll: (result) => {
        conn.query("SELECT * FROM db_product", function (err, products) {
            if (err) {
                result(null);
            }
            else {
                result(products);
            }
        });
    }
}

module.exports = Products;
