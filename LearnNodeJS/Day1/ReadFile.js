var fs = require('fs');
fs.readFile('../Files/ReadFile.txt', function (error, data) {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log(data.toString());
    }
});