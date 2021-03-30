// const User = require("Database/Db/MongoDb/models/user")
const { HttpStatusCode, HttpStatus } = require("../Http/index")
const { throwError } = require("../Errors/error_handler")

const classesServices = require("../Classes/classes_services")
const coursesServices = require("./courses_services")

const GetAllCourses = async (req, res, next) => {
    const courses = await coursesServices.FindCourses()

    HttpStatus.ok(res, {
        message: "Successfully",
        count: courses.length,
        courses,
        method: req.method
    })
}

const GetCourseDetails = async (req, res, next) => {
    const courseId = req.params.courseId
    const [course] = await coursesServices.FindCourses({ course_id: courseId })
    const classesInCourse = await classesServices.FindClasses({ course_id: courseId })

    HttpStatus.ok(res, {
        message: "Successfully",
        course: { ...course, classesInCourse },
        method: req.method
    })
}

const CreateCourse = async (req, res) => {
    const { courseId, courseName, description } = req.body

    const createdCourse = await coursesServices.CreateCourse({ courseId, courseName, description })

    HttpStatus.ok(res, {
        message: "Successfully",
        createdCourse,
        method: req.method
    })
}

const UpdateCourse = async (req, res) => {
    const { courseId, courseName, description } = req.body

    const updatedCourse = await coursesServices.UpdateCourse(courseId, {
        courseName, description
    })

    HttpStatus.ok(res, {
        message: "Successfully",
        updatedCourse,
        method: req.method
    })
}

const DeleteCourse = async (req, res) => {

}

module.exports = {
    GetAllCourses,
    GetCourseDetails,
    CreateCourse,
    DeleteCourse,
    UpdateCourse
}