var events = require('events');
var fs = require('fs');
var eventEmitter = new events.EventEmitter();

function readFile() {
    fs.readFile('typings.json',function(err,data){
        eventEmitter.emit("readFile", data);
    });
}

readFile();
//console.log(events);

eventEmitter.on("readFile",function(data){
    console.log(data);
});