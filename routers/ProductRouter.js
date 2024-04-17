const express = require('express');
const router = express.Router();
const Product_Controller = require('../controllers/ProductController');

router.get('/index', Product_Controller.index);
router.get("/list_category/:categoryid/:limit", Product_Controller.list_category);
router.get("/list_brand/:brandid/:limit", Product_Controller.list_brand);
router.get("/list/:page/:limit", Product_Controller.list);
router.get("/list_product_category/:categoryid/:page/:limit", Product_Controller.list_product_category);
router.get("/productdetail/:slug/:limit", Product_Controller.productdetail);
// router.get('/show/:id', Category_Controller.show);
// router.post('/store',Category_Controller.store);
// router.patch('/update/:id',Category_Controller.update);
// router.delete('/delete/:id',Category_Controller.delete);

module.exports = router;