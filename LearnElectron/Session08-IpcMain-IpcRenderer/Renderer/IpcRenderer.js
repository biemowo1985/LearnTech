var { ipcRenderer } = require('electron');
var btnSend = document.querySelector('#btnSend');
var btnSendReply = document.querySelector('#btnSendReply');
var btnSendReplySync = document.querySelector('#btnSendReplySync');

btnSend.onclick = function () {
    ipcRenderer.send('sendM', 'This message is from Renderer.');
};

btnSendReply.onclick = function () {
    ipcRenderer.send('sendReply', 'This is send reply message');
};

ipcRenderer.on('reply', function (event, data) {
    console.log(data);
});

btnSendReplySync.onclick = function () {
    var msg = ipcRenderer.sendSync('sendSync', 'This is sync msg from renderer');
    console.log(msg);
};