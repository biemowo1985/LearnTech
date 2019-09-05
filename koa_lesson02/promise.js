//Method 1:
var pro = new Promise((res, rej) => {
    setTimeout(function () {
        let name = 'Kevin';
        res(name);
    }, 1000);
});

pro.then((data) => {
    console.log(data);
});

//Method 2:

function getData(res, rej) {
    setTimeout(function () {
        let name = 'Kevin';
        res(name);
    }, 1000);
}

var p = new Promise(getData);

p.then((data) => {
    console.log(data);
});