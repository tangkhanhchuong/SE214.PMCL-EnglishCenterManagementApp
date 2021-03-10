const { v4: uuidv4 } = require("uuid")

const { SQLQuery } = require("../Database")

const find = async (queryObjects) => {
    let query = `select * from accounts`
    if (queryObjects) {
        const parsedQueryObjects = Object.entries(queryObjects).map(obj => `${obj[0]}='${obj[1]}'`).join(` AND `)
        query += ` where ${parsedQueryObjects}`
    }
    const result = await SQLQuery({ query })
    return result
}

const create = async ({ email, username, password }) => {
    const accountId = uuidv4()
    let query = `insert into accounts(account_id, username, email, password) values ($1, $2, $3, $4)`
    const result = await SQLQuery({ query, options: [accountId, username, email, password] })

    return result
}

module.exports = {
    find,
    create
}