const Product = require("../models/Product");

const ProductController = {
    index: (req, res) => {
        Product.getAll((data) => {
            if (data == null) {
                return res.status(200).json({
                    products: null,
                    status: false,
                    message: "khong co du lieu"
                });
            } else {
                return res.status(200).json({
                    products: data,
                    status: true,
                    message: "Tai du lieu thanh cong"
                });
            }
        })
    },
    list_category: async (req, res) => {
        try {
            const categoryid = req.params.categoryid;
            const limit = req.params.limit;
            await Product.getListByCategory(categoryid, limit, function (products) {
                if (products == null) {
                    const result = {
                        products: null,
                        status: false,
                        message: "Không tìm thấy thông tin!",
                    };
                    return res.status(200).json(result);
                } else {
                    const result = {
                        products: products,
                        status: true,
                        message: "Tải dữ liệu thành công!",
                    };
                    return res.status(200).json(result);
                }
            });
        } catch (error) {
            const result = {
                products: null,
                status: false,
                message: error.message,
            };
            return res.status(200).json(result);
        }
    },
    list_brand: async (req, res) => {
        try {
            const brandid = req.params.brandid;
            const limit = req.params.limit;
            await Product.getListByBrand(brandid, limit, function (products) {
                if (products == null) {
                    const result = {
                        products: null,
                        status: false,
                        message: "Không tìm thấy thông tin!",
                    };
                    return res.status(200).json(result);
                } else {
                    const result = {
                        products: products,
                        status: true,
                        message: "Tải dữ liệu thành công!",
                    };
                    return res.status(200).json(result);
                }
            });
        } catch (error) {
            const result = {
                products: null,
                status: false,
                message: error.message,
            };
            return res.status(200).json(result);
        }
    },
    list: async (req, res) => {
        try {
            const page = req.params.page;
            const limit = req.params.limit;
            const params = req.query;
            //Xử lý page
            let offset = (page - 1) * limit;
            //
            await Product.getList(limit, offset, params, function (products) {
                if (products == null) {
                    const result = {
                        products: null,
                        status: false,
                        message: "Không tìm thấy thông tin!",
                    };
                    return res.status(200).json(result);
                } else {
                    Product.countTotal(params, function (total) {
                        const result = {
                            products: products,
                            status: true,
                            message: "Tải dữ liệu thành công!",
                            meta: {
                                total: total,
                                total_page: Math.ceil(total / limit)
                            }
                        };
                        return res.status(200).json(result);
                    });

                }
            });
        } catch (error) {
            const result = {
                products: null,
                status: false,
                message: error.message,
            };
            return res.status(200).json(result);
        }
    },
    list_product_category: async (req, res) => {
        try {
            const categoryid = req.params.categoryid;
            const page = req.params.page;
            const limit = req.params.limit;
            //Xử lý page
            let offset = (page - 1) * limit;
            //
            await Product.getListProductCategory(categoryid, limit, offset, function (products) {
                if (products == null) {
                    const result = {
                        products: null,
                        status: false,
                        message: "Không tìm thấy thông tin!",
                    };
                    return res.status(200).json(result);
                } else {
                    const result = {
                        products: products,
                        status: true,
                        message: "Tải dữ liệu thành công!",
                    };
                    return res.status(200).json(result);
                }
            });
        } catch (error) {
            const result = {
                products: null,
                status: false,
                message: error.message,
            };
            return res.status(200).json(result);
        }
    },
    productdetail: async (req, res) => {
        try {
            const slug = req.params.slug;
            const limit = req.params.limit;
            console.log(limit)
            await Product.getBySlug(slug, function (product) {
                if (product == null) {
                    const result = {
                        product: null,
                        status: false,
                        message: "Không tìm thấy thông tin!",
                    };
                    return res.status(200).json(result);
                } else {
                    Product.getListProductOther(product.category_id, product.id, limit, function (products) {
                        const result = {
                            product: product,
                            products: products,
                            status: true,
                            message: "Tải dữ liệu thành công!",
                        };
                        console.log(products);
                        return res.status(200).json(result);
                    });
                }
            });
        } catch (error) {
            const result = {
                products: null,
                status: false,
                message: error.message,
            };
            return res.status(200).json(result);
        }
    },
}

module.exports = ProductController