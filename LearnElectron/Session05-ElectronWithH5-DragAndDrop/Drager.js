var fs = require('fs');
window.onload = function () {
    var divContainer = document.querySelector('#container');
    divContainer.ondragenter = divContainer.ondragover = divContainer.ondragleave = function () {
        return false;
    };

    divContainer.ondrop = function (e) {
        e.preventDefault();
        // console.log(e.dataTransfer.files[0]);
        var filepath = e.dataTransfer.files[0].path;
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err) {
                console.log(err.message);
            }
            else {
                divContainer.innerHTML = data;
            }
        });
    };
};
