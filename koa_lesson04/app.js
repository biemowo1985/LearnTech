/***************************************** 配置Koa路由 ***************************************/
/*jshint esversion: 8 */
const Koa = require('koa');
const app = new Koa();

//1. 第一种写法
const router = require('koa-router')();
//2. 第二种写法
//const Router = require('koa-router');
//const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = 'Hello Koa';
}).get('/news', async (ctx) => {
    ctx.body = 'News Page';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});