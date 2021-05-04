const db = require('../Database/postgres_connector')
const KnexSyntax = require('../Database/postgres_query_syntax')

const FindClasses = (queryObject) => {
    return KnexSyntax.Find({ table: "classes", queryObject })
}

const CreateClass = (newClass) => {
    return KnexSyntax.Create({ table: "classes", createdRow: newClass })
}

const UpdateClass = (classId, updatedClass) => {
    return KnexSyntax.Update({
        table: "classes",
        condition: {
            classId
        },
        updatedRow: updatedClass
    })
}

const GetAllAttendees = (classId) => {
    return db("person_class as pc")
        .where("class_id", classId)
        // .leftJoin("personal_information as info", "info.information_id", "pc.information_id")
        .join("instructors as i", "i.instructor_id", "pc.instructor_id")
        .select()
}

const GetAllInstructorsInClass = (classId) => {
    return db("instructor_class as ic")
        .where("class_id", classId)
        .join("instructors as i", "i.instructor_id", "ic.instructor_id")
        .join("personal_information as info", "info.info_id", "i.info_id")
        .select()
}

const GetAllStudentsInClass = (classId) => {
    return db("student_class as sc")
        .where("class_id", classId)
        .join("students as s", "s.student_id", "sc.student_id")
        .join("personal_information as info", "info.info_id", "s.info_id")
        .select()
}


const DeleteClass = () => {

}

const RemoveStudentFromClass = (studentId, classId) => {
    return db("student_class")
        .where({
            class_id: classId,
            student_id: studentId
        })
        .del()
}

const RemoveInstructorFromClass = (instructorId, classId) => {
    return db("instructor_class")
        .where({
            class_id: classId,
            student_id: instructorId
        })
        .del()
}

module.exports = {
    FindClasses, CreateClass, UpdateClass, DeleteClass,
    GetAllAttendees, GetAllInstructorsInClass, GetAllStudentsInClass,
    RemoveStudentFromClass, RemoveInstructorFromClass
}