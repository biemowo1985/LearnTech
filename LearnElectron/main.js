//This is main process
var path = require('path');
//1. load electron module
var electron = require('electron');
//2. create electron refference
var app = electron.app;
//3. create BrowserWindow refference
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 1000, height: 400 });

    mainWindow.webContents.openDevTools();

    // mainWindow.loadFile('index.html');
    mainWindow.loadURL(path.join('file:',__dirname,'index.html'));
    console.log(path.join('file:',__dirname,'index.html'));

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});