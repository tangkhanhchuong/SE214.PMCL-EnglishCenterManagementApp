const db = require('../Database/postgres_connector')
const KnexSyntax = require('../Database/postgres_query_syntax')

const FindCourses = (queryObject) => {
    return KnexSyntax.Find({ table: "courses", queryObject })
}

const CreateCourse = (newCourse) => {
    return KnexSyntax.Create({ table: "courses", createdRow: newCourse })
}

const UpdateCourse = (courseId, updatedCourse) => {
    return KnexSyntax.Update({
        table: "courses", condition: {
            courseId,
            updatedRow: updatedCourse
        }
    })
}

const DeleteCourse = () => {

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
    FindCourses,
    CreateCourse,
    UpdateCourse,
    DeleteCourse
}