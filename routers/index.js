const categoryRouter = require('./CategoryRouter');
const brandRouter = require('./BrandRouter');
const productRouter = require('./ProductRouter');
const topicRouter = require('./TopicRouter');
const bannerRouter = require('./BannerRouter');
const postRouter = require('./PostRouter');
const userRouter = require('./UserRouter');
const router = (app) => {
    app.use('/api/category', categoryRouter);
    app.use('/api', categoryRouter);
    app.use('/api/brand', brandRouter);
    app.use('/api/product', productRouter);
    app.use('/api/topic', topicRouter);
    app.use('/api/banner', bannerRouter);
    app.use('/api/post', postRouter);
    app.use('/api/user', userRouter);
}
module.exports = router;