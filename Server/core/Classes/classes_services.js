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

const DeleteClass = () => {

}

const GetAllAttendees = (classId) => {
    return db("person_class as pc")
        .where("class_id", classId)
        .leftJoin("personal_information as info", "info.information_id", "pc.information_id")
        .select()
}

const GetAllInstructorsInClass = (classId) => {
    return GetAllAttendees(classId)
        .rightJoin("instructors as i", "i.information_id", "pc.information_id")
}

const GetAllStudentsInClass = (classId) => {
    return GetAllAttendees(classId)
        .rightJoin("students as s", "s.information_id", "pc.information_id")
}


module.exports = {
    FindClasses,
    GetAllAttendees,
    GetAllInstructorsInClass,
    GetAllStudentsInClass,
    CreateClass,
    UpdateClass

}