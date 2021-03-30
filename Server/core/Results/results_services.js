const db = require('../Database/postgres_connector')
const KnexSyntax = require('../Database/postgres_query_syntax')

const FindResults = (queryObject) => {
    return KnexSyntax.Find({ table: "results", queryObject })
}

const ViewResultDetailsByStudentId = (studentId, query) => {

}

const CreateResult = (newCourse) => {
    return KnexSyntax.Create({ table: "results", createdRow: newCourse })
}

const UpdateResult = (courseId, updatedCourse) => {
    return KnexSyntax.Update({
        table: "courses", condition: {
            courseId,
            updatedRow: updatedCourse
        }
    })
}

const DeleteResult = () => {

}

// const GetAllAttendees = (classId) => {
//     return db("person_class as pc")
//         .where("class_id", classId)
//         .leftJoin("personal_information as info", "info.information_id", "pc.information_id")
//         .select()
// }

// const GetAllInstructorsInClass = (classId) => {
//     return GetAllAttendees(classId)
//         .rightJoin("instructors as i", "i.information_id", "pc.information_id")
// }

// const GetAllStudentsInClass = (classId) => {
//     return GetAllAttendees(classId)
//         .rightJoin("students as s", "s.information_id", "pc.information_id")
// }


module.exports = {
    FindResults,
    CreateResult,
    UpdateResult,
    DeleteResult
}