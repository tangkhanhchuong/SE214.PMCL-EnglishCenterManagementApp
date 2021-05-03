const { HttpStatus } = require("../Http/index")
const db = require('../Database/postgres_connector')

const GetInstructors = async (req, res) => {
    const instructors = await db('instructors as i')
        .join('personal_information as p', 'p.info_id', 'i.info_id')
        .select()

    HttpStatus.ok(res, {
        count: instructors.length,
        instructors,
    })
}

const GetInstructorDetails = async (req, res) => {
    const instructorId = req.params.id

    const [instructor] = await db('instructors as i')
        .join('personal_information as p', 'p.info_id', 'i.info_id')
        .where('i.instructor_id', instructorId)
        .select()

    const participatedClasses = await db('instructor_class as ic')
        .join('instructors as i', 'i.instructor_id', 'ic.instructor_id')
        .join('classes as c', 'c.class_id', 'ic.class_id')
        .where('ic.instructor_id', instructorId)
        .select('c.class_id', 'c.course_id', 'c.schedule', 'c.time_slot', 'c.duration')

    HttpStatus.ok(res, {
        instructor: { ...instructor, participatedClasses }
    })
}

const CreateInstructor = async (req, res) => {
    const { info_id, name, gender, dob, phone, email, address, avatar_url, instructor_id } = req.body

    const [newInfo] = await db('personal_information')
        .insert({
            address, avatar_url, dob, email, gender, info_id, name, phone
        })
        .returning('*')

    const [newInstructor] = await db('instructors')
        .insert({
            instructor_id,
            start_working_at: new Date(Date.now()),
            is_working: true,
            info_id
        })
        .returning('*')

    HttpStatus.created(res, {
        new_instructor: {
            name: newInfo.name,
            instructor_id: newInstructor.instructor_id
        }
    })
}

const EditInstructor = async (req, res) => {
    const instructorId = req.params.id

    const { name, gender, dob, phone, email, address, avatar_url, is_working } = req.body

    const [updatedInstructor] = await db('instructors')
        .where('instructor_id', '=', instructorId)
        .update({ is_working })
        .returning('*')

    const info_id = updatedInstructor.info_id

    const [updatedInstructorInfo] = await db('personal_information')
        .where('info_id', '=', info_id)
        .update({ name, gender, dob, phone, email, address, avatar_url })
        .returning('*')

    HttpStatus.created(res, {
        updated_instructor: { ...updatedInstructor, ...updatedInstructorInfo }
    })
}

const RemoveInstructor = (req, res) => {

}

module.exports = {
    GetInstructors,
    GetInstructorDetails,
    CreateInstructor,
    RemoveInstructor,
    EditInstructor
}

