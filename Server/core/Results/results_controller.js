// const User = require("Database/Db/MongoDb/models/user")
const { HttpStatusCode, HttpStatus } = require("../Http/index")
const { throwError } = require("../Errors/error_handler")

const resultsServices = require("./classes_services")

const GetAllClasses = async (req, res, next) => {
    const classes = await resultsServices.FindClasses()

    HttpStatus.ok(res, {
        message: "Successfully",
        count: classes.length,
        classes,
        method: req.method
    })
}

const GetClassDetails = async (req, res, next) => {
    const classId = req.params.classId
    const [classDetail] = await resultsServices.FindClasses({ classId })
    const instructors = await resultsServices.GetAllInstructorsInClass(classId)
    const students = await resultsServices.GetAllStudentsInClass(classId)

    HttpStatus.ok(res, {
        message: "Successfully",
        class: {
            ...classDetail,
            instructors,
            students
        },
        method: req.method
    })
}

const GetStudentsInClass = async (req, res) => {
    const classId = req.params.classId

    const students = await resultsServices.GetAllInstructorsInClass(classId)
    HttpStatus.ok(res, {
        message: "Successfully",
        class: {
            classId,
            studentCount: students.length,
            students
        },
        method: req.method
    })
}

const GetInstructorsInClass = async (req, res) => {
    const classId = req.params.classId

    const instructors = await resultsServices.GetAllInstructorsInClass(classId)
    HttpStatus.ok(res, {
        message: "Successfully",
        class: {
            classId,
            instructorsCount: instructors.length,
            instructors
        },
        method: req.method
    })
}

const CreateClass = async (req, res) => {
    const { classId, className, courseId, description } = req.body

    const createdClass = await resultsServices.CreateClass({
        classId, className, courseId, description
    })

    HttpStatus.ok(res, {
        message: "Successfully",
        createdClass,
        method: req.method
    })
}

const UpdateClass = async (req, res) => {
    const { classId, className, courseId, description } = req.body

    const updatedClass = await resultsServices.UpdateClass(classId, {
        className, courseId, description
    })

    HttpStatus.ok(res, {
        message: "Successfully",
        updatedClass,
        method: req.method
    })
}

const DeleteClass = async (req, res) => {

}

const AddStudentIntoClass = async (req, res) => {

}

const AddInstructorIntoClass = async (req, res) => {

}

module.exports = {
    GetAllClasses,
    GetClassDetails,
    GetStudentsInClass,
    GetInstructorsInClass,
    CreateClass,
    UpdateClass,
    DeleteClass,
    AddInstructorIntoClass,
    AddStudentIntoClass
}