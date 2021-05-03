var crypto = require("crypto");

const db = require('../Database/postgres_connector')
const { HttpStatus } = require("../Http/index")
const classesServices = require("./classes_services")

const GetAllClasses = async (req, res, next) => {
    const classes = await classesServices.FindClasses()

    HttpStatus.ok(res, {
        count: classes.length,
        classes
    })
}

const GetClassDetails = async (req, res, next) => {
    const classId = req.params.id

    const [classDetail] = await classesServices.FindClasses({ classId })
    const instructors = await classesServices.GetAllInstructorsInClass(classId)
    const students = await classesServices.GetAllStudentsInClass(classId)
    const materials = await classesServices.GetAllMaterials(classId)

    HttpStatus.ok(res, {
        class: {
            ...classDetail,
            instructors,
            students,
            materials
        }
    })
}

const GetStudentsInClass = async (req, res) => {
    const classId = req.params.id
    const students = await classesServices.GetAllStudentsInClass(classId)
    HttpStatus.ok(res, {
        class: {
            classId,
            studentCount: students.length,
            students
        }
    })
}

const GetInstructorsInClass = async (req, res) => {
    const classId = req.params.id

    const instructors = await classesServices.GetAllInstructorsInClass(classId)
    HttpStatus.ok(res, {
        class: {
            classId,
            instructorsCount: instructors.length,
            instructors
        }
    })
}

const CreateClass = async (req, res) => {

    const generateClassId = async (courseId) => {
        const allClasses = await classesServices.FindClasses({ course_id: courseId })
        return `${courseId}.${allClasses.length + 1}`
    }

    const { name, course_id, max_students, schedule, time_slot, duration, begin_at } = req.body
    console.log(req.body);
    const class_id = await generateClassId(course_id)

    const [newClass] = await db('classes')
        .insert({
            course_id, name, class_id, max_students, schedule, time_slot, duration, begin_at
        })
        .returning('*')

    HttpStatus.ok(res, {
        newClass
    })
}

const UpdateClass = async (req, res) => {
    const classId = req.params.id
    const { name, max_students, schedule, time_slot, duration, begin_at } = req.body

    const [updatedClass] = await db('classes')
        .where('class_id', '=', classId)
        .update({ name, max_students, schedule, time_slot, duration, begin_at })
        .returning('*')

    HttpStatus.ok(res, {
        updatedClass
    })
}

const DeleteClass = async (req, res) => {

}

const AddStudentIntoClass = async (req, res) => {
    const { student_id } = req.body
    const class_id = req.params.id

    const [newStudentClass] = await db('student_class')
        .insert({
            student_id, class_id,
            registered_at: new Date(Date.now()),
            paid_at: null
        })
        .returning('*')

    HttpStatus.ok(res, {
        newStudentClass
    })
}

const AddInstructorIntoClass = async (req, res) => {
    const { instructor_id } = req.body
    const class_id = req.params.id

    const [newInstructorClass] = await db('instructor_class')
        .insert({
            instructor_id, class_id
        })
        .returning('*')

    HttpStatus.ok(res, {
        newInstructorClass
    })
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