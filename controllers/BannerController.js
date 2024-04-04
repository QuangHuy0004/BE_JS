const Banner = require('../modules/Banner');

const BannerController = {    
    index: (req, res) => {
        Banner.getAll((data) => {
            if (data == null) {
                return res.status(200).json({
                    banner: null,
                    status: false,
                    message: "Khong tim thay du lieu"
                });
            }
            else {
                return res.status(200).json({
                    banner: data,
                    status: true,
                    message: "Tim thay du lieu thanh cong"
                });
            }
        })

    },
};

module.exports = BannerController;