const db = require('../Database/postgres_connector')

const GetStudents = async () => {
    const students = await db('students as s')
        .join('personal_information as p', 'p.info_id', 's.info_id')
        .select()
    return students
}

module.exports = {
    GetStudents
}