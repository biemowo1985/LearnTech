//Main process
var electron = require('electron');
var path = require('path');
const app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 400, height: 400 });
    //1. use loadFile method or
    //mainWindow.loadFile('index.html');
    mainWindow.loadURL(path.join('file:', __dirname, 'index.html'));

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});