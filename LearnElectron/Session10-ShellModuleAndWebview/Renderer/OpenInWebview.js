var { ipcRenderer } = require('electron');
var webview = document.querySelector('#wvContent');

ipcRenderer.on('openInWebview', function (event, data) {
    webview.src = data;
});