// const User = require("Database/Db/MongoDb/models/user")
const { HttpStatusCode, HttpStatus } = require("../Http/index")
const { throwError } = require("../Errors/error_handler")

const Course = require("./courses_model")
const Class = require("../Classes/classes_model")

const getAllCourses = async (req, res, next) => {
    const courses = await Course.find()

    HttpStatus.ok(res, {
        message: "Successfully",
        courses,
        method: req.method
    })
}

const getCourseDetails = async (req, res, next) => {
    const courseId = req.params.courseId
    const [course] = await Course.find({ course_id: courseId })
    const classesInCourse = await Class.find({ course_id: courseId })

    HttpStatus.ok(res, {
        message: "Successfully",
        course: { ...course, classesInCourse },
        method: req.method
    })
}

module.exports = { getAllCourses, getCourseDetails }