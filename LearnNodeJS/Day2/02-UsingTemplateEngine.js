//Load nodejs modules
var fs = require('fs');
var http = require('http');
var tplObj = require('art-template');
var path = require('path');

//Create server instance
var server = http.createServer();
//Bind request event
server.on('request', function (req, res) {
    if (req.url === '/') {
        var filePath = path.resolve(__dirname, './Templates/template.html');
        fs.readFile(filePath, function (error, data) {
            if (error) {
                return console.log('Error: ' + error.message);
            }
            else {
                var result = tplObj.render(data.toString(), {
                    tplTitle: 'Using template engine',
                    tplTemplateName: 'Art-Template'
                });
                res.end(result);
            }
        });
    }
});
//Listen to the port 3000
server.listen(3000, function () {
    console.log('Server is running');
});

