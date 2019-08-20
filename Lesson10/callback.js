//Callback method

var fs = require('fs');

function readFile(callback) {
    fs.readFile('typings.json',function(err,data){
        callback(data);
    });
}

readFile(function(data){
    console.log(data.toString());
});