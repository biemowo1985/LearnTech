
var fs = require('fs');
window.onload = function () {
    var btn = document.querySelector('#btn');
    var content = document.querySelector('#content');

    btn.onclick = function () {
        fs.readFile('package.json', function (err, data) {
            if (err) {
                alert(err.message);
            }
            else {
                content.innerHTML = data;
            }
        });
    };
};