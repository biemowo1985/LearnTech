var fs = require('fs');
window.onload = function () {
    var btnRead = document.querySelector('#btnGet');
    var txtaContent = document.querySelector('#txtaContent');
    btnRead.onclick = function () {
        fs.readFile('package.json', function (err, data) {
            if (err) {
                console.log(err.message);
            }
            else {
                txtaContent.innerHTML = data;
            }
        });
    };
};
