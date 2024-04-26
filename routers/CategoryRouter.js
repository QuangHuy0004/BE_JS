const express = require('express');
const router = express.Router();
const Category_Controller = require('../controllers/CategoryController');

router.get('/index', Category_Controller.index);
// router.get('/show/:id', Category_Controller.show);
router.post("/store", Category_Controller.store);
router.put("/edit/:id", Category_Controller.edit);
router.delete("/delete/:id", Category_Controller.delete);

module.exports = router;