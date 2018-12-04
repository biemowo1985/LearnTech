var { ipcMain, BrowserWindow } = require('electron');
var path = require('path');
var win = null;
ipcMain.on('openWindow', function (event, data) {
    win = new BrowserWindow({ width: 400, height: 400 });
    win.loadURL(path.join('file:', __dirname, '../news.html'));

    win.on('closed', function () {
        win = null;
    });
});