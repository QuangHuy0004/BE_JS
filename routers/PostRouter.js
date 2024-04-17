const express = require('express');
const Post_Controller = require('../controllers/PostController');
const router = express.Router();


router.get('/index', Post_Controller.index);
// router.get('/show/:id', Category_Controller.show);
// router.post('/store',Category_Controller.store);
// router.patch('/update/:id',Category_Controller.update);
// router.delete('/delete/:id',Category_Controller.delete);

module.exports = router;