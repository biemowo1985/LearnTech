var { ipcRenderer } = require('electron');
var btnOpen = document.querySelector('#btnOpen');

btnOpen.onclick = function () {
    ipcRenderer.send('openWindow', 'This message is from Renderer.');
};
