const { HttpStatus } = require("../Http")
const personsServices = require("./persons_services")

const GetAllInstructors = async (req, res, next) => {
    const instructors = await personsServices.GetAllInstructors()

    HttpStatus.ok(res, {
        message: "Successfully",
        count: instructors.length,
        instructors,
        method: req.method
    })
}

const GetAllStudents = async (req, res, next) => {
    const students = await personsServices.GetAllStudents()

    HttpStatus.ok(res, {
        message: "Successfully",
        count: students.length,
        students,
        method: req.method
    })
}

const GetAllAttendees = async (req, res, next) => {
    const attendees = await personsServices.GetAllAttendees()

    HttpStatus.ok(res, {
        message: "Successfully",
        attendees,
        method: req.method
    })
}

const GetAllPersonalInformation = async (req, res, next) => {
    const personalInformation = await personsServices.GetAllPersonalInformation()

    HttpStatus.ok(res, {
        message: "Successfully",
        personalInformation,
        method: req.method
    })
}


const CreatePersonalInformation = async (req, res) => {
    const { informationId, name, email, gender } = req.body

    const createdCourse = await coursesServices.CreateCourse({ courseId, courseName, description })

    HttpStatus.ok(res, {
        message: "Successfully",
        createdCourse,
        method: req.method
    })
}

const UpdatePersonalInformation = async (req, res) => {
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

const DeletePersonalInformation = async (req, res) => {

}

module.exports = {
    GetAllInstructors,
    GetAllStudents,
    GetAllAttendees,
    GetAllPersonalInformation,
    CreatePersonalInformation,
    DeletePersonalInformation,
    UpdatePersonalInformation
}