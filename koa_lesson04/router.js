/***************************************** Get传值与获取值 ***************************************/
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
}).get('/newscontent', async (ctx) => {
    console.log(ctx.query);
    console.log(ctx.querystring);
    console.log(ctx.request);
    ctx.body = 'News Content';
}).get('/activerouter/:aid/:pname', async (ctx) => {
    console.log(ctx.params);
    ctx.body = 'Active Router';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001, () => {
    console.log('Listening on port 3001...');
});