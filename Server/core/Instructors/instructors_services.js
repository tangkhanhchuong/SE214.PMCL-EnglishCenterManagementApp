const db = require('../Database/postgres_connector')

const GetInstructors = async () => {
    const instructors = await db('instructors as i')
        .join('personal_information as p', 'p.info_id', 'i.info_id')
        .select()
    return instructors
}

module.exports = {
    GetInstructors
}