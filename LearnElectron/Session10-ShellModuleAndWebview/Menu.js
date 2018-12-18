const { shell, Menu, BrowserWindow } = require('electron');

let template = [
    {
        label: 'Shell Module',
        submenu: [
            {
                label: 'Baidu',
                click: function () {
                    shell.openExternal('http://www.baidu.com/');
                }
            },
            {
                label: 'XiaoMi',
                click: function () {
                    shell.openExternal('https://www.mi.com');
                }
            }
        ]
    },
    {
        label: 'Webview',
        submenu: [
            {
                label: 'Baidu',
                click: function () {
                    openInWebview('http://www.baidu.com/');
                }
            },
            {
                label: 'XiaoMi',
                click: function () {
                    openInWebview('https://www.mi.com');
                }
            }
        ]
    }
];

var menuObj = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menuObj);


function openInWebview(url) {
    var focusedWindow = BrowserWindow.getFocusedWindow();
    focusedWindow.webContents.send('openInWebview', url);
}