const Menu = require("../models/Menu");

const MenuController = {
    // index: (req, res) => {
    //     Brand.getAll((data) => {
    //         if (data == null) {
    //             return res.status(200).json({
    //                 brands: null,
    //                 status: false,
    //                 message: "khong co du lieu"
    //             });
    //         } else {
    //             return res.status(200).json({
    //                 brands: data,
    //                 status: true,
    //                 message: "Tai du lieu thanh cong"
    //             });
    //         }
    //     })
    // }
    list: async (req, res) => {
        try {
            const parentid = req.params.parentid;
            const limit = req.params.limit;
            await Menu.getList(parentid, limit, function (menus) {
                if (menus == null) {
                    const result = {
                        menus: null,
                        status: false,
                        message: "Không tìm thấy thông tin!",
                    };
                    return res.status(200).json(result);
                } else {
                    const result = {
                        menus: menus,
                        status: true,
                        message: "Tải dữ liệu thành công!",
                    };
                    return res.status(200).json(result);
                }
            });
        } catch (error) {
            const result = {
                menus: null,
                status: false,
                message: error.message,
            };
            return res.status(200).json(result);
        }
    },
}

module.exports = MenuController