// const User = require("Database/Db/MongoDb/models/user")
const { HttpStatusCode, HttpStatus } = require("../Http/index")
const { throwError } = require("../Errors/error_handler")
const { generateAuthToken, verifyToken } = require("./authentication/jwt")
const { comparePassword, hashPassword } = require("./authentication/hashing")

const Account = require("./accounts_model")
const AuthServices = require("./auth_services")

let refreshTokens = []

const checkIfEmailNotExisted = async (email) => {
    let user = await AuthServices.FindAccounts({ email })
    if (user.length === 0)
        throwError(HttpStatusCode.CONFLICT, "User with this email could not be found !")
    return user
}

const checkIfEmailExisted = async (email) => {
    let user = await Account.find({ email })
    if (user.length > 0)
        throwError(HttpStatusCode.FORBIDDEN, "Email already exists !")
    return user
}

const logIn = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const [foundUser] = await checkIfEmailNotExisted(email)
        console.log(foundUser)
        await comparePassword(password, foundUser.password)

        const accessToken = generateAuthToken({ email, username: foundUser.username, id: foundUser._id })
        const refreshToken = generateAuthToken({ email, username: foundUser.username, id: foundUser._id }, false)
        refreshTokens.push(refreshToken)

        res.header('authorization', `Bearer ${accessToken} ${refreshToken}`)
        HttpStatus.ok(res, {
            message: "Successfully",
            user: {
                accountId: foundUser._id,
                email: foundUser.email,
                username: foundUser.username
            },
            method: req.method
        })
    }
    catch (err) {
        next(err)
    }
}

const register = async (req, res, next) => {
    const { email, username, password } = req.body

    try {
        await checkIfEmailExisted(email)

        const hashedPassword = await hashPassword(password)
        // const newUser = await Account.create({ email, username, password: hashedPassword })
        const newAccount = await AuthServices.CreateAccount({ email, username, password: hashedPassword })
        HttpStatus.created(res, newUser)

        // const receiverMail = ["chuongbro2104@gmail.com", "tangkhanhchuong@gmail.com"]
        // const content = `<h1>sign in successfully</h1>`
        // sendMail("sendgrid", {
        //     receiverMail: receiverMail,
        //     mailContent: content
        // })
    }
    catch (err) {
        next(err)
    }
}

const logout = (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    HttpStatus.noContent(res)
}

const getAccessTokenByRefreshToken = (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) throwError(HttpStatusCode.UNAUTHORIZED, "You need to log in !")
    if (!refreshTokens.includes(refreshToken)) throwError(HttpStatusCode.FORBIDDEN, "Your refresh token is expired !")

    const user = verifyToken(refreshToken, false)
    const accessToken = generateAuthToken(user)
    HttpStatus.ok(res, { accessToken: accessToken })
}

module.exports = { logIn, register, logout, getAccessTokenByRefreshToken }