const { HttpStatus } = require("../Http/index")
const db = require('../Database/postgres_connector')

const GetStudents = async (req, res) => {
    const students = await db('students as s')
        .join('personal_information as p', 'p.info_id', 's.info_id')
        .select()

    HttpStatus.ok(res, {
        count: students.length,
        students
    })
}

const GetStudentDetails = async (req, res) => {
    const studentId = req.params.id

    const [student] = await db('students as s')
        .join('personal_information as p', 'p.info_id', 's.info_id')
        .where('s.student_id', studentId)
        .select()

    const participatedClasses = await db('student_class as sc')
        .join('students as s', 's.student_id', 'sc.student_id')
        .join('classes as c', 'c.class_id', 'sc.class_id')
        .where('sc.student_id', studentId)
        .select('c.class_id', 'c.course_id', 'c.schedule', 'c.time_slot', 'c.duration')

    HttpStatus.ok(res, {
        student: { ...student, participatedClasses }
    })
}

const CreateStudent = async (req, res) => {
    const { info_id, name, gender, dob, phone, email, address, avatar_url, student_id } = req.body


    const [newInfo] = await db('personal_information')
        .insert({
            info_id, name, gender, dob, phone, email, address, avatar_url
        })
        .returning('*')

    const [newStudent] = await db('students')
        .insert({
            info_id, student_id, is_studying: true
        })
        .returning('*')

    HttpStatus.created(res, {
        new_student: {
            name: newInfo.name,
            student_id: newStudent.student_id
        }
    })
}

const EditStudent = async (req, res) => {
    const student_id = req.params.id

    const { name, gender, dob, phone, email, address, avatar_url, is_studying } = req.body

    const [updatedStudent] = await db('students')
        .where('student_id', '=', student_id)
        .update({ is_studying })
        .returning('*')

    const info_id = updatedStudent.info_id

    const [updatedStudentInfo] = await db('personal_information')
        .where('info_id', '=', info_id)
        .update({ name, gender, dob, phone, email, address, avatar_url })
        .returning('*')

    HttpStatus.created(res, {
        updated_student: { ...updatedStudent, ...updatedStudentInfo }
    })
}

const RemoveStudent = (req, res) => {

}

module.exports = {
    GetStudents,
    GetStudentDetails,
    CreateStudent,
    RemoveStudent,
    EditStudent
}

