const Category = require('../modules/Category');

const CategoryController = {
  getAll: (req, res) => {
    Category.getAll((results) => {
      res.status(200).json(results);
    });
  },

  getById: (req, res) => {
    const id = req.params.id;
    Category.getById(id, (result) => {
      if (!result) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.status(200).json(result);
      }
    });
  },

  store: (req, res) => {
    const formBody = req.body;
    const category = {
      name: formBody.name,
      parent_id: formBody.parent_id,
      sort_order: formBody.sort_order,
      image: formBody.image,
      description: formBody.description,
      status: formBody.status,
      slug: "quang huy",
      created_at: "2000-2-2 10:39:22"
    };

    Category.store(category, (err, data) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      Category.getAll((data) => {
        if (data.length === 0) {
          return res.status(200).json({
            category: null,
            status: false,
            message: "Không tìm thấy dữ liệu"
          });
        } else {
          return res.status(200).json({
            category: data,
            status: true,
            message: "Tìm thấy dữ liệu thành công"
          });
        }
      });
    });
  },

  update: (req, res) => {
    const id = req.params.id;
    const formBody = req.body;
    const category = {
      name: formBody.name,
      parent_id: formBody.parent_id,
      sort_order: formBody.sort_order,
      image: formBody.image,
      description: formBody.description,
      status: formBody.status,
      slug: "quang huy",
      created_at: "2000-2-2 10:39:22"
    };

    Category.update(id, category, (err, result) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      if (!result.affectedRows) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.status(200).json({ id: id, ...category });
      }
    });
  },

  delete: (req, res) => {
    const id = req.params.id;
    Category.delete(id, (err, result) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      if (!result.affectedRows) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.status(200).json({ message: 'Category deleted successfully' });
      }
    });
  }
};

module.exports = CategoryController;