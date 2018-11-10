var fs = require('fs')
fs.readFile('../Files/ReadFile.txt', function (error, data) {
    if (error) {
        console.log(error.message)
    }
    else {
        console.log(data.toString())
    }
})

fs.writeFile('../Files/WriteFile.txt', 'This is the write file data', function (err) {
    if (err) {
        console.log(err.message)
    }
    else {
        console.log('Write file successful!')
    }
})