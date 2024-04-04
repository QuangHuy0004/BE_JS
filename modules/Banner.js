const conn = require('../configs/dbmysql');
const Banner = {
    getAll: (result) => {
        conn.query("SELECT * FROM db_banner", function (err, banner) {
            if (err) {
                result(null);
            }
            else {
                result(banner);
            }
        });
    }
}

module.exports = Banner;
