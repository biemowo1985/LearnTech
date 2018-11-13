var http = require('http');
var server = http.createServer();
var fs = require('fs');
var path = require("path");
var progFilePath = path.join(process.cwd(), 'LearnNodeJS/Day1/Resources/');
function readFileByContentType(url, res) {
    switch (url) {
        case '/txt':
            readFile(progFilePath + 'hello.txt', 'text/plain', res);
            break;
        case '/jpg':
            readFile(progFilePath + 'IMG_0283.JPG', 'image/jpeg', res);
            break;
        case '/html':
            readFile(progFilePath + 'index.html', 'text/html', res);
            break;
        default:
            break;
    }
}
function readFile(filePath, dataContentType, res) {
    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Error:' + err.message);
        }
        else {
            res.setHeader('Content-Type', dataContentType + '; charset=utf-8');
            res.end(data);
        }
    });
}
server.on('request', function (req, res) {
    readFileByContentType(req.url, res);
});

server.listen(3000, function () {
    console.log('Server Started...');
});