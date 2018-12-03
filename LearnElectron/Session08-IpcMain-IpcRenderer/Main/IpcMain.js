var { ipcMain } = require('electron');

ipcMain.on('sendM', function (event, data) {
    console.log(data);
    console.log(event);
});

ipcMain.on('sendReply', function (event, data) {
    event.sender.send('reply', 'This is reply message from main process');
});

ipcMain.on('sendSync', function (event, data) {
    event.returnValue = 'This is reply sync msg from main process';
});