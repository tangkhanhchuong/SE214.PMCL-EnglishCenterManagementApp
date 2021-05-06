const { HttpStatus } = require('../Http/index')
const instructorsServices = require('../Instructors/instructors_services')
const studentsServices = require('../Students/students_services')
const classesServices = require('../Classes/classes_services')
const coursesServices = require('../Courses/courses_services')
const db = require('../Database/postgres_connector')

const GetStatistic = async (req, res) => {
    const instructors = await instructorsServices.GetInstructors()
    const students = await studentsServices.GetStudents()
    const classes = await classesServices.FindClasses()
    const courses = await coursesServices.FindCourses()

    HttpStatus.ok(res, {
        students_count: students.length,
        instructors_count: instructors.length,
        courses_count: courses.length,
        classes_count: classes.length,
    })
}

module.exports = {
    GetStatistic
}

