var electron = require('electron');
var path = require('path');
var Browserwindow = electron.remote.BrowserWindow;
var thisWindow = null;
var btnOpen = document.querySelector('#btnOpen');
btnOpen.onclick = function () {
    thisWindow = new Browserwindow({
        width: 400,
        height: 300,
        frame: false
    });
    thisWindow.loadURL(path.join('file:', __dirname, 'news.html'));
    thisWindow.on('closed', () => {
        thisWindow = null;
    });
};