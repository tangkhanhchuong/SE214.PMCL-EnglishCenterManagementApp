// const User = require("Database/Db/MongoDb/models/user")
const db = require('../Database/postgres_connector')

const { HttpStatusCode, HttpStatus } = require("../Http/index")
const { throwError } = require("../Errors/error_handler")
const { generateAuthToken, verifyToken } = require("./authentication/jwt")
const { comparePassword, hashPassword } = require("./authentication/hashing")

const AuthServices = require("./auth_services")

let refreshTokens = []

const _checkIfUsernameNotExisted = async (username) => {
    let user = await AuthServices.FindAccounts({ username })
    if (user.length === 0)
        throwError(HttpStatusCode.CONFLICT, "User with this username could not be found !")
    return user
}

const _checkIfUsernameExisted = async (username) => {
    let user = await AuthServices.FindAccounts({ username })
    if (user.length > 0)
        throwError(HttpStatusCode.FORBIDDEN, "username already exists !")
    return user
}

const getAccounts = async (req, res) =>{
    const userInfo = await db('accounts')
            .select()
    res.status(200).json(userInfo)
}

const logIn = async (req, res, next) => {
    const { username, password } = req.body
    if(!username || !password) {
        return res.status(401).json({
            message: 'Invalid username or password!'
        })
    }

    try {
        const [foundAccount] = await _checkIfUsernameNotExisted(username)
        await comparePassword(password, foundAccount.password)

        const accessToken = generateAuthToken({ username, id: foundAccount._id })
        const refreshToken = generateAuthToken({ username, id: foundAccount._id }, false)
        refreshTokens.push(refreshToken)

        const [userInfo] = await db('personal_information')
            .where('info_id', foundAccount.info_id)
            .select()

        let id
        switch (parseInt(foundAccount.role_id)) {
            case 1:
                id = 'ADMIN'
                break;
            case 2:
                const [instructor] = await db('instructors').where('info_id', foundAccount.info_id).select('instructor_id')
                id = instructor.instructor_id
                break;
            case 3:
                const [student] = await db('students').where('info_id', foundAccount.info_id).select('student_id')
                id = student.student_id
                break;
            default:
                break;
        }

        res.header('authorization', `Bearer ${accessToken} ${refreshToken}`)
        HttpStatus.ok(res, {
            username: foundAccount.username,
            name: userInfo.name,
            id,
            role_id: foundAccount.role_id,
            token: accessToken
        })
    }
    catch (err) {
        next(err)
    }
}

const register = async (req, res, next) => {
    const { username, password } = req.body

    try {
        await _checkIfUsernameExisted(username)

        const hashedPassword = await hashPassword(password)
        // const newUser = await Account.create({ email, username, password: hashedPassword })
        const newAccount = await db('accounts')
            .insert({ username, password: hashedPassword, info_id: 3, role_id: 3, account_id: Math.random().toString().split('.')[1].slice(0, 5) })
            .returning("*")
        console.log(newAccount)
        HttpStatus.created(res, newAccount)
    }
    catch (err) {
        console.log(err)
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

module.exports = { logIn, register, logout, getAccessTokenByRefreshToken, getAccounts }