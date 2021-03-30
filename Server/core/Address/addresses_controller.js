// const User = require("Database/Db/MongoDb/models/user")
const { HttpStatusCode, HttpStatus } = require("../Http/index")
const { throwError } = require("../Errors/error_handler")

const addressesServices = require("./addresses_services")

const GetAllAddresses = async (req, res, next) => {
    const classes = await addressesServices.FindAddresses()

    HttpStatus.ok(res, {
        message: "Successfully",
        count: classes.length,
        classes,
        method: req.method
    })
}

const GetAddressDetails = async (req, res, next) => {
    const addressId = req.params.addressId
    const [addressDetails] = await addressesServices.FindAddresses({ addressId })

    HttpStatus.ok(res, {
        message: "Successfully",
        address: {
            ...addressDetails,
        },
        method: req.method
    })
}

const CreateAddress = async (req, res) => {
    const { addressId, streetDetails, ward, district, province, city, country } = req.body

    const createdAddress = await addressesServices.CreateAddress({
        addressId, streetDetails, ward, district, province, city, country
    })

    HttpStatus.ok(res, {
        message: "Successfully",
        createdAddress,
        method: req.method
    })
}

const UpdateAddress = async (req, res) => {
    const { addressId, streetDetails, ward, district, province, city, country } = req.body

    const updatedAddress = await addressesServices.UpdateAddress(
        addressId,
        {
            streetDetails, ward, district, province, city, country
        })

    HttpStatus.ok(res, {
        message: "Successfully",
        updatedAddress,
        method: req.method
    })
}

const DeleteAddress = async (req, res) => {

}

module.exports = {
    GetAllAddresses,
    GetAddressDetails,
    CreateAddress,
    UpdateAddress,
    DeleteAddress
}