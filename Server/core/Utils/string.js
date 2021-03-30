const { v4: uuv4 } = require('uuid')

const ConvertToSnakeCase = (str) => {
    if (!str || str.length === 0) return ""
    return str[0].toLowerCase() +
        str.slice(1, str.length)
            .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

const GenerateStudentId = () => {

}

const GenerateInstructorId = () => {

}

const GenerateClassId = () => {

}

const GenerateCourseId = () => {

}

const GenerateId = (length) => {

}

module.exports = {
    ConvertToSnakeCase,

}