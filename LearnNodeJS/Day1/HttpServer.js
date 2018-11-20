//1. import the http module
var httpContext = require('http');
//2. create a http server
var server = httpContext.createServer();
//3. config the request event
server.on('request', function (req, res) {
    console.log('Receive the request from Client:' + req.url);
    res.write('Hello');
    res.write('NodeJS');
    res.end();
});

//4. listen to the port, start the server
server.listen(3000, function () {
    console.log("Server started, please access by http://localhost:3000");
});
