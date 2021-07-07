const db = require('../Database/postgres_connector')

const GetStudents = async () => {
    try {
        const students = await db('students as s')
        .join('personal_information as p', 'p.info_id', 's.info_id')
        .select()
        return students
    }
    catch(err){ 
        console.log(err)
    }
}

module.exports = {
    GetStudents
}