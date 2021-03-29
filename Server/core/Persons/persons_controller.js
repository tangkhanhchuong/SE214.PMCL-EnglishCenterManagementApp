const { HttpStatus } = require("../Http")
const PersonServices = require("./persons_services")

const GetAllInstructors = async (req, res, next) => {
    const instructors = await PersonServices.GetAllInstructors()

    HttpStatus.ok(res, {
        message: "Successfully",
        count: instructors.length,
        instructors,
        method: req.method
    })
}

const GetAllStudents = async (req, res, next) => {
    const students = await PersonServices.GetAllStudents()

    HttpStatus.ok(res, {
        message: "Successfully",
        count: students.length,
        students,
        method: req.method
    })
}

module.exports = {
    GetAllInstructors,
    GetAllStudents

}