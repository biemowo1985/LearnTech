//引入koa组件
var koa = require('koa');

//实例化koa
var app = new koa();

//以前express的写法
// app.use(function(req,res){
//     res.send('message');
// });

app.use(async (context) => {
    context.body = 'Hello koa2.x';
});

//监听3000端口
app.listen(3000);