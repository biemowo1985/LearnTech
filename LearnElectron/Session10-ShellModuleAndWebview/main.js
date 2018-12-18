//Main process
var electron = require('electron');
var path = require('path');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 1024, height: 768 });
    //1. use loadFile method or
    //mainWindow.loadFile('index.html');
    mainWindow.loadURL(path.join('file:', __dirname, 'index.html'));
    require('./menu');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});