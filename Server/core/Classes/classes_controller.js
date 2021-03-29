// const User = require("Database/Db/MongoDb/models/user")
const { HttpStatusCode, HttpStatus } = require("../Http/index")
const { throwError } = require("../Errors/error_handler")

const ClassServices = require("./classes_services")

const GetAllClasses = async (req, res, next) => {
    const classes = await ClassServices.FindClasses()

    HttpStatus.ok(res, {
        message: "Successfully",
        count: classes.length,
        classes,
        method: req.method
    })
}

const GetClassDetails = async (req, res, next) => {
    const classId = req.params.classId
    const [classDetail] = await ClassServices.FindClasses({ classId })
    const instructors = await ClassServices.GetAllInstructorsInClass(classId)
    const students = await ClassServices.GetAllStudentsInClass(classId)

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

    const students = await ClassServices.GetAllInstructorsInClass(classId)
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

    const instructors = await ClassServices.GetAllInstructorsInClass(classId)
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

    const createdClass = await ClassServices.CreateClass({
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

    const updatedClass = await ClassServices.UpdateClass(classId, {
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