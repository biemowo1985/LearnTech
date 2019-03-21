/* jshint esversion:6 */
// const { ipcRenderer } = require('electron');

const sqlHelper = require('./Tools/SqlHelper.js');
// import sqlHelper from '../Tools/SqlHelper.js';

var btnQuery = document.querySelector('#btnQuery');
var divMessage = document.querySelector('#divMessage');

const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'Password1',
    server: 'localhost\\sqlexpress', // You can use 'localhost\\instance' to connect to named instance
    database: 'ADS_ESCALATION'
};

btnQuery.onclick = function () {
    var result = sqlHelper.test();
    // console.dir(result);
};
