const db = require('./postgres_connector');
const { LoopThroughAllEntriesOfObject } = require('../Utils/object')
const { ConvertToSnakeCase } = require('../Utils/string')

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

const Find = ({ table, queryObject }) => {
    let query = db(table)
        .select()

    LoopThroughAllEntriesOfObject(queryObject, ([key, value]) => {
        query = query.where(ConvertToSnakeCase(key), value)
    })

    return query
}

const Create = ({ table, createdRow }) => {
    return db(table)
        .insert(createdRow)
        .return("*")
        .toString()
}

const Update = ({ table, condition, updatedRow }) => {
    let query = db(table)

    LoopThroughAllEntriesOfObject(condition, ([key, value]) => {
        query = query.where(ConvertToSnakeCase(key), value)
    })

    return query.update(updatedRow)
}

module.exports = {
    SQLQuery,
    Find,
    Create,
    Update
};