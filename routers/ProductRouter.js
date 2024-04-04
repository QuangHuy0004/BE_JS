const express = require('express');
const router = express.Router();
const Product_Controller = require('../controllers/ProductController');

router.get('/index', Product_Controller.index);
// router.get('/show/:id', Category_Controller.show);
// router.post('/store',Category_Controller.store);
// router.patch('/update/:id',Category_Controller.update);
// router.delete('/delete/:id',Category_Controller.delete);

module.exports = router;