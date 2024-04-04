const Brand = require('../modules/Brand');

const BrandController = {    
    index: (req, res) => {
        Brand.getAll((data) => {
            if (data == null) {
                return res.status(200).json({
                    brand: null,
                    status: false,
                    message: "Khong tim thay du lieu"
                });
            }
            else {
                return res.status(200).json({
                    brand: data,
                    status: true,
                    message: "Tim thay du lieu thanh cong"
                });
            }
        })

    },
};

module.exports = BrandController;