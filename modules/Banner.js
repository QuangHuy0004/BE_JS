const conn = require('../configs/dbmysql');

const Banner ={
    getAll: (result) => {
        conn.query("select * from db_Banner", (err, banner, field) => {
            if (err) {
                result(null);
            }
            else{
                result(banner);
            }
        })
    },

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