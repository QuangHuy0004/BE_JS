const myslug = require("../function/myslug");
const Category = require("../models/Category");

const CategoryController = {
  index: async (req, res) => {
    try {
      await Category.getAll(function (categorys) {
        const result = {
          categorys: categorys,
          status: true,
          message: "Tải dữ liệu thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        categorys: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
  show: async (req, res) => {
    try {
      const id = req.params.id;
      await Category.getById(id, function (category) {
        if (category == null) {
          const result = {
            category: null,
            status: false,
            message: "Không tìm thấy dữ liệu!",
          };
          return res.status(200).json(result);
        } else {
          const result = {
            category: category,
            status: true,
            message: "Tải dữ liệu thành công!",
          };
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      const result = {
        category: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
  store: async (req, res) => {
    try {
      const formBody = req.body;
      let image = req.files.image;
      image.mv("./assets/images/categories/" + image.name);
      console.log(image.name);
      //Lấy dữ liệu form
      const category = {
        name: formBody.name,
        parent_id: formBody.parent_id,
        sort_order: formBody.sort_order,
        image: image.name,
        description: formBody.description,
        status: formBody.status,
        slug: "ho-dien-loi",
        created_at: "2000-2-2 10:22:11",
      };
      await Category.store(category, function (data) {
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
        category: null,
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
      // Hình ảnh
      let image = req.files.image;
      image.mv(
        "./assets/images/categories/" + image.name,
        function (err, result) {
          if (err) throw err;
        }
      );
      let d = new Date();
      // Dữ liệu đối tượng để lưu
      const data = {
        name: bodyData.name,
        slug: myslug(bodyData.name),
        description: bodyData.description,
        image: image.name,
        sort_order: bodyData.sort_order,
        parent_id: bodyData.parent_id,
        status: bodyData.status,
        updated_by: 1,
        updated_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      };
      await Category.update(data, id, function (category) {
        const result = {
          category: category,
          status: true,
          message: "Cập nhật dữ liệu thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        category: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },

  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      console.log(id);
      await Category.delete(id, function (category) {
        const result = {
          category: category,
          status: true,
          message: "Xóa mẫu tin thành công!",
        };
        return res.status(200).json(result);
      });
    } catch (error) {
      const result = {
        categorys: null,
        status: false,
        message: error.message,
      };
      return res.status(200).json(result);
    }
  },
};

module.exports = CategoryController;
