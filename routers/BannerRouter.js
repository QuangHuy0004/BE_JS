const express = require('express');
const router = express.Router();
const Banner_Controller = require('../controllers/BannerController');

// router.get('/index', Banner_Controller.index);
router.get("/list/:position", Banner_Controller.list);
// router.get('/show/:id', Category_Controller.show);
// router.post('/store',Category_Controller.store);
// router.patch('/update/:id',Category_Controller.update);
// router.delete('/delete/:id',Category_Controller.delete);

module.exports = router;