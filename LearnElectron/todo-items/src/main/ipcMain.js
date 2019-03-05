/*jshint esversion: 6 */
let { ipcMain, BrowserWindow } = require('electron');

const mainWindow = BrowserWindow.getFocusedWindow();

ipcMain.on('window-min', () => {
    mainWindow.minimize();
});

ipcMain.on('window-close', () => {
    mainWindow.close();
});