const db = require('../Database/postgres_connector')
const KnexSyntax = require('../Database/postgres_query_syntax')
const AddressesServices = require('../Address/addresses_services')

const GetAllAttendees = async () => {
    const students = await GetAllStudents()
    const instructors = await GetAllInstructors()

    return {
        instructors, students
    }
}

const GetAllStudents = () => {
    return db("students as s")
        .join("personal_information as i", "s.information_id", "i.information_id")
        .select("*", "joiner_id as student_id")
}

const GetStudentsDetails = (studentId) => {
    return db("students as s")
        .join("personal_information as i", "s.information_id", "i.information_id")
        .join('addresses as a', 'a.address_id', 'i.address_id')
        .select("*", "joiner_id as student_id")
        .where(`s.joiner_id`, studentId)
}

const GetAllInstructors = () => {
    return db("instructors")
        .join("personal_information", "instructors.information_id", "personal_information.information_id")
        .select()
}

const GetInstructorsDetails = (studentId) => {
    return db("instructors as ins")
        .join("personal_information as info", "ins.information_id", "info.information_id")
        .join('addresses as addr', 'addr.address_id', 'info.address_id')
        .select("*", "joiner_id as student_id")
        .where(`ins.joiner_id`, studentId)
}

const GetAllPersonalInformation = async () => {
    return db("personal_information")
        .join("addresses", "addresses.address_id", "personal_information.address_id")
        .select()
}


const CreatePersonalInformation = async (newInformation) => {
    const { name, email, gender, streetInfo, ward, district, province, city, country } = req.body

    const createdAddress = await AddressesServices.CreateAddress({
        addressId: "111", streetInfo, ward, district, province, city, country
    })

    return KnexSyntax.Create({ table: "personal_information", createdRow: newInformation })
}

const UpdatePersonalInformation = async (informationId, updatedInformation) => {
    return KnexSyntax.Update({
        table: "personal_information", condition: {
            informationId,
            updatedRow: updatedInformation
        }
    })
}

const DeletePersonalInformation = async () => {

}

module.exports = {
    GetAllAttendees,
    GetAllStudents,
    GetStudentsDetails,
    GetAllInstructors,
    GetInstructorsDetails,
    GetAllPersonalInformation,
    CreatePersonalInformation,
    UpdatePersonalInformation,
    DeletePersonalInformation
}