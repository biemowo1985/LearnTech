///Using template engine in NodeJS
var tplObj = require('art-template');

var result = tplObj.render('Hello {{ content }}', {
    content: 'Kevin'
});

console.log(result);
