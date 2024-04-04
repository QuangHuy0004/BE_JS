const User = require('../modules/User');

const UserController = {    
    index: (req, res) => {
        User.getAll((data) => {
            if (data == null) {
                return res.status(200).json({
                    user: null,
                    status: false,
                    message: "Khong tim thay du lieu"
                });
            }
            else {
                return res.status(200).json({
                    user: data,
                    status: true,
                    message: "Tim thay du lieu thanh cong"
                });
            }
        })

    },
};

module.exports = UserController;