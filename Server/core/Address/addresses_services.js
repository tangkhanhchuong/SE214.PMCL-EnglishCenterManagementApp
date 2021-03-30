const KnexSyntax = require('../Database/postgres_query_syntax')

const FindAddresses = (queryObject) => {
    return KnexSyntax.Find({ table: "addresses", queryObject })
}

const CreateAddress = (newAddress) => {
    return KnexSyntax.Create({ table: "addresses", createdRow: newAddress })
}

const UpdateAddress = (addressId, updatedAddress) => {
    return KnexSyntax.Update({
        table: "addresses",
        condition: {
            addressId,
        },
        updatedRow: updatedAddress
    })
}

const DeleteAddress = () => {

}

module.exports = {
    FindAddresses,
    CreateAddress,
    UpdateAddress,
    DeleteAddress
}