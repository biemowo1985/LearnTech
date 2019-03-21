/* jshint esversion:6 */
const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'Password1',
  server: 'localhost\\sqlexpress', // You can use 'localhost\\instance' to connect to named instance
  database: 'ADS_ESCALATION',
};

// promise style:
// const connPool = new sql.ConnectionPool(config, (err) => {
//     console.dir(err);
// });

// connPool.on('error', (err) => {
//     console.dir(err);
// });

// var sqlHelper = {
//     executeCmd(cmdText) {
//         connPool.connect().then((pool) => {
//             return pool.query(cmdText);
//         }).then((result) => {
//             console.dir(result);
//         }).catch((err) => {
//             console.log(err);
//         });
//     },

//     query() {
//         return executeCmd('select top 10 * from [T_FORMULARY]');
//     }
// };


function test() {
  sql.connect(config).then(() => {
        return sql.query('select top 10 * from [T_FORMULARY]');
    }).then((result) => {
      console.dir(result);
    }).catch((err) => {
      console.dir(err);
    });
     
  sql.on('error', err => {
      console.dir(err);
    });
}


module.exports = {
    // query: sqlHelper.query,
  test: test
};
