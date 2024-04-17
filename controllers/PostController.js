const Post = require("../models/Post");

const PostController = {
    index: (req, res) => {
        Post.getAll((data) => {
            if (data == null) {
                return res.status(200).json({
                    posts: null,
                    status: false,
                    message: "khong co du lieu"
                });
            } else {
                return res.status(200).json({
                    posts: data,
                    status: true,
                    message: "Tai du lieu thanh cong"
                });
            }
        })

    }
}

module.exports = PostController;