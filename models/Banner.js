const conn = require("../configs/dbmysql");

const Banner = {
    getList: (position, mycallback) => {
        const sql = `SELECT * FROM db_banner WHERE position ='${position}' AND status='1'`;
        conn.query(sql, function (err, banners) {
            if (err) {
                mycallback(null);
            } else {
                mycallback(banners);
            }
        });
    },
}
module.exports = Banner;
