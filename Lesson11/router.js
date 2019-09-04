let fs = require('fs');
let path = require('path');
let url = require('url');

exports.statics=function(res,req,staticsPath){
    var pathName=url.parse(res.url).pathname;
    if(pathName=='/')
    {
        pathName='/index.html';
    }
}