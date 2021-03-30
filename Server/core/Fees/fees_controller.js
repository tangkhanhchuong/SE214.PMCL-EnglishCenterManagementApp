const { HttpStatus } = require("../Http")
const feesServices = require("./fees_services")

const GetAllInstructors = async (req, res, next) => {
    const instructors = await feesServices.GetAllInstructors()

    HttpStatus.ok(res, {
        message: "Successfully",
        count: instructors.length,
        instructors,
        method: req.method
    })
}

const GetAllStudents = async (req, res, next) => {
    const students = await feesServices.GetAllStudents()

    HttpStatus.ok(res, {
        message: "Successfully",
        count: students.length,
        students,
        method: req.method
    })
}

const GetAllAttendees = async (req, res, next) => {
    const attendees = await feesServices.GetAllAttendees()

    HttpStatus.ok(res, {
        message: "Successfully",
        attendees,
        method: req.method
    })
}

module.exports = {
    GetAllInstructors,
    GetAllStudents,
    GetAllAttendees
}