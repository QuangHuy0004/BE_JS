const Topic = require('../modules/Topic');

const TopicController = {
    index: (req, res) => {
        Topic.getAll((data) => {
            if (data == null) {
                return res.status(200).json({
                    topic: null,
                    status: false,
                    message: "Khong tim thay du lieu"
                });
            }
            else {
                return res.status(200).json({
                    topic: data,
                    status: true,
                    message: "Tim thay du lieu thanh cong"
                });
            }
        })

    },
}

module.exports = TopicController