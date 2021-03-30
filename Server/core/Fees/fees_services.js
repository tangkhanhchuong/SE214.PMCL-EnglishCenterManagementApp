const db = require('../Database/postgres_connector')

const GetAllResults = async () => {
    const students = await GetAllStudents()
    const instructors = await GetAllInstructors()

    return {
        instructors, students
    }
}

const GetResultsDetailsByStudentId = () => {
    return db("students")
        .join("personal_information", "students.information_id", "personal_information.information_id")
        .select()
}

const UpdateResult = () => {

}

const DeleteResult = () => {

}

module.exports = {
    GetAllAttendees,
    GetAllStudents,
    GetAllInstructors
}