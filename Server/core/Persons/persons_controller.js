const { SQLQuery } = require("../Database")
const queries = require("./queries.json")
const { HttpStatus } = require("../Http")
const Person = require("./persons_model")

const getAllInstructors = async (req, res, next) => {
    const instructors = await Person.findAllInstructors()

    HttpStatus.ok(res, {
        message: "Successfully",
        instructors,
        method: req.method
    })
}

const getAllStudents = async (req, res, next) => {
    const students = await Person.findAllStudents()

    HttpStatus.ok(res, {
        message: "Successfully",
        students,
        method: req.method
    })
}

module.exports = {
    getAllInstructors,
    getAllStudents

}