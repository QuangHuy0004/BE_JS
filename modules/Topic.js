const conn = require('../configs/dbmysql');
const Topic = {
    getAll: (result) => {
        conn.query("SELECT * FROM db_topic", function (err, topic) {
            if (err) {
                result(null);
            }
            else {
                result(topic);
            }
        });
    }
}

module.exports = Topic;
