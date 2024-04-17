const conn = require("../configs/dbmysql");

const Product = {
    getAll: (result) => {
        conn.query("SELECT * FROM db_product", function (err, product, fields) {
            if (err) {
                result(null);
            } else {
                result(product);
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
    getList: async (limit, offset, params, mycallback) => {
        console.log(params);
        let sql = 'SELECT * FROM db_product WHERE 1 AND status="1"';
        const values = [];

        // Xây dựng câu truy vấn WHERE dựa trên các tham số truyền vào
        if (params.category) {
            sql += ' AND category_id = ?';
            values.push(params.category);
        }
        if (params.price_min) {
            sql += ` AND price >= ?`;
            values.push(params.price_min);
        }
        if (params.price_max) {
            sql += ` AND price <= ?`;
            values.push(params.price_max);
        }
        if (params.sortMoney) {
            sql += ` ORDER BY price ${params.sortMoney}`;
        }
        // Thêm LIMIT và OFFSET vào câu truy vấn
        sql += ` LIMIT ${limit} OFFSET ${offset}`;
        console.log(sql);
        await conn.query(sql, values, function (err, products) {
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
        const sql = `SELECT * FROM db_product WHERE category_id = '${categoryid}' AND status='1' AND id!='${id}' ORDER BY created_at DESC LIMIT ${limit}`;
        await conn.query(sql, function (err, products) {
            if (err) {
                mycallback(null);
            } else {
                mycallback(products);
            }
        });
    },
    countTotal: async (params, mycallback) => {
        let sql = 'SELECT COUNT(*) AS total FROM db_product WHERE 1';
        const values = [];

        // Thêm các điều kiện lọc vào câu truy vấn SQL
        if (params.category) {
            sql += ' AND category_id = ?';
            values.push(params.category);
        }
        if (params.price_min) {
            sql += ' AND price >= ?';
            values.push(params.price_min);
        }
        if (params.price_max) {
            sql += ' AND price <= ?';
            values.push(params.price_max);
        }

        await conn.query(sql, values, function (err, result) {
            if (err) {
                mycallback(null);
            } else {
                const total = result[0].total; // Lấy giá trị total từ kết quả truy vấn
                mycallback(total);
            }
        });
    }


}
module.exports = Product;
