var http = require('http');
var customModule = require('./customModule.js');

var app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('Hello NodeJs.');
    console.log(customModule);
    res.end();
});

app.listen(8002, '127.0.0.1');