/*jshint esversion: 8 */

/* ----------------- 以前的写法 ------------------ */
//普通方法
function getData() {
    return 'Kevin';
}

console.log(getData());

//异步方法
async function getDataAsync() {
    return 'async Kevin';
}

console.log(getDataAsync());

//获取async方法数据
var p = getDataAsync();
p.then((data) => {
    console.log(data);
});

/* ----------------- Koa里最新的写法 ------------------ */
function getData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            var username = 'Kevin';
            res(username);
        }, 1000);
    });
}

async function test() {
    var d = await getData();
    console.log(d);
}

test();