const Product = require('../modules/Product');

const ProductController = {
    index: (req, res) => {
        Product.getAll((data) => {
            if (data == null) {
                return res.status(200).json({
                    products: null,
                    status: false,
                    message: "Khong tim thay du lieu"
                });
            }
            else {
                return res.status(200).json({
                    products: data,
                    status: true,
                    message: "Tim thay du lieu thanh cong"
                });
            }
        })

    },
}

module.exports = ProductController