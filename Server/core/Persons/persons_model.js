const { v4: uuidv4 } = require("uuid")

const { SQLQuery } = require("../Database")

const findAllStudents = async (queryObjects) => {
    let query = `select * from students, personal_information where students.information_id = personal_information.information_id`

    const result = await SQLQuery({ query })
    return result
}

const findAllInstructors = async (queryObjects) => {
    console.log(queryObjects);

    let query = `select * from instructors, personal_information where instructors.information_id=personal_information.information_id`

    const result = await SQLQuery({ query })
    return result
}

const create = async ({ email, username, password }) => {
    const accountId = uuidv4()
    let query = `insert into courses(account_id, username, email, password) values ($1, $2, $3, $4)`
    const result = await SQLQuery({ query, options: [accountId, username, email, password] })

    return result
}

module.exports = {
    findAllStudents,
    findAllInstructors,
    create
}