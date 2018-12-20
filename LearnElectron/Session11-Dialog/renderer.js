const { remote } = require('electron');

var errorDom = document.querySelector('#btnError');
var msgDom = document.querySelector('#btnMsg');
var openDom = document.querySelector('#btnOpen');
var saveDom = document.querySelector('#btnSave');

errorDom.onclick = function () {
    remote.dialog.showErrorBox('', 'Internal Error');
};

msgDom.onclick = function () {
    remote.dialog.showMessageBox({ type:'warning', message: 'It is just a reminder' }, 'Internal Error');
};

openDom.onclick = function () {
    remote.dialog.showOpenDialog('', 'Internal Error');
};

saveDom.onclick = function () {
    remote.dialog.showSaveDialog('', 'Internal Error');
};
