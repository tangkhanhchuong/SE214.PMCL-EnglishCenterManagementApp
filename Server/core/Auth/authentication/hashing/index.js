const bcrypt = require("bcrypt")

const { HttpStatusCode } = require("../../../Http/index")
const { throwError } = require("../../../Errors/error_handler")

const comparePassword = async (rawPass, encryptedPass) => {
    const validPassword = await bcrypt.compare(rawPass, encryptedPass)
    if (!validPassword) {
        throwError(HttpStatusCode.UNAUTHORIZED, "Wrong Password !")
    }
}

const hashPassword = async (password) => {
    const hashingSalt = 10
    const hashedPassword = await bcrypt.hash(password, hashingSalt)
    return hashedPassword
}

module.exports = { comparePassword, hashPassword }
