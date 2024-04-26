const myslug = require("../function/myslug");
const Brand = require("../models/Brand");

const BrandController = {
  index: (req, res) => {
    Brand.getAll((data) => {
      if (data == null) {
        return res.status(200).json({
          brands: null,
          status: false,
          message: "khong co du lieu",
        });
      } else {
        return res.status(200).json({
          brands: data,
          status: true,
          message: "Tai du lieu thanh cong",
        });
      }
    });
  },
  store: async (req, res) => {
    try {
      const formBody = req.body;
      let image = req.files.image;
      image.mv("./assets/images/brand/" + image.name);
      console.log(image.name);
      //Lấy dữ liệu form
      const brand = {
        id: formBody.id,
        name: formBody.name,
        sort_order: formBody.sort_order,
        image: image.name,
        description: formBody.description,
        status: formBody.status,
        slug: myslug(formBody.name),
        created_at: "2000-2-2 10:22:11",
      };
      await Brand.store(brand, function (data) {
        //data mà nó trả về
        if (data == null) {
          const result = {
            status: false,
            message: "Thêm mới thất bại!",
          };
          return res.status(200).json(result);
        } else {
          console.log("ok");
          const result = {
            status: true,
            message: "Thêm mới thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        brand: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  edit: async (req, res) => {
    try {
      const id = req.params.id;
      let bodyData = req.body;
      let image = req.files.image;
      image.mv("./assets/images/brands/" + image.name, function (err, result) {
        if (err) throw err;
      });

      const data = {
        id: bodyData.id,
        name: bodyData.name,
        description: bodyData.description,
        image: image.name,
        sort_order: bodyData.sort_order,
        status: bodyData.status,
        updated_by: 1, // or get from session
        updated_at: new Date().toISOString().slice(0, 19).replace("T", " "), // format datetime
      };

      await Brand.update(data, id, function (brand) {
        const result = {
          brand: brand,
          status: true,
          message: "Data updated successfully!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        brand: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await Brand.delete(id, function (brand) {
        const result = {
          brand: brand,
          status: true,
          message: "Deleted successfully!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        brands: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
};

module.exports = BrandController;
