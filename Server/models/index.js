const mysql = require('mysql');
const sqlConfig = require('./config.json');

let connection = mysql.createConnection(sqlConfig);

const connectToSQl = (callback) => {
    connection.connect((err) => {
        if (err) {
            console.log(err);
            return;
        }
        callback();
    })
}

module.exports = { connectToSQl, SQLConnection: connection };