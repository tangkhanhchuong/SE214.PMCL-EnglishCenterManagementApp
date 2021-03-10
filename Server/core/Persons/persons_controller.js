const { SQLQuery } = require("../Database")
const queries = require("./queries.json")
const { HttpStatus } = require("../Http")

exports.getAllPersons = async (req, res, next) => {
    const result = await SQLQuery(queries.ALL_PERSONAL_INFO)
    HttpStatus.ok(res, result)
}