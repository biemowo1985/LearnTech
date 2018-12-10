var { ipcRenderer } = require('electron');
var BrowserWindow = require('electron').remote.BrowserWindow;

var productID = localStorage.getItem('ProductID');
var prodID = document.querySelector('#prodID');

if (productID) {
    prodID.innerHTML = productID;
}

ipcRenderer.on('passdata2', function (event, data, winID) {
    if (data) {
        prodID.innerHTML = data;
        if (winID) {
            var indexWin=BrowserWindow.fromId(winID);
            indexWin.webContents.send('replydata','Reply OK');
        }
    }
});

