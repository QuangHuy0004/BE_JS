const conn = require("../configs/dbmysql");

const Post = {
    getAll: (result) => {
        conn.query("SELECT * FROM db_post", function (err, post, fields) {
            if (err) {
                result(null);
            } else {
                result(post);
            }
        });
    }
}
module.exports = Post;
