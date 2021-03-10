const db = require('./postgres_connector');

const SQLQuery = async ({ query, options }) => {
    try {
        const data = await db.query(`${query}`, options);
        return data.rows
    }
    catch (err) {
        console.log(err);
        throw err
    }

}

module.exports = {
    SQLQuery
};