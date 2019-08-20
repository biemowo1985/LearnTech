//Wrong method

var fs = require('fs');

function readFile() {
    fs.readFile('typings.json',function(err,data){
        console.log(data);
    });
}

readFile();