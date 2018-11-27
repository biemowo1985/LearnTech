//This is main process

var electron = require('electron');

var app = electron.app;

var BrowserWindow = electron.BrowserWindow;

var win = null;

app.on('ready', function () {
    win = new BrowserWindow({ width: 600, height: 400 });
    win.loadFile('index.html');

    win.on('closed', function() {
        win = null;
    });
});