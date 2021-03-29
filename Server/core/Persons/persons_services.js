const db = require('../Database/postgres_connector')

module.exports = {
    GetAllStudents: () => {
        return db("students")
            .join("personal_information", "students.information_id", "personal_information.information_id")
            .select()
    },

    GetAllInstructors: () => {
        return db("instructors")
            .join("personal_information", "instructors.information_id", "personal_information.information_id")
            .select()
    },
}