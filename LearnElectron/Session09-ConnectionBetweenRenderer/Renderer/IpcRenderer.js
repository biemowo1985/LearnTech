var { ipcRenderer } = require('electron');
var btnOpen = document.querySelector('#btnOpen');
var btnOpenPass = document.querySelector('#btnOpenPass');
var btnOpenPass2 = document.querySelector('#btnOpenPass2');
var ReplyContent = document.querySelector('#ReplyContent');

btnOpen.onclick = function () {
    ipcRenderer.send('openWindow', 'This message is from Renderer.');
};

btnOpenPass.onclick = function () {
    ipcRenderer.send('openWindow');
    var productID = 9527;
    localStorage.setItem('ProductID', productID);
};

btnOpenPass2.onclick = function () {
    var productID = 9327;
    ipcRenderer.send('openWindow', productID);
};

ipcRenderer.on('replydata', function (event, data) {
    if (data) {
        ReplyContent.innerHTML = data;
    }
});