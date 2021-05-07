const { HttpStatus } = require("../Http/index")
const db = require('../Database/postgres_connector')

const GetExams = async (req, res) => {
    const exams = await db('exams')
        .select()

    HttpStatus.ok(res, {
        count: exams.length,
        exams,
    })
}

const GetExamDetails = async (req, res) => {
    const examId = req.params.id

    const [exam] = await db('exams')
        .where('exam_id', examId)
        .select()

    HttpStatus.ok(res, { exam })
}

const CreateExam = async (req, res) => {
    const { name, gender, dob, phone, email, address, avatar_url } = req.body

    const info_id = Math.random().toString().split('.')[1].slice(0, 3) + Date.now().toString().slice(0, 3)

    const [newInfo] = await db('personal_information')
        .insert({
            info_id, name, gender, dob, phone, email, address, avatar_url
        })
        .returning('*')

    const instructor_id = 'INS' + Math.random().toString().split('.')[1].slice(0, 5)

    const [newStudent] = await db('instructors')
        .insert({
            info_id, instructor_id, is_working: true, start_working_at: new Date(Date.now())
        })
        .returning('*')

    HttpStatus.created(res, {
        new_instructor: {
            name: newInfo.name,
            new_instructor: newStudent.instructor_id
        }
    })
}

const EditExam = async (req, res) => {
    const instructorId = req.params.id

    const { name, gender, dob, phone, email, address, avatar_url, is_working } = req.body

    const [updatedExam] = await db('instructors')
        .where('instructor_id', '=', instructorId)
        .update({ is_working })
        .returning('*')

    const info_id = updatedExam.info_id

    const [updatedExamInfo] = await db('personal_information')
        .where('info_id', '=', info_id)
        .update({ name, gender, dob, phone, email, address, avatar_url })
        .returning('*')

    HttpStatus.created(res, {
        updated_instructor: { ...updatedExam, ...updatedExamInfo }
    })
}

const RemoveExam = (req, res) => {

}

module.exports = {
    GetExams,
    GetExamDetails,
    CreateExam,
    RemoveExam,
    EditExam
}

