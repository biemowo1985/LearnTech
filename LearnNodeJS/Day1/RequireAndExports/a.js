/// 1. the 'require' method is used to load the module
/// 2. the 'exports' object is used to export the members of the module
console.log('a started.');

var bObj = require('./b');
console.log('the sexy of b is:' + bObj.Sexy);

console.log('a end.');

