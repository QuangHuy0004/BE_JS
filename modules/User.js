const conn = require('../configs/dbmysql');
const User = {
    getAll: (result) => {
        conn.query("SELECT * FROM db_user", function (err, user) {
            if (err) {
                result(null);
            }
            else {
                result(user);
            }
        });
    }
}

module.exports = User;
