const Post = require('../modules/Post');

const PostController = {    
    index: (req, res) => {
        Post.getAll((data) => {
            if (data == null) {
                return res.status(200).json({
                    post: null,
                    status: false,
                    message: "Khong tim thay du lieu"
                });
            }
            else {
                return res.status(200).json({
                    post: data,
                    status: true,
                    message: "Tim thay du lieu thanh cong"
                });
            }
        })

    },
};

module.exports = PostController;