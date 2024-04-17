const categoryRouter = require('./CategoryRouter');
const brandRouter = require('./BrandRouter');
const productRouter = require('./ProductRouter');
const postRouter = require('./PostRouter');
const menuRouter = require('./MenuRouter');
const bannerRouter = require('./BannerRouter');

const router = (app) => {
    app.use('/api/category', categoryRouter);
    app.use('/api/brand', brandRouter);
    app.use('/api/product', productRouter);
    app.use('/api/post', postRouter);
    app.use('/api/menu', menuRouter);
    app.use('/api/banner', bannerRouter);
}
module.exports = router;