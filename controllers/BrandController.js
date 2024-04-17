const Brand = require("../models/Brand");

const BrandController = {
    index: (req, res) => {
        Brand.getAll((data) => {
            if (data == null) {
                return res.status(200).json({
                    brands: null,
                    status: false,
                    message: "khong co du lieu"
                });
            } else {
                return res.status(200).json({
                    brands: data,
                    status: true,
                    message: "Tai du lieu thanh cong"
                });
            }
        })
    }
}

module.exports = BrandController