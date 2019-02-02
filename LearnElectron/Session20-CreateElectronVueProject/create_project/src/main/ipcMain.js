let { ipcMain } = require('electron');

ipcMain.on('toMain', function (event, data) {
    console.log(data);
});