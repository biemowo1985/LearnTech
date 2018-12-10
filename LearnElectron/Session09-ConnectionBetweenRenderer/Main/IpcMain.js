var { ipcMain, BrowserWindow } = require('electron');
var winID = BrowserWindow.getFocusedWindow().id;
var path = require('path');
var win = null;
ipcMain.on('openWindow', function (event, data) {
    win = new BrowserWindow({ width: 400, height: 400 });
    win.loadURL(path.join('file:', __dirname, '../news.html'));
    if (data) {
        win.webContents.on('did-finish-load', function () {
            win.webContents.send('passdata2', data, winID);
        });
    }

    win.on('closed', function () {
        win = null;
    });
});