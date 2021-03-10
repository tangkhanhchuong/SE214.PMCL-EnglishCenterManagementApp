const { SQLConnection } = require('../models');

const SQLQuery = (queryString, callback) => {
    SQLConnection.query(`${queryString}`, (err, data, fields) => {
        if (err) {
            console.log(err);
            throw err;
        }
        callback(data);
    });
}

module.exports = SQLQuery;