const Pool = require("pg").Pool;

const db = new Pool({
    user: "postgres",
    password: "khanhchuong",
    host: "localhost",
    port: 5432,
    database: "EnglishCenter"
});

module.exports = db;