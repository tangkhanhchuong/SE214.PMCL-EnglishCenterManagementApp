const { HttpStatusCode, HttpStatus } = require("../Http/index")
const { throwError } = require("../Errors/error_handler")
const db = require('../Database/postgres_connector')

const classesServices = require("../Classes/classes_services")
const coursesServices = require("./courses_services")

const GetAllCourses = async (req, res, next) => {
    const courses = await coursesServices.FindCourses()

    HttpStatus.ok(res, {
        count: courses.length,
        courses
    })
}

const GetCourseDetails = async (req, res, next) => {
    const courseId = req.params.id
    const [course] = await coursesServices.FindCourses({ course_id: courseId })
    const classesInCourse = await classesServices.FindClasses({ course_id: courseId })

    HttpStatus.ok(res, {
        course: { ...course, classesInCourse }
    })
}

const CreateCourse = async (req, res) => {
    const { course_id, name, description, fee } = req.body

    const [newCourse] = await db('courses')
        .insert({
            course_id, name, description, fee
        })
        .returning('*')

    HttpStatus.ok(res, {
        newCourse
    })
}

const UpdateCourse = async (req, res) => {
    const courseId = req.params.id
    const { course_name, description, fee } = req.body

    const [updatedCourse] = await db('courses')
        .where('course_id', '=', courseId)
        .update({ course_name, description, fee })
        .returning('*')

    HttpStatus.ok(res, {
        updatedCourse
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