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
    },
    getBySlug: async (slug, mycallback) => {
        const sql = `SELECT * FROM db_product WHERE slug='${slug}'`;
        await conn.query(sql, function (err, product) {
            if (err) {
                mycallback(err);
            } else {
                mycallback(product[0]);
            }
        });
    },
    getListProductOther: async (categoryid, id, limit, mycallback) => {
        const sql = `SELECT * FROM db_product WHERE category_id = '${categoryid}' AND status='1' AND id!='${id}'  ORDER BY created_at DESC LIMIT ${limit}`;
        // console.log(sql);
        await conn.query(sql, function (err, products) {
            if (err) {
                mycallback(null);
            } else {
                mycallback(products);
            }
        });
    },
    getListNew: (limit, mycallback) => {
        const sql = `SELECT * FROM db_product WHERE status='1' ORDER BY created_at DESC LIMIT ${limit}`;
        conn.query(sql, function (err, products) {
            if (err) {
                mycallback(null);
            } else {
                mycallback(products);
            }
        });
    },
    getListByBrand: (brandid, limit, mycallback) => {
        const sql = `SELECT * FROM db_product WHERE brand_id ='${brandid}' AND status='1' LIMIT ${limit}`;
        conn.query(sql, function (err, products) {
            if (err) {
                mycallback(null);
            } else {
                mycallback(products);
            }
        });
    },
    getListByCategory: (categoryid, limit, mycallback) => {
        const sql = `SELECT * FROM db_product WHERE category_id ='${categoryid}' AND status='1' LIMIT ${limit}`;
        conn.query(sql, function (err, products) {
            if (err) {
                mycallback(null);
            } else {
                mycallback(products);
            }
        });
    },
    getList: async (limit, offset, mycallback) => {
        const sql = `SELECT * FROM db_product WHERE status='1' ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
        await conn.query(sql, function (err, products) {
            if (err) {
                mycallback(null);
            } else {
                mycallback(products);
            }
        });
    },
    getListProductCategory: async (categoryid, limit, offset, mycallback) => {
        const sql = `SELECT * FROM db_product WHERE status='1' AND category_id='${categoryid}' ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
        await conn.query(sql, function (err, products) {
            if (err) {
                mycallback(null);
            } else {
                mycallback(products);
            }
        });
    },
    delete: async (productId, callback) => {
        const sql = `DELETE FROM db_product WHERE id='${productId}'`;

        // Thực hiện truy vấn SQL để xóa sản phẩm từ cơ sở dữ liệu
        await conn.query(sql, function (err, result) {
            if (err) {
                // Nếu xảy ra lỗi trong quá trình xóa sản phẩm, gọi callback với null và thông báo lỗi
                callback(null, err);
            } else {
                // Nếu xóa thành công, gọi callback với kết quả và không có lỗi
                callback(result);
            }
        });
    }


}

module.exports = Products;
