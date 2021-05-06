const { HttpStatus } = require("../Http/index")
const studentsServices = require("./students_services")
const db = require('../Database/postgres_connector')

const GetStudents = async (req, res) => {
    const students = await studentsServices.GetStudents()

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
        .join('courses as co', 'co.course_id', 'c.course_id')
        .where('sc.student_id', studentId)
        .select('c.class_id', 'c.course_id', 'c.schedule', 'c.time_slot', 'c.duration', 'sc.registered_at', 'sc.paid_at', 'co.fee')
        .orderBy('sc.registered_at', 'desc')

    HttpStatus.ok(res, {
        student: { ...student, participatedClasses }
    })
}

const CreateStudent = async (req, res) => {
    const { name, gender, dob, phone, email, address, avatar_url } = req.body

    const info_id = Math.random().toString().split('.')[1].slice(0, 3) + Date.now().toString().slice(0, 3)

    const [newInfo] = await db('personal_information')
        .insert({
            info_id, name, gender, dob, phone, email, address, avatar_url
        })
        .returning('*')

    const student_id = 'STU-' + Math.random().toString().split('.')[1].slice(0, 5)

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

const PayTuition = async (req, res) => {
    const student_id = req.params.id
    const { class_id } = req.body

    console.log(student_id, class_id);

    const updatedTuitionReceipt = await db('student_class')
        .update({
            paid_at: new Date(Date.now())
        })
        .where({
            'student_id': student_id,
            'class_id': class_id
        })
        .returning('*')

    HttpStatus.ok(res, {
        updatedTuitionReceipt
    })
}

module.exports = {
    GetStudents,
    GetStudentDetails,
    CreateStudent,
    RemoveStudent,
    EditStudent,
    PayTuition
}

