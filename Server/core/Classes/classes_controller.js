// const User = require("Database/Db/MongoDb/models/user")
const { HttpStatusCode, HttpStatus } = require("../Http/index")
const { throwError } = require("../Errors/error_handler")

const Class = require("./classes_model")
const Person = require("../Persons/persons_model")

const getAllClasses = async (req, res, next) => {
    const classes = await Class.find()

    HttpStatus.ok(res, {
        message: "Successfully",
        classes,
        method: req.method
    })
}

const getClassDetails = async (req, res, next) => {
    const classId = req.params.classId
    const [classDetail] = await Class.find({ class_id: classId })
    const instructors = await Class.findAllInstructorsInClass(classId)
    const students = await Class.findAllStudentsInClass(classId)

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

module.exports = { getAllClasses, getClassDetails }