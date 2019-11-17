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