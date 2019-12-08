/********************************* Koa中的中间件（应用级中间件） *****************************/
/*jshint esversion: 8 */
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

app.use(async(ctx,next)=>{
    console.log(new Date());
    await next();
});

router.get('/', async (ctx) => {
    ctx.body = 'Hello Koa';
}).get('/news', async (ctx) => {
    ctx.body = 'News Page';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001, () => {
    console.log('Listening on port 3001...');
});