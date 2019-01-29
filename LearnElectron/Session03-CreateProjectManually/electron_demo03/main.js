/*jshint esversion:6 */
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');//node.js

var mainWindow = null;

app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    //mainWindow.loadFile('index.html');
    mainWindow.loadURL(path.join('file:', __dirname, 'index.html'));

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
