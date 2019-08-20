var fs = require('fs');

fs.stat('./package.json', (err, status) => {
    if (err) {
        console.log(err.message);
        return;
    } else {
        console.log("Is file? " + status.isFile());
        console.log("Is dir? " + status.isDirectory());
    }
});