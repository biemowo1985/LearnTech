var fs = require('fs');

fs.writeFile('../Files/WriteFile.txt', 'This is the write file data', function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('Write file successful!');
    }
});