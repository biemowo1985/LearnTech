/*jshint esversion: 6 */
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/',async (ctx)=>{
    ctx.body='Hello Koa';
}).get('/news',async (ctx)=>{
    ctx.body='News Page';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('Listening on port 3000...');
});